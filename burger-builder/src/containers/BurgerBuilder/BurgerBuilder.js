import React, { Component }from 'react';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 0.7,
  bacon: 0.3,
  cheese: 0.4
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    error: false
  };

  componentDidMount () {
    axios.get('https://react-my-burger-8f557.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  updatePurchaseState(ingredients){
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchaseable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    let updatedCounted = oldCount - 1;
    if (oldCount <= 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    // alert("Continue");
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Felix',
        adress: {
          street: 'Street',
          zipCode: '123456',
          country: 'Germany'
        },
        email: 'email@email.com'
      },
      deliveryMethod: 'fast'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
      });
  }



  render () {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableInfo}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
          />
        </Aux>
      );
      orderSummary =  <OrderSummary
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        ingredients={this.state.ingredients}/>
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>

    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
