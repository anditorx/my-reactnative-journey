
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { Home, NewsDetail,Orders,OrderDetail } from '../../containers/pages';

const HomeStack = createStackNavigator(
    {
        Home,
        NewsDetail
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

const OrderStack = createStackNavigator(
    {
        Orders,
        OrderDetail
    },
    {
        headerMode: 'none',
        initialRouteName: 'Orders'
    }
)

const Router = createSwitchNavigator(
    {
        HomeStack,
        OrderStack
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeStack'
    }
)

export default createAppContainer(Router);
