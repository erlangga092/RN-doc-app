import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity } from 'react-native';
import {
    ICDoctor,
    ICDoctorActive,
    ICHospital,
    ICHospitalActive,
    ICMessage,
    ICMessageActive,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

type TabItemProps = {
    title: 'Doctor' | 'Messages' | 'Hospitals' | React.ReactNode;
    active: boolean;
    onPress: () => void;
    onLongPress: () => void;
};

const TabItem: React.FC<TabItemProps> = ({
    title,
    active,
    onPress,
    onLongPress,
}) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <ICDoctorActive /> : <ICDoctor />;
        }

        if (title === 'Messages') {
            return active ? <ICMessageActive /> : <ICMessage />;
        }

        if (title === 'Hospitals') {
            return active ? <ICHospitalActive /> : <ICHospital />;
        }

        return <ICDoctor />;
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon />
            <Text style={TitleStyle(active)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default TabItem;

const TitleStyle = (active: boolean): TextStyle => {
    return {
        fontSize: 10,
        marginTop: 4,
        fontFamily: fonts.primary[600],
        color: active ? colors.text.menuActive : colors.text.menuInactive,
    };
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
