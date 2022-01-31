import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, useWindowDimensions, Button, Linking, StyleSheet, StatusBar, Modal } from "react-native";
import no_image from '../images/no_image.png';
import LineSeparatorView from './LineSeparatorView'
import Fontisto from 'react-native-vector-icons/Fontisto';

function AirlineDetails({info, goBack}) {
    const [validImage, setValidImage] = useState(true)
    const window = useWindowDimensions();

    handleClick = () => {
        let url = 'http://' + info.website
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log("Don't know how to open URI: " + url);
          }
        });
      };

    const textItem = (title, text) =>  {
        return(
        <View style={{flexDirection:"row",  alignItems: 'flex-start',  flexWrap:'wrap'}}>
            <Text style={{fontWeight:'bold'}}>
                {title}
            </Text>
            <Text style={{fontWeight:'normal'}}>
                {text}
            </Text>
            </View>
        )
    }
    
    return (
        <View style={{flexDirection:"column",  alignItems: 'flex-start', ...styles.modalView}}>
            <TouchableOpacity style={styles.absolutePosition} onPress={goBack}>
                <Fontisto name={'close-a'}  size={22} />
            </TouchableOpacity>  

            <Image 
                resizeMode="contain"
                style={{ width:window.width, height:window.height/2, borderColor:'black', borderWidth:0}} 
                source={validImage?{ uri: info.logo}:no_image}
                onError={()=>{
                    console.log("Failed to load image!!")
                    setValidImage(false)
                }}
                />
            <View style={{ padding: 5, flex: 0, width: "100%", marginLeft: 0, alignSelf:'flex-start'}}>
                {textItem("Airline Name: ",info.name)}
                {textItem("Country: ",info.country)}
                {textItem("Head Quarters: ",info.head_quaters)}
                {textItem("Established on: ",info.established)}
                {textItem("Slogan: ",info.slogan)}

                <TouchableOpacity onPress={handleClick}>
                    <Text style={{textDecorationLine:'underline'}}>Check Website</Text>
                </TouchableOpacity>
            </View>
     </View>
    )

}

const styles = StyleSheet.create({
    absolutePosition: {
      position: "absolute",
      left:5,
      top: StatusBar.currentHeight + 30,
      zIndex:2
    },
    modalView: {
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
  })
export default AirlineDetails;
