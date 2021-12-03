
import React from "react";
import {
    View, Text, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity, Dimensions, TextInput, ScrollView, ActivityIndicator
    , RefreshControl
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { categories } from "../../data/categories";

import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

import { Appbar, Searchbar } from "react-native-paper";
import ProductCard from "../../components/ProductCard";
import FeaturedList from "../../components/Featured/FeaturedList";
import { useDispatch, useSelector } from "react-redux";
import { LoadInitialProducts } from "../../redux/Actions/ProductActions";

const Home_screen = ({ navigation }) => {

    const chair = useSelector(state => state.Products.HomeProducts)
    const homeprodLoad = useSelector(state => state.Products.homeprodLoad)

    const [ind, setind] = useState(0)

    const dispatch = useDispatch()
    //fetch categories

    const chairFetcher = (name) => {

        dispatch(LoadInitialProducts(name))

    }

    useEffect
        (
            () => {
                chairFetcher("All")
            }
            , []
        )

    const chairbuilder = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={
                    () => navigation.navigate("product",
                        { item: item, name: item.pname }
                    )}
            >
                <ProductCard
                    item={item}
                >
                </ProductCard>
            </TouchableOpacity>
        )
    }

    const catbuilder = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => { setind(index), chairFetcher(item.name) }}
                style={{
                    elevation: 5,
                    borderRadius: 20,
                    justifyContent: 'center',
                    padding: 10,
                    alignItems: 'center',
                    backgroundColor: (ind == index) ? 'black' : '#fff',
                    margin: 10, borderRadius: 20
                }}>
                <Text
                    style={{
                        marginRight: 20,
                        textAlignVertical: "center",
                        marginLeft: 20,
                        fontSize: 20,
                        color: (ind == index) ? 'white' : 'black'
                    }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (


        <View
            style={Homestyles.Container}>
            <ScrollView>
                <View
                    style={Homestyles.FeaturedContainer}
                >
                    <FeaturedList />
                </View>

                <FlatList

                    horizontal
                    style={Homestyles.catList}
                    renderItem={catbuilder}
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                >
                </FlatList>

                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 0,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: 20
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        BROWSE MORE {categories[ind].name}
                    </Text>

                    <TouchableOpacity
                        style={Homestyles.browsemoreContainer}
                        onPress=
                        {
                            () => {
                                navigation.navigate("Product_list",
                                    {
                                        item:
                                            categories[ind].name
                                    }
                                )
                            }
                        }
                    >
                        <FontAwesome5
                            name={'angle-right'}
                            size={30}
                        ></FontAwesome5>
                    </TouchableOpacity>
                </View>

                <FlatList

                    horizontal
                    style={Homestyles.listContainer}
                    data={chair}
                    renderItem={chairbuilder}
                    keyExtractor={item => item.key}
                >
                </FlatList>

            </ScrollView>
            {homeprodLoad && <ActivityIndicator
                style={Homestyles.loadingBar}

                size='large'
                color="green"
            >

            </ActivityIndicator>}
        </View>
    )
}
export default Home_screen

const Homestyles = StyleSheet.create(
    {
        Container:
        {
            flex: 1,
            backgroundColor: "#E3E8F0"
        },
        FeaturedContainer:

        {
            marginVertical: 20
        },
        listContainer:
        {
            height: 350,
            margin: 20,
            marginTop: 0
        },
        catList:
        {
            marginHorizontal: 20
        },
        browsemoreContainer:

        {
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 10,
            elevation: 5
        },
        searchBar:
        {

            width: '80%',
            alignSelf: "center",
            height: 50,
            borderWidth: 1,
            borderRadius: 15,
            margin: 20
        },
        loadingBar:
        {
            alignSelf: "center",
            top: "50%",
            left: "50%",
            position: 'absolute'
        }

    }
)