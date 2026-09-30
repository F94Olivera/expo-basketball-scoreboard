import BotonAccion from '@/components/BotonAccion';
import PanelEquipo from '@/components/PanelEquipo';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Equipo = 'local' | 'visitante';

type Jugada = {
    equipo: Equipo;
    puntos: number;
};

export default function HomeScreen() {
    const [local, setLocal] = useState(0);
    const [visitante, setVisitante] = useState(0);
    const [jugadas, setJugadas] = useState<Jugada[]>([]);

    const anotar = (equipo: Equipo, puntos: number) => {
        if (equipo === 'local') {
            setLocal((prev) => prev + puntos);
        } else {
            setVisitante((prev) => prev + puntos);
        }
        setJugadas((prev) => [...prev, { equipo, puntos }]);
    };

    const reiniciar = () => {
        setLocal(0);
        setVisitante(0);
        setJugadas([]);
    };

    const deshacer = () => {
        const ultimaJugada = jugadas[jugadas.length - 1];

        if (!ultimaJugada) {
            return;
        }

        if (ultimaJugada.equipo === 'local') {
            setLocal((prev) => prev - ultimaJugada.puntos);
        } else {
            setVisitante((prev) => prev - ultimaJugada.puntos);
        }

        setJugadas((prev) => prev.slice(0, -1));
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
    const ultimasJugadas = jugadas.slice(-5).reverse();
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
            <BotonAccion
                texto="Deshacer"
                color="#6b7280"
                onPress={deshacer}
                disabled={jugadas.length === 0}
            />
            <View>
                {ultimasJugadas.map((jugada, index) => (
                    <Text key={index}>
                        {jugada.equipo === 'local' ? 'Local' : 'Visitante'} +{jugada.puntos}
                    </Text>
                ))}
            </View>
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