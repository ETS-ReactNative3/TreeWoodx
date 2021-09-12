
import React from "react";
import {
    View, Text, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity, Dimensions, TextInput, ScrollView, ActivityIndicator
    , RefreshControl
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { categories } from "../data/categories";

import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

import { Appbar, Searchbar } from "react-native-paper";
import ProductCard from "../components/ProductCard";
import FeaturedList from "../components/FeaturedList";
import { useDispatch, useSelector } from "react-redux";
import { LoadInitialProducts } from "../redux/Actions/ProductActions";

const Home_screen = ({ navigation }) => {
    const { height, width } = Dimensions.get('screen')

    const chair = useSelector(state => state.Products.HomeProducts)

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

    const [ind, setind] = useState(0)


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


    const [load, setload] = useState(false)

    const arrivalBuilder = ({ item, index }) => {
        return (
            <TouchableOpacity style={{
                height: 150, width: 300,
                borderRadius: 20
                , margin: 20
            }}>
                <Image
                    style={{
                        height: 150,
                        backgroundColor: 'gray',
                        borderRadius: 20
                    }}
                    blurRadius={1}
                    source={{ uri: item.pimage }}
                >

                </Image>
                <Text
                    style={{
                        fontSize: 20,
                        color: "#fff",
                        alignSelf: "center"
                    }}>
                    {item.pname}
                </Text>
            </TouchableOpacity>
        )

    }


    const catbuilder = ({ item, index }) => {
        return (
            <TouchableOpacity

                onPress={() => { setind(index), chairFetcher(item.name) }}
                style={{
                    height: 50
                    ,
                    width: 150,
                    elevation: 12, borderRadius: 20
                    , justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: (ind == index) ? 'black' : 'white',
                    marginRight: 20, borderWidth: 1, borderRadius: 20
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

            style={{ flex: 1, backgroundColor: "#EEE9E9" }}>

            <ScrollView
            >

                <TouchableOpacity
                    onPress={
                        () =>
                         navigation.navigate('Product_list', { item: 'search' })
                    }
                >
                    <Searchbar
                        editable={false}
                        style={Homestyles.searchBar}
                        placeholder="search......"

                        disableFullscreenUI={true}
                    />

                </TouchableOpacity>

                <View
                    style={
                        {
                            height: 250,

                        }
                    }
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
                        justifyContent: 'space-between',
                        margin: 20
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        BROWSE MORE {categories[ind].name}
                    </Text>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate("Product_list", { item: categories[ind].name }) }}
                    >
                        <FontAwesome5
                            name={'angle-right'}
                            size={30}
                        ></FontAwesome5>
                    </TouchableOpacity>
                </View>
                
                <FlatList

                    horizontal
                    style={{ height: 350, margin: 20, marginTop: 0 }}
                    data={chair}
                    renderItem={chairbuilder}
                    keyExtractor={item => item.key}
                >
                </FlatList>

            </ScrollView>
            {load && <ActivityIndicator
                style={{ alignSelf: "center", top: "50%", left: "50%", position: 'absolute' }}

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
        catList:
        {
            marginHorizontal: 20
        },
        searchBar:
        {

            width: '80%',
            alignSelf: "center",
            height: 50,
            borderWidth: 1,
            borderRadius: 15,
            margin: 20
        }

    }
)