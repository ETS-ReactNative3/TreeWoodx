

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import {

    FlatList
} from "react-native-gesture-handler";

import { Dimensions } from "react-native";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import firestore from "@react-native-firebase/firestore";

import FeaturedCard from "./FeaturedCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedProducts } from "../../redux/Actions/FeaturedActions";
import Carousel from "react-native-snap-carousel";
import { colorThemes } from "../../constants/colors";


const { height, width } = Dimensions.get('screen')
const FeaturedList = () => {

    const dispatch = useDispatch()

    const featuredRef = useRef()
    const navigation = useNavigation()
    const featured = useSelector(state => state.Featured.featuredProducts)
    
    const load = useSelector(state => state.Featured.featuredLoading)
    const Error = useSelector(state => state.Featured.featuredError)

    useEffect
        (
            () => {

                dispatch(fetchFeaturedProducts())

            },
            []
        )

    const FeaturedBuilder = ({ item, index }) => {

        

        console.log(item)
        return (
            <TouchableOpacity

                onPress={
                    () => navigation.navigate('product',
                        {
                            item: {
                                key: item.data.key
                            },
                            name: item.data.pname
                        })
                }
                style={
                    {
                        height: height /3.5,
                        width: '100%'
                    }
                }
            >
                <FeaturedCard
                    data={item.data}
                    colorTheme={item.theme}
                >

                </FeaturedCard>
            </TouchableOpacity>
        )
    }
    return (

        <View>
            <Carousel



                layout="default"
                layoutCardOffset={18}

                ref={featuredRef}
        
                itemWidth={width - 20}
                sliderWidth={width - 20}
                data={featured}
                renderItem={FeaturedBuilder}
            //keyExtractor={item=>item.key}
            >

            </Carousel>

            {load && <ActivityIndicator
                style={
                    styles.loadingCircle
                }
                animating={true}
                size={"large"}
                color={"black"}
            >

            </ActivityIndicator>}

        </View>
    )


}

const styles = StyleSheet.create
    (
        {
            loadingCircle:
            {
                position: "absolute",
                alignSelf: 'center',
                top: '40%'
            }

        }
    )
export default FeaturedList