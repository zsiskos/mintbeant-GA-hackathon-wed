import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const Image = props => {
  let image = props.currentImage

  const styles = StyleSheet.create({
    container: {
      height: '150px',
      width: 'auto',
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center'
    },
    image: {
      flex: 1,
      objectFit: 'contain',
      justifyContent: "space-between"
    },
    textTop: {
      color: "white",
      'font-family': 'Impact, Charcoal, sans-serif',
      '-webkit-text-stroke': '1px black',  
      fontSize: '2rem',
      fontWeight: "bold",
    },
    textBottom: {
      color: "white",
      'font-family': 'Impact, Charcoal, sans-serif',
      '-webkit-text-stroke': '1px black',
      fontSize: '2rem',
      fontWeight: "bold"
    }
  });
  
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.textTop}>{props.topText}</Text>
        <Text style={styles.textBottom}>{props.bottomText}</Text>
      </ImageBackground>
    </View>  
  )
}

export default Image;


