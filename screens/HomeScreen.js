import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native'; 
import menuIcon from '../assets/icons/menu.png'
import searchIcon from '../assets/icons/search.png'
import { themeStyles } from '../theme';


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* Search bar and logo */}
            <SafeAreaView style={styles.safeAreaView}>
                <StatusBar style='light' />
                <View style={styles.rowContainer}>
                    <Image source={menuIcon} style={styles.icon} />
                    <Text style={styles.movie}>
                        <Text style={themeStyles.text}>M</Text>ovies
                    </Text>
                    <Image source={searchIcon} style={styles.icon} />
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1d1c1c',
        flex: 1,
    },
    safeAreaView: {
        marginBottom: 8, 
    },
    rowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 45, 
        marginBottom: 45,
        marginLeft: 15,
        marginRight: 15
    },
    icon: {
        width: 30,
        height: 30,
    },
    movie: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
});