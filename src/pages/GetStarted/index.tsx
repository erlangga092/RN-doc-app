import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILGetStarted, ILLogo } from '../../assets';
import { Button, Gap } from '../../components';
import { RootStackNavigator } from '../../router';
import { colors, fonts } from '../../utils';

type GetStartedScreenProps = NativeStackScreenProps<
    RootStackNavigator,
    'GetStarted'
>;

const GetStarted: React.FC<GetStartedScreenProps> = ({ navigation }) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.text}>
                    Konsultasi dengan dokter jadi lebih mudah & fleksibel
                </Text>
            </View>
            <View>
                <Button
                    title="Get Started"
                    onPress={() => navigation.navigate('Register')}
                />
                <Gap height={16} />
                <Button
                    title="Sign In"
                    type="secondary"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </ImageBackground>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.background,
    },
    text: {
        fontSize: 28,
        marginTop: 91,
        color: colors.text.white,
        fontFamily: fonts.primary[600],
    },
});
