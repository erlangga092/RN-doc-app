import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { Header, ListDoctor } from '../../components';
import { RootStackNavigator } from '../../router';
import { colors } from '../../utils';

type ChooseDoctorScreenProps = NativeStackScreenProps<
    RootStackNavigator,
    'ChooseDoctor'
>;

const ChooseDoctor: React.FC<ChooseDoctorScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header
                title="Pilih Dokter Anak"
                type="icon-only"
                icon="back-light"
                theme="dark"
                onPress={() => navigation.goBack()}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                    onPress={() => navigation.navigate('Chatting')}
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
                <ListDoctor
                    profile={DummyDoctor1}
                    name="Alexander Jannie"
                    desc="Wanita"
                    type="next"
                />
            </ScrollView>
        </View>
    );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
