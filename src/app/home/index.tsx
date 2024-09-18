import {ImageBackground, Text, View} from 'react-native';
import {styles} from "@/app/home/styles";

import {Flight} from "@/components/flight";

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
                        <Flight label="Nova York" value="JFK"/>
                    </View>
                </View>

            </View>
        </View>
    );
}

