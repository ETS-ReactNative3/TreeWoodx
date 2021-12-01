
import React, { useEffect } from "react";

import { colorsArray } from "../constants/colors";

import Admin_ProductScreen from "../screens/Admin/Admin_ProductScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Admin_product from "../screens/Admin/Admin_product";
import FeaturedList from "../screens/Admin/FeaturedList";

const AdminEditStackNavigator=()=>
{

    const editNaviagter = createStackNavigator()

    return (

        <editNaviagter.Navigator>
            <editNaviagter.Screen
                name="Admin_ProductScreen"
                component={Admin_ProductScreen}
            >

            </editNaviagter.Screen>

            <editNaviagter.Screen
                name="Admin_product"
                component={Admin_product}
            >

            </editNaviagter.Screen>

            <editNaviagter.Screen
            name="FeaturedList"
            component={FeaturedList}
            ></editNaviagter.Screen>
         

        </editNaviagter.Navigator>
    )
}

export default AdminEditStackNavigator