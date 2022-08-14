import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import home from '../assets/home.png';
import order from '../assets/order.png';
import alert from '../assets/alert.png';
import profile from '../assets/profile.png';
import { COLORS } from "../styles";

const data = [
    {
        image: home,
        text: "Home"
    },
    {
        image: order,
        text: "My order"
    },
    {
        image: alert,
        text: "Alert"
    },
    {
        image: profile,
        text: "Profile"
    }
]


export const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.row}>
                {
                    data.map((el) => {
                        return (
                            <View style={styles.column}>
                                <Image source={el.image} style={styles.icon}/>
                                <Text style={styles.text}>{el.text}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.black,
        marginBottom: 15,
    }
})
