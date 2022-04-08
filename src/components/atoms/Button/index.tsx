import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, fonts } from '../../../utils';
import IconOnly, { IconButtonType } from './IconOnly';

export type ButtonType = 'primary' | 'secondary' | 'icon-only';

type ButtonProps = {
    type?: ButtonType;
    title?: string;
    onPress?: () => void;
    icon?: IconButtonType;
};

const Button: React.FC<ButtonProps> = ({
    type = 'primary',
    title,
    onPress,
    icon,
}) => {
    if (type === 'icon-only') {
        return <IconOnly icon={icon} onPress={onPress} />;
    }

    return (
        <TouchableOpacity
            style={styles.container(type)}
            activeOpacity={0.9}
            onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = {
    container: (type: ButtonType): ViewStyle => {
        return {
            backgroundColor:
                type === 'secondary'
                    ? colors.button.secondary.background
                    : colors.button.primary.background,
            paddingVertical: 10,
            borderRadius: 10,
            height: 45,
        };
    },
    text: (type: ButtonType): ViewStyle | TextStyle => {
        return {
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
            color:
                type === 'secondary'
                    ? colors.button.secondary.text
                    : colors.button.primary.text,
            fontFamily: fonts.primary[600],
        };
    },
};
