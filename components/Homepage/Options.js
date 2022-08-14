import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

import banner from '../../assets/banner.png';
import drink from '../../assets/drink.png';
import pizza from '../../assets/pizza.png';
import burger from '../../assets/burger.png';
import dessert from '../../assets/dessert.png';
import cake from '../../assets/cake.png';
import { COLORS } from "../../styles";

const data = [
    {
        image: drink,
        text: "Drinks"
    },
    {
        image: pizza,
        text: "Pizza"
    },
    {
        image: burger,
        text: "Burger"
    },
    {
        image: dessert,
        text: "Dessert"
    },
    {
        image: cake,
        text: "Cake"
    }
]

export const Options = () => {
    return (
        <View style={styles.container}>
            <Image source={banner} style={styles.banner} />
            <View style={styles.row}>
                {
                    data.map((el) => {
                        return (
                            <View style={styles.column}>
                                <View style={styles.imageCont}>
                                    <Image source={el.image} style={styles.image} />
                                </View>
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
    container: {
        marginHorizontal: 20,
        marginTop: 25
    },
    banner: {
        width: '100%',
        borderRadius: 6
    },
    row: {
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageCont: {
        width: 40,
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.black
    }
})