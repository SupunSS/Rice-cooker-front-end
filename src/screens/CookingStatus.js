import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

const CookingStatus = ({ navigation }) => {
  const percentage = 50;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/robot-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>Cooking Status</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Image 
            source={require('../assets/menu.png')}
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.statusTitle}>Current Status:</Text>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressCircle}>
            <View style={[styles.progressFill, { height: `${percentage}%` }]} />
            <View style={styles.progressInner}>
              <Text style={styles.progressText}>{percentage}%</Text>
            </View>
          </View>
        </View>

        <View style={styles.stagesContainer}>
          <View style={styles.stageItem}>
            <Image source={require('../assets/check.png')} style={styles.stageIcon} />
            <Text style={styles.stageText}>Wash</Text>
          </View>
          <View style={styles.stageItem}>
            <Image source={require('../assets/soaking.png')} style={styles.stageIcon} />
            <Text style={styles.stageText}>Soak</Text>
          </View>
          <View style={styles.stageItem}>
            <Image source={require('../assets/cooking.png')} style={styles.stageIcon} />
            <Text style={styles.stageText}>Cooking</Text>
          </View>
        </View>

        <Text style={styles.estimatedTime}>You will be get Rice within: 12s</Text>

        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel Cooking</Text>
        </TouchableOpacity>
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
    padding: 15,
    backgroundColor: '#178ea3',
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#178ea3',
    marginBottom: 30,
  },
  progressContainer: {
    marginVertical: 30,
    alignItems: 'center',
  },
  progressCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
    position: 'relative',
  },
  progressFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#178ea3',
  },
  progressInner: {
    position: 'absolute',
    top: 15,
    left: 15,
    right: 15,
    bottom: 15,
    borderRadius: 85,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#178ea3',
  },
  stagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 30,
  },
  stageItem: {
    alignItems: 'center',
  },
  stageIcon: {
    width: 28,
    height: 28,
    tintColor: '#096171',
    marginBottom: 5,
  },
  stageText: {
    color: '#178ea3',
    fontSize: 16,
  },
  estimatedTime: {
    fontSize: 18,
    color: '#666',
    marginVertical: 20,
  },
  cancelButton: {
    backgroundColor: '#178ea3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
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
});

export default CookingStatus;