import React from "react";
import { StyleSheet, Image, Text, TextInput, View } from "react-native";

import Group from '../../assets/Group.png';
import location from '../../assets/location.png';
import arrow from '../../assets/arrow.png';
import { COLORS } from "../../styles";

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image source={Group} style={styles.searchIcon} />
                <TextInput 
                    placeholder="Search restaurant, dissert ...."
                    style={styles.input}
                    placeholderTextColor="#B6C1DE"
                />
            </View>
            <View style={styles.row}>
                <Image source={location} style={styles.locationIcon} />
                <Text style={styles.text}>4140 Parker Rd. Allentown, New Mexico...</Text>
                <Image source={arrow} style={styles.arrowIcon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.orange,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20

    },
    searchBar: {
        backgroundColor: COLORS.white,
        marginTop: 30,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: '8px',
        flexDirection: 'row'
    },
    searchIcon: {
        marginRight: 10
    },
    input: {
        border: 'none',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    locationIcon: {
        marginRight: -30
    },
    text: {
        color: COLORS.white,
        fontSize: 15
    },
    arrowIcon: {

    }
})