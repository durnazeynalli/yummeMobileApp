import React from "react";
import { Text, Image, StyleSheet, View, ScrollView } from "react-native";

import shop1 from '../../assets/pro1.png';
import shop2 from '../../assets/pro2.png';
import shop3 from '../../assets/pro3.png';
import shop4 from '../../assets/pro4.png';
import star from '../../assets/yellowStar.png';
import { COLORS } from "../../styles";


const datas = [
    {
        image: shop1,
        name: "Pizza Hut",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: shop2,
        name: "Pizza Seafood",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "4.9"
    },
    {
        image: shop3,
        name: "Ice Cream",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "4.9"
    },
    {
        image: shop4,
        name: "Cake Crush",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    }
]

export const Promotion = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Promotion</Text>
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
                                    <View style={styles.info}>
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
        marginHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 8
    },
    postTitle: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Roboto',
        marginTop: 15
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: COLORS.white,
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 5,
        position: 'absolute',
        top: 70
    },
    icon: {
        marginRight: 4
    },
    text: {
        color: COLORS.textColor,
        fontSize: 10,
        fontWeight: '500'
    }

})