import PanelEquipo from '@/components/PanelEquipo';
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
                <PanelEquipo
                    nombre="Local"
                    puntos={local}
                    color="#2563eb"
                    onAnotar={(puntos) => anotar('local', puntos)}
                />

                <PanelEquipo
                    nombre="Visitante"
                    puntos={visitante}
                    color="#dc2626"
                    onAnotar={(puntos) => anotar('visitante', puntos)}
                />
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

});