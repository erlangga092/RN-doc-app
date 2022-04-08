import React from 'react';
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    DummyHospital1,
    DummyHospital2,
    DummyHospital3,
    ILHospitalBg,
} from '../../assets';
import { Gap, ListHospital } from '../../components';
import { colors, fonts } from '../../utils';

const Hospitals: React.FC = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBg} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={13} />
                    <ListHospital
                        hospitalImage={DummyHospital1}
                        type="Rumah Sakit"
                        name="Citra Bunga Merdeka"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital2}
                        type="Rumah Sakit Anak"
                        name="Happy Family & Kids"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital3}
                        type="Rumah Sakit Jiwa"
                        name="Tingkatan Paling Atas"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital1}
                        type="Rumah Sakit"
                        name="Citra Bunga Merdeka"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital2}
                        type="Rumah Sakit Anak"
                        name="Happy Family & Kids"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital3}
                        type="Rumah Sakit Jiwa"
                        name="Tingkatan Paling Atas"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital1}
                        type="Rumah Sakit"
                        name="Citra Bunga Merdeka"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital2}
                        type="Rumah Sakit Anak"
                        name="Happy Family & Kids"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital3}
                        type="Rumah Sakit Jiwa"
                        name="Tingkatan Paling Atas"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital1}
                        type="Rumah Sakit"
                        name="Citra Bunga Merdeka"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital2}
                        type="Rumah Sakit Anak"
                        name="Happy Family & Kids"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <ListHospital
                        hospitalImage={DummyHospital3}
                        type="Rumah Sakit Jiwa"
                        name="Tingkatan Paling Atas"
                        address="Jln. Surya Sejahtera 20"
                    />
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    );
};

export default Hospitals;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    background: {
        height: 240,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.white,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 6,
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.text.white,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 20,
        marginTop: -30,
        paddingTop: 1,
        overflow: 'hidden',
    },
});
