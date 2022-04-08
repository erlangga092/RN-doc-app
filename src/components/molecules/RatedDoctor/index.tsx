import React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { ICStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

type RatedDoctorProps = {
    avatarImage: ImageSourcePropType;
    name: string;
    category: string;
};

const RatedDoctor: React.FC<RatedDoctorProps> = ({
    avatarImage,
    name,
    category,
}) => {
    let starCount = [{}, {}, {}, {}, {}];

    return (
        <View style={styles.container}>
            <Image source={avatarImage} style={styles.avatar} />
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{category}</Text>
            </View>
            <View style={styles.rate}>
                {starCount.map((_, i) => {
                    return <ICStar key={i} style={styles.star} />;
                })}
            </View>
        </View>
    );
};

export default RatedDoctor;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12,
    },
    profile: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
    },
    rate: {
        flexDirection: 'row',
    },
    star: {
        marginRight: 4,
    },
});
