import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../atoms';
import { colors, fonts } from '../../../utils';
import { DummyDoctor1 } from '../../../assets';

type DarkProfileProps = {
    onPress: () => void;
};

const DarkProfile: React.FC<DarkProfileProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light" onPress={onPress} />
            <View>
                <Text style={styles.name}>Nairobi Putri Hayza</Text>
                <Text style={styles.desc}>Dokter Anak</Text>
            </View>
            <Image source={DummyDoctor1} style={styles.avatar} />
        </View>
    );
};

export default DarkProfile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    name: {
        fontFamily: fonts.primary[600],
        color: colors.text.white,
        fontSize: 20,
        marginBottom: 6,
        textAlign: 'center',
    },
    desc: {
        fontFamily: fonts.primary.normal,
        color: colors.text.tertiary,
        fontSize: 14,
        textAlign: 'center',
    },
    avatar: {
        height: 46,
        width: 46,
        borderRadius: 46 / 2,
    },
});
