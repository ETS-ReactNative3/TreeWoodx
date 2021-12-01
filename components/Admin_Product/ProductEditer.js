

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from "react-native";


import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { AddStock, ChangeDiscount } from "../../redux/Actions/ProductActions";


const ProductEditer = ({ pid, qty, disc }) => {

    let dispatch = useDispatch()
    let qtyx = qty.toString()
    
    let discx = disc.toString()

    const [pqty, setpqty] = useState(qtyx)

    const [pdiscount, setpdiscount] = useState(discx)

    const addstockHelper = () => {

        dispatch(AddStock(pid, pqty))
    }
    const ChangeDiscountHelper = () => {

        dispatch(ChangeDiscount(pid, pdiscount))
    }

    return (

        <View
            style={styles.Container}
        >
            <View
                style={styles.horiZonatalContainer}
            >
                <TextInput

                    onChangeText={text => setpqty(text)}
                    value={pqty}
                    style={styles.txtinput}

                >
                </TextInput>

                <TouchableOpacity
                    onPress={() => addstockHelper()}
                    style={styles.btnAdd}
                >
                    <Text
                        style={styles.txtbtnAdd}
                    >+</Text>

                </TouchableOpacity>

                <TextInput
                    onChangeText={text => setpdiscount(text)}
                    value={pdiscount}
                    style={styles.txtinput}
                >
                </TextInput>

                <TouchableOpacity
                    onPress={() => ChangeDiscountHelper()}
                    style={styles.btnAdd}
                >
                    <Text
                        style={styles.txtbtnAdd}
                    >+</Text>

                </TouchableOpacity>

            </View>

        </View>



    )
}

const styles = StyleSheet.create
    (
        {
            Container:

            {
                height: 50,
                width: "80%",
                alignSelf: "center"
            },
            horiZonatalContainer:

            {
                flexDirection: "row",
                justifyContent: "space-between",


            },
            txtinput:

            {
                height: 50,
                width: 50,
                borderRadius: 15,
                borderWidth: 1,
                textAlign: "center"

            },
            btnAdd:
            {

                height: 50,
                width: 50,
                backgroundColor: "black",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center"
            },
            txtbtnAdd:

            {
                color: "#fff",
                fontSize: 25,
                textAlign: 'center',
                textAlignVertical: "center",

            }





        }
    )

export default ProductEditer