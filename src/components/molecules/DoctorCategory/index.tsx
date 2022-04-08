import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets';
import { colors, fonts } from '../../../utils';

type DoctorCategoryProps = {
    type: 'umum' | 'psikiater' | 'obat' | undefined;
    category: string;
    onPress: () => void;
};

const DoctorCategory: React.FC<DoctorCategoryProps> = ({
    type,
    category,
    onPress,
}) => {
    const Icon = () => {
        if (type === 'umum') {
            return <ILCatUmum />;
        }

        if (type === 'psikiater') {
            return <ILCatPsikiater />;
        }

        if (type === 'obat') {
            return <ILCatObat />;
        }

        return <ILCatUmum />;
    };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.illustration}>
                <Icon />
            </View>
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    );
};

export default DoctorCategory;

const styles = StyleSheet.create({
    card: {
        padding: 12,
        borderRadius: 10,
        backgroundColor: colors.cardLight,
        marginRight: 10,
        alignSelf: 'flex-start',
    },
    illustration: {
        marginBottom: 28,
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
});
