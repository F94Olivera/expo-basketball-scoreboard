import BotonAccion from '@/components/BotonAccion';
import PanelEquipo from '@/components/PanelEquipo';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

    const diferencia = Math.abs(local - visitante);

    let resultado: string;

    if (local > visitante) {
        resultado = `Gana Local por ${diferencia}`;
    } else if (visitante > local) {
        resultado = `Gana Visitante por ${diferencia}`;
    } else {
        resultado = 'Empate';
    }
    return (
        <View style={styles.container}>
            <View style={styles.scoreboard}>
                <PanelEquipo
                    nombre="Local"
                    puntos={local}
                    color="#2563eb"
                    ganando={local > visitante}
                    onAnotar={(puntos) => anotar('local', puntos)}
                />

                <PanelEquipo
                    nombre="Visitante"
                    puntos={visitante}
                    color="#dc2626"
                    ganando={visitante > local}
                    onAnotar={(puntos) => anotar('visitante', puntos)}
                />
            </View>
            <Text style={styles.nombre}>{resultado}</Text>
            <BotonAccion
                texto="Nuevo partido"
                color="#6b7280"
                onPress={reiniciar}
                disabled={local === 0 && visitante === 0}
            />
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
    nombre: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});