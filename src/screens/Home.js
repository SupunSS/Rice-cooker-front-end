// In the header section where your menu icon is
<TouchableOpacity 
  style={styles.menuButton}
  onPress={() => navigation.navigate('CookingHistory')}
>
  <Image 
    source={require('../assets/menu.png')}
    style={styles.menuIcon}
    resizeMode="contain"
  />
</TouchableOpacity>