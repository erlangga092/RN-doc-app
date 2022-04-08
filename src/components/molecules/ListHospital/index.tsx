import React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { colors, fonts } from '../../../utils';

type ListHospitalProps = {
    hospitalImage: ImageSourcePropType;
    type: string;
    name: string;
    address: string;
};

const ListHospital: React.FC<ListHospitalProps> = ({
    hospitalImage,
    type,
    name,
    address,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={hospitalImage} style={styles.picture} />
                <View>
                    <Text style={styles.title}>{type}</Text>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.address}>{address}</Text>
                </View>
            </View>
        </View>
    );
};

export default ListHospital;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    content: {
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    picture: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary,
        marginBottom: 6,
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
    },
});
