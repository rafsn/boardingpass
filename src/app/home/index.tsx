import {ImageBackground, Text, View} from 'react-native';
import {styles} from "@/app/home/styles";

import Ionics from "@expo/vector-icons/Ionicons"

import {Flight} from "@/components/flight";
import {colors} from "@/styles/color";
import React from "react";

export function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.header}
                source={require("@/assets/cover.jpg")}
            >
                <Text style={styles.title}>Cartão de Embarque</Text>
                <Text style={styles.subtitle}>Falta 45 dias para sua viagem</Text>
            </ImageBackground>

            <View style={styles.ticket}>
                <View style={styles.content}>
                    <View style={styles.flight}>
                        <Flight label="São Paulo" value="GRU"/>
                        <View style={styles.duration}>
                            <Ionics name="airplane-sharp" size={32} color={colors.black}/>
                            <Text style={styles.hours}>
                                09 h 45 min
                            </Text>
                        </View>
                        <Flight label="Nova York" value="JFK"/>
                    </View>

                    <Text style={styles.label}>Passageiro</Text>
                    <Text style={styles.name}>Rafael Santos</Text>

                    <View style={styles.details}>

                    </View>
                </View>

            </View>
        </View>
    );
}

