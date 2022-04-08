import React from 'react';
import { Text, TextStyle, View } from 'react-native';
import { colors, fonts } from '../../../utils';

type TextAlignProps =
    | 'left'
    | 'auto'
    | 'right'
    | 'center'
    | 'justify'
    | undefined;

type LinkProps = {
    title: string;
    size: number;
    align: TextAlignProps;
};

const Link: React.FC<LinkProps> = ({ title, size, align }) => {
    return (
        <View>
            <Text style={styles.text(size, align)}>{title}</Text>
        </View>
    );
};

export default Link;

const styles = {
    text: (size: number, align: TextAlignProps): TextStyle => {
        return {
            fontSize: size,
            fontFamily: fonts.primary.normal,
            color: colors.text.secondary,
            textDecorationLine: 'underline',
            textAlign: align,
        };
    },
};
