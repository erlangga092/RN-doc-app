import React from 'react';
import {
    ImageSourcePropType,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets';
import { ListDoctor } from '../../components';
import { colors, fonts } from '../../utils';

type DoctorType = {
    id: number;
    profile: ImageSourcePropType;
    name: string;
    desc: string;
};

const Messages: React.FC<{}> = () => {
    const [doctors] = React.useState<Array<DoctorType>>([
        {
            id: 1,
            profile: DummyDoctor1,
            name: 'Alexander Jannie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...',
        },
        {
            id: 2,
            profile: DummyDoctor2,
            name: 'Nairobi Putri Hayza',
            desc: 'Oh tentu saja tidak karena jeruk it...',
        },
        {
            id: 3,
            profile: DummyDoctor3,
            name: 'John McParker Steve',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },
        {
            id: 4,
            profile: DummyDoctor1,
            name: 'Alexander Jannie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...',
        },
        {
            id: 5,
            profile: DummyDoctor2,
            name: 'Nairobi Putri Hayza',
            desc: 'Oh tentu saja tidak karena jeruk it...',
        },
        {
            id: 6,
            profile: DummyDoctor3,
            name: 'John McParker Steve',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },
        {
            id: 7,
            profile: DummyDoctor1,
            name: 'Alexander Jannie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...',
        },
        {
            id: 8,
            profile: DummyDoctor2,
            name: 'Nairobi Putri Hayza',
            desc: 'Oh tentu saja tidak karena jeruk it...',
        },
        {
            id: 9,
            profile: DummyDoctor3,
            name: 'John McParker Steve',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },
    ]);

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {doctors.map((doctor: DoctorType, i: number) => (
                        <ListDoctor
                            key={i}
                            profile={doctor.profile}
                            name={doctor.name}
                            desc={doctor.desc}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default Messages;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    content: {
        flex: 1,
        backgroundColor: colors.background,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    title: {
        fontSize: 20,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        marginTop: 30,
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
});
