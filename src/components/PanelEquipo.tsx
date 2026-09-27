import { StyleSheet, Text, View } from 'react-native';

import BotonAccion from './BotonAccion';

type PanelEquipoProps = {
    nombre: string;
    puntos: number;
    color: string;
    onAnotar: (puntos: number) => void;
};

export default function PanelEquipo({
    nombre,
    puntos,
    color,
    onAnotar,
}: PanelEquipoProps) {
    return (
        <View style={styles.team}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={[styles.puntos, { color }]}>{puntos}</Text>

            <BotonAccion
                texto="+1"
                color={color}
                onPress={() => onAnotar(1)}
            />

            <BotonAccion
                texto="+2"
                color={color}
                onPress={() => onAnotar(2)}
            />

            <BotonAccion
                texto="+3"
                color={color}
                onPress={() => onAnotar(3)}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    team: {
        alignItems: 'center',
        padding: 20,
    },
    nombre: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    puntos: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});