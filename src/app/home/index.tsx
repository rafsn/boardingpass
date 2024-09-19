import {ImageBackground, Text, View} from 'react-native';
import {styles} from "@/app/home/styles";

import Ionics from "@expo/vector-icons/Ionicons"
import QRCode from "react-native-qrcode-svg";
import Svg, {Line, Circle} from "react-native-svg"


import {Flight} from "@/components/flight";
import {colors} from "@/styles/color";
import React from "react";
import {Info} from "@/components/info";

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
                    <Text style={styles.name}>Rafael H Santos</Text>

                    <View style={styles.details}>
                        <View style={styles.inline}>
                            <Info label="Data" value="17 de Nov."/>
                            <Info label="Embarque" value="17:25"/>
                        </View>
                    </View>
                </View>

                <View>
                    <Svg height={20} width="100%">
                        <Line
                            x1="0%"
                            y1="50%"
                            x2="100%"
                            y2="50%"
                            stroke={colors.gray[400]}
                            strokeWidth={2}
                            strokeDasharray="5,5"
                        />
                        <Circle
                            r={8}
                            cx="0%"
                            cy="50%"
                            fill={colors.black}
                        />
                        <Circle
                            r={8}
                            cx="100%"
                            cy="50%"
                            fill={colors.black}
                        />
                    </Svg>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerContent}>
                        <View style={styles.inline}>
                            <Info label="Voo" value="YF60"/>
                            <Info label="Assento" value="26 G"/>
                        </View>

                        <View style={styles.inline}>
                            <Info label="Terminal" value="3"/>
                            <Info label="Portão" value="20"/>
                        </View>
                    </View>
                    <QRCode value="boarding code" size={120}/>
                </View>

            </View>
        </View>
    );
}

