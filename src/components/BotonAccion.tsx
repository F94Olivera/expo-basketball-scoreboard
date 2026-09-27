import { Text, TouchableOpacity } from 'react-native';

type BotonAccionProps = {
    texto: string;
    color: string;
    onPress: () => void;
    disabled?: boolean;
};

export default function BotonAccion({
    texto,
    color,
    onPress,
    disabled,
}: BotonAccionProps) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: color,
                opacity: disabled ? 0.5 : 1,
            }}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={{ fontSize: 22, padding: 10 }}>
                {texto}
            </Text>
        </TouchableOpacity>
    );
}