import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';

const StartCooking = ({ navigation }) => {
  const [selectedQuantity, setSelectedQuantity] = useState('1 Cup');

  const getEstimatedTime = (quantity) => {
    switch(quantity) {
      case '1 Cup': return '30min';
      case '2 Cup': return '45min';
      case '5 Cup': return '55min';
      default: return '30min';
    }
  };

  const toggleQuantity = () => {
    switch(selectedQuantity) {
      case '1 Cup': return '2 Cup';
      case '2 Cup': return '5 Cup';
      case '5 Cup': return '1 Cup';
      default: return '1 Cup';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/robot-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#FFFFFF"
          />
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Image 
            source={require('../assets/menu.png')}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.startCookingBanner}>
          <Text style={styles.startCookingText}>Start Cooking</Text>
        </View>

        <View style={styles.quantitySection}>
          <Text style={styles.sectionTitle}>Quantity Selection</Text>
          
          <TouchableOpacity 
            style={styles.quantitySelector}
            onPress={() => setSelectedQuantity(toggleQuantity())}
          >
            <Text style={styles.quantityText}>{selectedQuantity}</Text>
            <Image
              source={require('../assets/down-arrow.png')}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mlSection}>
          <Text style={styles.mlText}>
            Machine learning model shows the ungrammed quantity of rice
          </Text>
        </View>

        <View style={styles.estimatedSection}>
          <Text style={styles.estimatedTime}>
            Estimated cooking time : {getEstimatedTime(selectedQuantity)}{'\n'}
            ( Based on the selected Quantity )
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.startButton}
            onPress={() => {/* Add cooking start logic */}}
          >
            <Text style={styles.buttonText}>Start Cooking</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.buttonText, styles.historyButtonText]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Term of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Privacy policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    backgroundColor: '#178ea3',
  },
  logo: {
    width: 70,
    height: 70,
  },
  menuIcon: {
    // width: 15,
    // height: 15,
    tintColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  startCookingBanner: {
    backgroundColor: '#178ea3',
    padding: 15,
    borderRadius: 25,
    marginBottom: 30,
    borderWidth: 0.9,
    borderColor: '#096171',
  },
  startCookingText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  quantitySection: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: '#096171',
  },
  sectionTitle: {
    color: '#178ea3',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  quantitySelector: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#096171',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quantityText: {
    fontSize: 16,
    color: '#178ea3',
    fontWeight: '500',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#178ea3',
  },
  mlSection: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: '#096171',
  },
  estimatedSection: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 30,
    borderWidth: 0.5,
    borderColor: '#096171',
    
  },
  mlText: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 16,
  },
  estimatedTime: {
    textAlign: 'center',
    color: '#178ea3',
    fontWeight: '500',
    fontSize: 17,
    lineHeight:25
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  startButton: {
    flex: 1,
    backgroundColor: '#178ea3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#178ea3',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  historyButtonText: {
    color: '#178ea3',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#096171',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    padding: 0,
  },
  historyButton: {
    backgroundColor: '#178ea3',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
});

export default StartCooking;