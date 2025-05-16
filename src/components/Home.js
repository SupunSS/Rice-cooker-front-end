import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,  // Add this import
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Home({ route, navigation }) {
  const { userName } = route.params || { userName: 'user' };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
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
              style={styles.headerMenuIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Image
              source={require('../assets/rice-cooker.png')}
              style={styles.riceCooker}
              resizeMode="contain"
            />

            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome {userName}!</Text>
            </View>

            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Your Current Rice cooking State is:</Text>
              <Text style={styles.percentage}>60%</Text>
            </View>

            <View style={styles.menuGrid}>
              <View style={styles.menuRow}>
                <TouchableOpacity 
                  style={styles.menuItemContainer}
                  onPress={() => navigation.navigate('StartCooking')}
                >
                  <View style={styles.menuItem}>
                    <Image source={require('../assets/cooking.png')} style={styles.menuIcon} />
                  </View>
                  <Text style={styles.menuLabel}>Cooking</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.menuItemContainer}
                  onPress={() => navigation.navigate('CookingStatus')}
                >
                  <View style={styles.menuItem}>
                    <Image source={require('../assets/eye.png')} style={styles.menuIcon} />
                  </View>
                  <Text style={styles.menuLabel}>Status</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.menuItemContainer}
                  onPress={() => navigation.navigate('CookingHistory')}
                >
                  <View style={styles.menuItem}>
                    <Image source={require('../assets/history.png')} style={styles.menuIcon} />
                  </View>
                  <Text style={styles.menuLabel}>History</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.menuRow}>
                <TouchableOpacity style={styles.menuItemContainer}>
                  <View style={styles.menuItem}>
                    <Image source={require('../assets/settings.png')} style={styles.menuIcon} />
                  </View>
                  <Text style={styles.menuLabel}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItemContainer}>
                  <View style={styles.menuItem}>
                    <Image source={require('../assets/profile.png')} style={styles.menuIcon} />
                  </View>
                  <Text style={styles.menuLabel}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItemContainer}>
                  <View style={styles.menuItem}>
                    <Image source={require('../assets/chat.png')} style={styles.menuIcon} />
                  </View>
                  <Text style={styles.menuLabel}>Chat</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start Cooking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.historyButton]}>
                <Text style={[styles.buttonText, styles.historyButtonText]}>Cooking History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
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
  logo: {
    width: 70,
    height: 70,
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    color: '#FFFFFF',
    fontSize: 32,  // Increased from 24 to 32
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  riceCooker: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#178ea3',
    padding: 15,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // Add 3D effect with shadows
   
    borderWidth: 0.9,
    borderColor: '#096171',
    // Add inner shadow effect
    overflow: 'hidden',
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
    // Add icon shadow for depth
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    transform: [{ scale: 0.9 }], // Slightly scale down icons
  },
  welcomeContainer: {
    backgroundColor: '#178ea3',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    marginBottom: 20,
    borderWidth: 0.9,
    borderColor: '#096171',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  statusContainer: {
    marginBottom: 30,
  },
  statusText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
  },
  percentage: {
    color: '#096171',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuGrid: {
    width: '100%',
    marginBottom: 30,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',  // Changed from column to row
    justifyContent: 'space-between', // Added to space buttons evenly
    gap: 15,
  },
  button: {
    backgroundColor: '#178ea3',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1, // Added to make buttons take equal width
  },
  historyButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#178ea3',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  historyButtonText: {  // New style for history button text
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
  menuItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%', // Add fixed width to ensure equal spacing
  },
  menuLabel: {
    color: 'black',
    fontSize: 14,
    marginTop: 8,
    fontWeight: '500',
    textAlign: 'center', // Ensure text is centered
    width: '100%', // Make text take full width of container
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 10, // Add padding for better spacing
  },
});

export default Home;