import React, { Component }from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 3,
      cheese: 2,
      meat: 2
    }
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Control</div>
      </Aux>

    );
  }
}

export default BurgerBuilder;
