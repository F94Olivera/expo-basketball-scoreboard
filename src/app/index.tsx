import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Equipo = 'local' | 'visitante';

export default function HomeScreen() {
    const [local, setLocal] = useState(0);
    const [visitante, setVisitante] = useState(0);

    const anotar = (equipo: Equipo, puntos: number) => {
        if (equipo === 'local') {
            setLocal((prev) => prev + puntos);
        } else {
            setVisitante((prev) => prev + puntos);
        }
    };

    const reiniciar = () => {
        setLocal(0);
        setVisitante(0);
    };
    return (
        <View style={styles.container}>
            <View style={styles.scoreboard}>
                <View style={styles.team}>
                    <Text>Local</Text>
                    <Text>{local}</Text>

                    <TouchableOpacity onPress={() => anotar('local', 1)}>
                        <Text>+1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => anotar('local', 2)}>
                        <Text>+2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => anotar('local', 3)}>
                        <Text>+3</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.team}>
                    <Text>Visitante</Text>
                    <Text>{visitante}</Text>

                    <TouchableOpacity onPress={() => anotar('visitante', 1)}>
                        <Text>+1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => anotar('visitante', 2)}>
                        <Text>+2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => anotar('visitante', 3)}>
                        <Text>+3</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={reiniciar}>
                <Text>Reiniciar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreboard: {
        flexDirection: 'row',
    },

    team: {
        alignItems: 'center',
        padding: 20,
    },
});