import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Footer } from "../commons/Footer";
import { Header } from "../components/Homepage/Header";
import { NearbyShops } from "../components/Homepage/NearbyShops";
import { Options } from "../components/Homepage/Options";
import { Promotion } from "../components/Homepage/Promotion";
import { RecentOrders } from "../components/Homepage/RecentOrders";
import { VirtualKitchen } from "../components/Homepage/VirtualKitchen";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Options />
                <NearbyShops />
                <RecentOrders />
                <Promotion />
                <VirtualKitchen />
            </ScrollView>
            <Footer style={styles.footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    footer: {
        position: 'absolute',
        bottom: -0
    }
})