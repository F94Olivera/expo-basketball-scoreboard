import { Text, TouchableOpacity } from 'react-native';

type BotonAccionProps = {
    texto: string;
    color: string;
    onPress: () => void;
};

export default function BotonAccion({
    texto,
    color,
    onPress,
}: BotonAccionProps) {
    return (
        <TouchableOpacity
            style={{ backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={{ fontSize: 22, padding: 10 }}>
                {texto}
            </Text>
        </TouchableOpacity>
    );
}