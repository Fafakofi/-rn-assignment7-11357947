import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>ERIC ATSU</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Cart"
        onPress={() => props.navigation.navigate('Cart')}
      />

    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  drawerHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
