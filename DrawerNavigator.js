import React from "react";
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Tab } from "./TabNavigator";
import SideBarMenu from './SideBarMenu';

export const Drawer = createDrawerNavigator({
    Home: {screen: Tab}},
    {
        contentComponent:SideBarMenu
    },
    {
        initialRouteName: "Home"
    }
    )