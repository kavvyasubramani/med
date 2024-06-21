import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.text}>MEDCONNECT</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Text style={styles.profileText}>John Doe</Text>
            <TouchableOpacity style={styles.profileDropdown} onPress={toggleDropdown}>
              <Text style={styles.profileDropdownText}>Profile ▼</Text>
            </TouchableOpacity>
          </View>
          {dropdownVisible && (
            <View style={styles.dropdownContent}>
              <TouchableOpacity style={styles.dropdownOption}>
                <Text style={styles.dropdownOptionText}>Dashboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownOption}>
                <Text style={styles.dropdownOptionText}>Logout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        
        <View style={styles.divider} />
        <View style={styles.facilitiesContainer}>
          <Text style={styles.aptText}>UPCOMING APPOINTMENTS</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => {/* Your onPress function */}}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orddivider} />
        <View style={[styles.card, {backgroundColor: '#0C530B'}]}>
          <Text style={styles.cardTitle}>Upcoming Appointment</Text>
          <Text style={styles.cardText}>Appointment in 5 days with DR.XYZ</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => {/* Your onPress function */}}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.facilitiesContainer}>
          <Text style={styles.aptText}>CURRENT ORDERS</Text>
          <TouchableOpacity style={styles.buttonCont} onPress={() => {/* Your onPress function */}}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.card, {backgroundColor: '#0C530B'}]}>
          <Image
            source={require('./assets/ambulance.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Arriving in 10 mins</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => {/* Your onPress function */}}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.orddivider} />
        <View style={styles.facilitiesContainer}>
          <Text style={styles.facilitiesText}>FACILITIES PROVIDED</Text>
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.subHeaderText}>Calling for an ambulance</Text>
            <Image
              source={require('./assets/ambulance.png')}
              style={{ width: 110,
                height: 100,
                resizeMode: 'contain',
                marginLeft: 35,}}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.subHeaderText}>Medicine Delivery</Text>
            <Image
              source={require('./assets/medicine.jpg')}
              style={{ width: 70,
                height: 100,
                resizeMode: 'contain',
                marginLeft: 115,}}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.subHeaderText}>Locating Nearby Hostpitals</Text>
            <Image
              source={require('./assets/hospital.jpg')}
              style={{ width: 80,
                height: 100,
                resizeMode: 'contain',
                marginLeft: 29,}}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.subHeaderText}>Information on Doctors</Text>
            <Image
              source={require('./assets/doctor.jpg')}
              style={{ width: 70,
                height: 90,
                resizeMode: 'contain',
                marginLeft: 74,}}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.subHeaderText}>Book Appointments</Text>
            <Image
              source={require('./assets/calendar.jpg')}
              style={{ width: 70,
                height: 100,
                resizeMode: 'contain',
                marginLeft: 100,}}
            />
          </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>MEDCONNECT - All rights reserved</Text>
      </View>
    </SafeAreaView>
  );
}

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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  languageText: {
    color: 'black',
  },
  helpText: {
    color: 'black',
    fontFamily: 'ArialMT',
  },
  divider: {
    backgroundColor: '#0C530B',
    width: '100%',
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
  },
  orddivider:{
    backgroundColor: '#0C530B',
    width: '100%',
    marginTop: 10,
    padding: 1,
    alignItems: 'center',
  },
  aptText:{
    fontSize: 20,
    color:'black'
  },
  facilitiesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  facilitiesText: {
    fontSize: 30,
    fontFamily: 'ArialMT',
    paddingLeft: 20,
    color: 'black',
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 40,
  },
  buttonCont: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 130,
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    paddingHorizontal: 20,
  },
  subHeaderText: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 70,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
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
  profileContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 18,
    color:'black',
    
    marginRight: 200,
  },
  profileDropdown: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  profileDropdownText: {
    fontSize: 16,
    
    color: 'black',
  },
  dropdownContent: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 3,
    zIndex: 1,
  },
  dropdownOption: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  dropdownOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C530B',
  },
});

export default App;