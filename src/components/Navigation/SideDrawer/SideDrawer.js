import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationintems/Navigationitems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    
    return(
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer;