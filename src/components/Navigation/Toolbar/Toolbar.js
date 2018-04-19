import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationintems/Navigationitems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>    
    </header>
);

export default toolbar;