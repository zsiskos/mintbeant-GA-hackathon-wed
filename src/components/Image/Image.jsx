import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const Image = props => {
  let image = props.currentImage
  const styles = StyleSheet.create({
    container: {
      maxWidth: '100%',
      height: 'auto',
      border: '1px solid red'
    },
    image: {
      maxWidth: 'auto',
      height: '100%',
      resizeMode: 'fit',
      justifyContent:  'space-between',
      border: '3px dashed lime'
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
    <div>
      <img src={image} style={{'max-height': '500px', 'object-fit': 'contain'}} />
      <Text style={styles.textTop}>{props.topText}</Text>
      <Text style={styles.textBottom}>{props.bottomText}</Text>
    </div>
  )
}

export default Image;


