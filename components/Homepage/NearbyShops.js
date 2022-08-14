import React from "react";
import { Text, Image, StyleSheet, View, ScrollView } from "react-native";

import shop1 from '../../assets/shop1.png';
import shop2 from '../../assets/shop2.png';
import shop3 from '../../assets/shop3.png';
import shop4 from '../../assets/shop4.png';
import place from '../../assets/place.png';
import clock from '../../assets/clock.png';
import star from '../../assets/star.png';
import { COLORS } from "../../styles";


const datas = [
    {
        image: shop1,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: shop2,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: shop3,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: shop4,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    }
]

export const NearbyShops = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Nearby Shops</Text>
                <Text style={styles.viewAll}>View All</Text>
            </View>
            <View style={styles.row}>
                <ScrollView horizontal={true}>
                    {
                        datas.map((el) => {
                            return (
                                <View style={styles.column}>
                                    <Image style={styles.image} source={el.image} />
                                    <Text style={styles.postTitle}>{el.name}</Text>
                                    <Text style={styles.address}>{el.address}</Text>
                                    <View style={styles.info}>
                                        <Image source={place} style={styles.icon} />
                                        <Text style={styles.text}>{el.distance}</Text>
                                        <Image source={clock} style={styles.icon} />
                                        <Text style={styles.text}>{el.time}</Text>
                                        <Image source={star} style={styles.icon} />
                                        <Text style={styles.text}>{el.star}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }  
                </ScrollView>           
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    title: {
        color: COLORS.antrasit,
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },
    viewAll: {
        color: COLORS.green
    },
    column: {
        marginRight: 15
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8
    },
    postTitle: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Roboto',
        marginVertical: 10
    },
    address: {
        color: COLORS.textColor,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Roboto',
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    icon: {
        marginRight: 7
    },
    text: {
        color: COLORS.textColor,
        marginRight: 17
    }

})