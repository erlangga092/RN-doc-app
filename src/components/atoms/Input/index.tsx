import React from 'react';
import { Text, TextInput, TextStyle, View } from 'react-native';
import { colors, fonts } from '../../../utils';

type InputProps = {
    label: string;
    value?: any;
    onChangeText?: (arg: any) => void;
    secureText?: boolean;
    placeholderText?: string;
};

const Input: React.FC<InputProps> = ({
    label,
    value,
    onChangeText,
    secureText = false,
    placeholderText,
}) => {
    const [focus, setFocus] = React.useState<boolean>(false);

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholderText}
                value={value}
                onChangeText={onChangeText}
                style={styles.input(focus)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                secureTextEntry={secureText}
                placeholderTextColor={colors.text.secondary}
            />
        </View>
    );
};

export default Input;

const styles = {
    label: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginBottom: 6,
    },
    input: (focus: boolean): TextStyle => {
        return {
            borderWidth: 1,
            borderRadius: 10,
            borderColor: focus ? colors.borderActive : colors.border,
            padding: 12,
            height: 45,
            fontFamily: fonts.primary.normal,
            color: colors.text.primary,
        };
    },
};
