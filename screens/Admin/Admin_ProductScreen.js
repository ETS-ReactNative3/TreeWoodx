import React, { useEffect ,useState} from "react";
import { View,Dimensions ,Image,Text, ScrollView} from "react-native";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

import { fonts } from "../../constants/fonts";
import { colorsArray } from "../../constants/colors";
import { FAB } from "react-native-paper";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import CustomFab from "../../components/Admin_Product/CustomFab";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct, LoadProducts } from "../../redux/Actions/ProductActions";
import ProductEditer from "../../components/ProductEditer";


const Admin_editProd=({navigation})=>
{

    console.log(colorsArray[Math.floor((Math.random()*colorsArray.length))])

    const dispatch=useDispatch()
    const {height,width}=Dimensions.get('screen')

    useEffect
    (
        ()=>
        {
            dispatch(LoadProducts(null))
        },
        []
    )
    
    
    const deleteProd=(productID)=>
    {

     dispatch(DeleteProduct(productID))   
     
    }

    const configuation=(productID)=>
    {
       deleteProd(productID)
    }
    const data=useSelector(state=>state.Products.products)

    const prodBuilder=({item,index})=>
    {

    
        return(
            
            <View style={{width:width-40,margin:20,height:350,
                elevation:20,
            backgroundColor:"#fff",borderRadius:20}}>
            <View style={{height:200,justifyContent:'center',flexDirection:"row"}}>

                <Image
                source={{uri:item.pimage}}
                style={{height:150,borderRadius:20
                    ,alignItems:'center',
                    
                    alignSelf:'center',
                    width:150}}
                >

                </Image>
                <View style={{flex:1,alignContent:"center",alignItems:'center',justifyContent:'center'}}>

                <Text
                style={
                    {
                        fontFamily:fonts.Federo_Regular,
                        fontSize:20,
                    }
                }
                >{item.pname}</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={{textDecorationLine:"line-through",
                marginRight:20}}>RS {item.pprice}</Text>
                <Text>RS {item.priceafterdisc}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:20}}>stock {item.pstock}</Text>
                <Text>disc {item.pdisc} %</Text>


                </View>
                </View>


            </View>

           
           <ProductEditer
           
           pid={item.key}
           qty={item.pstock}
           disc={item.pdisc}
           />
           

            <View style={{flexDirection:'row',
            alignSelf:"center",
            justifyContent:"space-evenly",
            position:'absolute',
            bottom:0,
            
            }}>

            <TouchableOpacity
            
            onPress={()=>navigation.navigate('Admin_product',{item:item.key})}
            style={{height:50,marginHorizontal:10,justifyContent:"center",backgroundColor:'blue',borderRadius:30,}}
            >

                <Text style={{textAlign:'center',marginHorizontal:20,color:"#fff"}} >EDIT</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={
                {
                    justifyContent:'center',
                    alignItems:"center",
                    backgroundColor:"#0abab5",
                    height:50,
                    marginHorizontal:20,
                    borderRadius:20,
                    
                }
            }
         onPress={
            ()=>navigation.navigate(
                'Admin_features_edit',{
                    item:item
                }
            )
         }
           >
                <Text
                style={
                    {
                        color:"#fff",
                        marginHorizontal:10
                    }
                }
                >ADD FEATURED</Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={
                ()=>configuation(item.key)
            } 
          style={{height:50,justifyContent:"center",
           backgroundColor:'red',borderRadius:30,}}>
                <Text style={{textAlign:'center',marginHorizontal:20,color:"#fff"

            }}>DELETE</Text>
            </TouchableOpacity>
            </View>
          
            </View>
        )

    }

    return(
        <View style={{flex:1}}>
        
        
        <FlatList
        data={data}
        renderItem={prodBuilder}
        keyExtractor={item=>item.key}
        >
        </FlatList>
       
       <CustomFab
       navigation={navigation}
       >

       </CustomFab>
        </View>
    )
}
export default Admin_editProd