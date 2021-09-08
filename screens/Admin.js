import React from "react";
import {  } from "react-native";
import {BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Admin_order  from "./Admin_order";
import Admin_panel from "./Admin_panel";
import Admin_addSales from "./Admin_addsales";
import Admin_product from "./Admin_product";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Admin_editProd from "./Admin_editProd";
import Admin_addOffer from "./Admin_addOffer";

import {


  } from "react-native-paper";
const bottomTab=createBottomTabNavigator();
const Admin=({navigation})=>
{
    return(
        <bottomTab.Navigator
        

        tabBarOptions={
            {
              showLabel:false,
              style:{
        marginHorizontal:20,
        borderRadius:30,
        backgroundColor:'black'
              }
            }
          }
        initialRouteName="Admin_addOffer"
        >
            <bottomTab.Screen
            name={"Admin_addOffer"}
            options={
                {
                
                    tabBarLabel:'ADD',
                 
                  tabBarIcon:({size,focused,color})=>   
                  
                    <FontAwesome5 size={size}  color={color} name="plus">
         
                    </FontAwesome5>
                  
                }
                
              }
            component={Admin_addOffer}
            >

            </bottomTab.Screen>
         <bottomTab.Screen
            name={"Admin_editProd"}
            options={
                {
                
                    tabBarLabel:'PANEL',
                 
                  tabBarIcon:({size,focused,color})=>   
                  
                    <FontAwesome5 size={size}  color={color} name="edit">
         
                    </FontAwesome5>
                  
                }
                
              }
            component={Admin_editProd}
            >

                

            </bottomTab.Screen>
            <bottomTab.Screen
            name={"Admin_panel"}
            options={
                {
                
                    tabBarLabel:'PANEL',
                 
                  tabBarIcon:({size,focused,color})=>   
                  
                    <FontAwesome5 size={size}  color={color} name="chart-line">
         
                    </FontAwesome5>
                  
                }
                
              }
            component={Admin_panel}
            >

                

            </bottomTab.Screen>
            <bottomTab.Screen
            name={"Admin_addSales"}
            component={Admin_addSales}
            options={
                {
                
                    tabBarLabel:'Profile',
                 
                  tabBarIcon:({size,focused,color})=>   
                  
                    <FontAwesome5 size={size}  color={color} name="user-edit">
         
                    </FontAwesome5>
                  
                }
                
              }
            >


            </bottomTab.Screen>

        </bottomTab.Navigator>
    )
}

export default Admin