import auth from "@react-native-firebase/auth";

import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import { createNativeWrapper } from "react-native-gesture-handler";
import { LOAD_COMMENTS_FAILED } from "../Types/CommentTypes";


import {
    LOAD_FEATURED_REQUEST,
    LOAD_FEATURED_SUCCESS,
    LOAD_FEATURED_FAILED,
    DELETE_FEATURED_SUCCESS,
    DELETE_FEATURED_FAILED,
    ADD_FEATURED_REQUEST,
    ADD_FEATURED_SUCCESS,
    ADD_FEATURED_FAILED,
    DELETE_FEATURED_REQUEST
} from "../Types/FeaturedTypes";



export const AddToFeatured = (data,theme) => {

 //   console.log(item,theme)
    return async (dispatch) => {
        try {
            const qry = firestore()
                .collection('featured')
                .doc(data.key)
                .set
                (
                   {
                 data,theme
                   }
                )

            dispatch({ type: ADD_FEATURED_SUCCESS })
            Alert.alert("added successfully","Now it will be listed in Featured in while")
        }
        catch (err) {

            Alert.alert("addition failed",""+err)
            console.log(err)
        }
    }
}

export const deleteFeaturedProduct = (key) => {
    return async (dispatch) => {
       

        try {

            dispatch({ type: DELETE_FEATURED_REQUEST })
            const quary = firestore().collection('featured').doc(key)

            const res = await quary.delete()
            
            console.log(res)
            
            dispatch({ type: DELETE_FEATURED_SUCCESS ,payload:{id:key}})
            
        }
        catch (err) {
            console.log(err)
            Alert.alert("Deletion failed",""+err)
            dispatch({ type: DELETE_FEATURED_FAILED, payload: err })

        }
    }
}
export const fetchFeaturedProducts = () => {

    return async (dispatch) => {

        dispatch({ type: LOAD_FEATURED_REQUEST })

        try {


            const quary = firestore().collection('featured')

            const featured = await quary.get()

            var list = []
            featured.forEach
                (
                    function (child) {

                        list.push({key:child.id,...child.data()})


                    }

                )


            dispatch({ type: LOAD_FEATURED_SUCCESS, payload: list })
         
        }
        catch (err) {
            Alert.alert("fetch failed!!",""+err)
            dispatch({ type: LOAD_FEATURED_FAILED, payload: "There is Some Problem in Featured" })

        }
    }
}