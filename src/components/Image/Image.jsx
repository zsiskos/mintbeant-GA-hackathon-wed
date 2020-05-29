import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const Image = props => {
  const image = { uri: "https://media.tenor.com/images/21c7c1bb5ab46a39b20abb72d94569a6/raw" };

  const styles = StyleSheet.create({
    container: {
      height: '500px',
      width: '500px',
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
      fontSize: 50,
      fontWeight: "bold",
    },
    textBottom: {
      color: "white",
      fontSize: 50,
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


