import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
      <NavigationItems />
      <Logo />
      <div></div>
    </header>
);

export default toolbar;
