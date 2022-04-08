import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { RootStackNavigator } from '../../router';
import { colors, fonts } from '../../utils';

type SplashScreenProps = NativeStackScreenProps<RootStackNavigator, 'Splash'>;

const Splash: React.FC<SplashScreenProps> = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted');
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.pages}>
            <ILLogo />
            <Text style={styles.text}>My Doctor</Text>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.text.primary,
        marginTop: 20,
        fontFamily: fonts.primary[600],
    },
});
