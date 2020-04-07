import React from "react"
import { Typography } from '@material-ui/core';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Done navigation buttons
import { RouteComponentProps } from 'react-router';
import NavigationButtons, { NavigationButtonsTab } from "../common/NavigationButtons"
import navigationTabs from "../common/__data__/data.navigationTabs.json"
import logo from '../../images/uts-logo.png';
import { logoStyles } from "../common/styles"
<<<<<<< HEAD

export interface HomePageProps {
    props?: any;
    match?: RouteComponentProps;
}

const HomePage: React.SFC<HomePageProps> = ({ props }) => {
    const classes = logoStyles();
    const { path } = props.match;
    return (
        <NavigationButtons path={path} navigationTabs={navigationTabs as Array<NavigationButtonsTab>}>
            <img src={logo} className={classes.logo} alt="UTS Logo" />
            <Typography variant="h3">UTS: Quantum Computing</Typography>
        </NavigationButtons>
=======
=======
>>>>>>> Done navigation buttons

export interface HomePageProps {
    props?: any;
    match?: RouteComponentProps;
}

const HomePage: React.SFC<HomePageProps> = ({ props }) => {
    const classes = logoStyles();
    const { path } = props.match;
    return (
<<<<<<< HEAD
        <Typography variant="h2">UTS: Quantum Computing</Typography>
>>>>>>> Set up inital home page and project structure
=======
        <NavigationButtons path={path} navigationTabs={navigationTabs as Array<NavigationButtonsTab>}>
            <img src={logo} className={classes.logo} alt="UTS Logo" />
            <Typography variant="h3">UTS: Quantum Computing</Typography>
        </NavigationButtons>
>>>>>>> Done navigation buttons
    );
}

export default HomePage;