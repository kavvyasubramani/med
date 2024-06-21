import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

function AmbulanceMainPage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.text}>AMBULANCE SERVICE</Text>
        </View>
       
        <View style={styles.facilitiesContainer}>
          <Text style={styles.aptText}>AMBULANCE</Text>
          <TouchableOpacity style={styles.buttonCont} onPress={() => {/* Your onPress function */}}>
            
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View style={[styles.card, {backgroundColor: '#0C530B'}]}>
            <Image
              source={require('./assets/ambred.jpg')}
              style={styles.cardImage}
            />
          </View>
        </View>
      
        <View style={styles.facilitiesContainer}>
          <Text style={styles.facilitiesText}>Request for an ambulance</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {/* Your onPress function */}}>
          <Text style={styles.buttonText}>EMERGENCY</Text>
        </TouchableOpacity>
       
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>MEDCONNECT - All rights reserved</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    backgroundColor: '#0C530B',
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'ArialMT',
    color: 'white',
    fontWeight: 'normal',
  },
  aptText:{
    fontSize: 30,
    color:'black',
    alignItems:'center',
    paddingTop:25,
    
  },
  facilitiesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facilitiesText: {
    paddingTop:40,
    fontSize: 30,
    fontFamily: 'ArialMT',
    alignItems:'center',
    color: 'black',
  },
  buttonContainer: {
    
    backgroundColor: '#0C530B',
    borderRadius: 35,
    paddingVertical: 15,
    marginLeft:100, 
    marginRight:100,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonCont: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    alignItems: 'center', // Align the card in the center horizontally
    marginTop: 40, // Adjust the margin top as needed
  },
  card: {
    width: 300, // Set a fixed width for the card
    height: 300, // Set a fixed height for the card to make it square
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#0C530B',
  },
  cardImage: {
    width: 200, // Adjust the width and height of the image
    height: 200,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: '#0C530B',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AmbulanceMainPage;