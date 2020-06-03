import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const Image = props => {
  let image = props.currentImage
  const styles = StyleSheet.create({
    image: {
      height: '100%',
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
    <ImageBackground source={image} style={styles.image}>
        <Text style={styles.textTop}>{props.topText}</Text>
        <Text style={styles.textBottom}>{props.bottomText}</Text>
    </ImageBackground>

  )
}

export default Image;


