import React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { ICNext } from '../../../assets';
import { colors, fonts } from '../../../utils';

type ListDoctorProps = {
    profile: ImageSourcePropType;
    name: string;
    desc: string;
    type?: 'next' | undefined;
    onPress?: () => void;
};

const ListDoctor: React.FC<ListDoctorProps> = ({
    profile,
    name,
    desc,
    type,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.content}>
                <Image source={profile} style={styles.avatar} />
                <View style={styles.detail}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
                {type === 'next' && <ICNext />}
            </View>
        </TouchableOpacity>
    );
};

export default ListDoctor;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    detail: {
        flex: 1,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        color: colors.text.primary,
        fontFamily: fonts.primary.normal,
    },
    desc: {
        fontSize: 12,
        color: colors.text.secondary,
        fontFamily: fonts.primary[300],
    },
});
