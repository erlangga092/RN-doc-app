import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ICBackDark, ICBackLight } from '../../../assets';

export type IconButtonType = 'back-dark' | 'back-light' | undefined;

type IconOnlyProps = {
    icon: IconButtonType;
    onPress?: () => void;
};

const IconOnly: React.FC<IconOnlyProps> = ({ icon, onPress }) => {
    const Icon = () => {
        if (icon === 'back-dark') {
            return <ICBackDark />;
        }

        if (icon === 'back-light') {
            return <ICBackLight />;
        }

        return <ICBackDark />;
    };

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    );
};

export default IconOnly;
