
import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, useWindowDimensions, Button, Linking, StyleSheet } from "react-native";
import no_image from '../images/no_image.png';
import LineSeparatorView from './LineSeparatorView'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function AirlineCard({info, onSelect}) {
    const [isFavorite, toggleFavorite] = useState(false)
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
    
    return (
        <View style={{flexDirection:"column",  alignItems: 'flex-start'}}>
        <TouchableOpacity style={styles.absolutePosition} onPress={()=>toggleFavorite(!isFavorite)}>
            <FontAwesomeIcon name={isFavorite?'heart':'plus-square'} color={isFavorite?'red':'black'} size={22} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={onSelect}>
            <Image 
                resizeMode="contain"
                style={{ width:window.width, height:100, borderColor:'black', borderWidth:0}} 
                source={validImage?{ uri: info.logo}:no_image}
                onError={()=>{
                    console.log("Failed to load image!!")
                    setValidImage(false)
                }}
                />
            <View style={{ padding: 5, flex: 0, width: "100%", marginLeft: 0, alignSelf:'flex-start'}}>
                <Text>{info.name}</Text>
                <Text >{"HQ:" + info.country}</Text>
                {/* <Button>Check Website{info.website}</Button> */}
                <TouchableOpacity onPress={handleClick}>
                    <Text style={{textDecorationLine:'underline'}}>Check Website</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <LineSeparatorView/>
     </View>
    )
}

const styles = StyleSheet.create({
    absolutePosition: {
      position: "absolute",
      right:10,
      top: 10,
      zIndex: 2,
    }
  })

export default AirlineCard;
