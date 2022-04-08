import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { colors } from '../../../utils';
import { Button, Gap } from '../../atoms';
import { ButtonType } from '../../atoms/Button';
import { IconButtonType } from '../../atoms/Button/IconOnly';
import DarkProfile from './DarkProfile';

type HeaderProps = {
    onPress: () => void;
    title: string;
    type?: ButtonType;
    icon: IconButtonType;
    theme?: ThemeType;
};

type ThemeType = 'dark' | 'light' | 'dark-profile' | undefined;

const Header: React.FC<HeaderProps> = ({
    onPress,
    title,
    type = 'primary',
    icon,
    theme = 'light',
}) => {
    if (theme === 'dark-profile') {
        return <DarkProfile onPress={onPress} />;
    }

    return (
        <View style={styles.container(theme)}>
            <Button type={type} icon={icon} onPress={onPress} />
            <Text style={styles.text(theme)}>{title}</Text>
            <Gap width={24} />
        </View>
    );
};

export default Header;

const styles = {
    container: (theme: ThemeType): ViewStyle => {
        return {
            flexDirection: 'row',
            paddingVertical: 30,
            paddingHorizontal: 16,
            backgroundColor:
                theme === 'dark' ? colors.secondary : colors.background,
            alignItems: 'center',
            borderBottomLeftRadius: theme === 'dark' ? 20 : 0,
            borderBottomRightRadius: theme === 'dark' ? 20 : 0,
        };
    },
    text: (theme: ThemeType): TextStyle => {
        return {
            textAlign: 'center',
            flex: 1,
            color: theme === 'dark' ? colors.text.white : colors.text.primary,
            fontSize: 20,
            fontFamily: 'Nunito-SemiBold',
        };
    },
};
