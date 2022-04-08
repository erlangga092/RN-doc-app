import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ICAddPhoto, ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { RootStackNavigator } from '../../router';
import { colors, fonts } from '../../utils';

type UploadPhotoScreenProps = NativeStackScreenProps<
    RootStackNavigator,
    'UploadPhoto'
>;

const UploadPhoto: React.FC<UploadPhotoScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header
                title="Upload Photo"
                type="icon-only"
                icon="back-dark"
                onPress={() => navigation.goBack()}
            />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <ICAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Gap height={4} />
                    <Text style={styles.profession}>Product Designer</Text>
                </View>
                <View>
                    <Button
                        title="Upload and Continue"
                        onPress={() => navigation.navigate('MainApp')}
                    />
                    <Gap height={30} />
                    <Link title="Skip for this" size={16} align="center" />
                </View>
            </View>
        </View>
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 40,
        paddingBottom: 40,
        justifyContent: 'space-between',
    },
    profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    name: {
        fontSize: 24,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
    },
});
