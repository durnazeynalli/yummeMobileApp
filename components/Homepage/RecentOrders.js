import React from "react";
import { Text, Image, StyleSheet, View, ScrollView } from "react-native";

import shop1 from '../../assets/recent.png';
import shop2 from '../../assets/shop2.png';
import shop3 from '../../assets/shop3.png';
import shop4 from '../../assets/shop4.png';
import place from '../../assets/place.png';
import clock from '../../assets/clock.png';
import star from '../../assets/fullStar.png';
import { COLORS } from "../../styles";


const datas = [
    {
        image: shop1,
        name: "Pizza Company",
        address: "1901 Thornridge Cir. Shiloh, Mel...",
        distance: "1.7km",
        time: "15 min",
        star: "5.0"
    },
    {
        image: shop2,
        name: "Pizza Company",
        address: "1901 Thornridge Cir. Shiloh, Mel...",
        distance: "1.7km",
        time: "15 min",
        star: "5.0"
    },
    {
        image: shop3,
        name: "Pizza Company",
        address: "1901 Thornridge Cir. Shiloh, Mel...",
        distance: "1.7km",
        time: "15 min",
        star: "5.0"
    },
    {
        image: shop4,
        name: "Pizza Company",
        address: "1901 Thornridge Cir. Shiloh, Mel...",
        distance: "1.7km",
        time: "15 min",
        star: "5.0"
    }
]

export const RecentOrders = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Recent Orders</Text>
                <Text style={styles.viewAll}>View All</Text>
            </View>
            <View style={styles.row}>
                <ScrollView horizontal={true}>
                    {
                        datas.map((el) => {
                            return (
                                <View style={styles.orderContainer}>
                                    <Image style={styles.image} source={el.image} />
                                    <View style={styles.column}>
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
    orderContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginRight: 15,
        width: '24%'
    },
    column: {
        marginLeft: 15,
    },
    image: {
        width: 100,
        height: 100,
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
        fontSize: 13,
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
        marginRight: 17,
        fontSize: 13,
        fontWeight: '400',
    }

})