import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
    DummyDoctor1,
    DummyDoctor2,
    DummyDoctor3,
    DummyNews1,
    DummyNews2,
    DummyNews3,
} from '../../assets';
import {
    DoctorCategory,
    Gap,
    HomeProfile,
    NewsItem,
    RatedDoctor,
} from '../../components';
import { RootStackNavigator } from '../../router';
import { colors, fonts } from '../../utils';

type CategoryDoctor = {
    id: number;
    type: 'umum' | 'psikiater' | 'obat' | undefined;
    category: string;
};

type DoctorScreenProps = NativeStackScreenProps<RootStackNavigator, 'Doctor'>;

const Doctor: React.FC<DoctorScreenProps> = ({ navigation }) => {
    const [categoriesDoctor] = React.useState<Array<CategoryDoctor>>([
        {
            id: 1,
            type: 'umum',
            category: 'Dokter Umum',
        },
        {
            id: 2,
            type: 'psikiater',
            category: 'Psikiater',
        },
        {
            id: 3,
            type: 'obat',
            category: 'Dokter Obat',
        },
        {
            id: 4,
            type: 'umum',
            category: 'Dokter Umum',
        },
    ]);

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.profile}>
                        <HomeProfile />
                        <Text style={styles.welcome}>
                            Mau konsultasi dengan siapa hari ini?
                        </Text>
                    </View>
                    <View style={styles.slideDoctor}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                {categoriesDoctor.map(
                                    (item: CategoryDoctor, i: number) => (
                                        <DoctorCategory
                                            key={i}
                                            type={item.type}
                                            category={item.category}
                                            onPress={() =>
                                                navigation.navigate(
                                                    'ChooseDoctor',
                                                )
                                            }
                                        />
                                    ),
                                )}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.ratedDoctor}>
                        <Text style={styles.rated}>Top Rated Doctors</Text>
                        <RatedDoctor
                            avatarImage={DummyDoctor1}
                            name="Alexa Rachel"
                            category="Pediatrician"
                        />
                        <RatedDoctor
                            avatarImage={DummyDoctor2}
                            name="Sunny Frank"
                            category="Dentist"
                        />
                        <RatedDoctor
                            avatarImage={DummyDoctor3}
                            name="Poe Minn"
                            category="Podiatrist"
                        />
                    </View>
                    <View style={styles.news}>
                        <Text style={styles.newsStyle}>Good News</Text>
                        <NewsItem
                            title="Is it safe to stay at home during coronavirus?"
                            date="Today"
                            newsImage={DummyNews1}
                        />
                        <NewsItem
                            title="Consume yellow citrus helps you healthier"
                            date="Today"
                            newsImage={DummyNews2}
                        />
                        <NewsItem
                            title="Learn how to make a proper orange juice at home"
                            date="Today"
                            newsImage={DummyNews3}
                        />
                    </View>
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    );
};

export default Doctor;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    content: {
        backgroundColor: 'white',
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    profile: {
        paddingHorizontal: 16,
    },
    welcome: {
        fontSize: 20,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 250,
    },
    category: {
        flexDirection: 'row',
    },
    slideDoctor: {
        marginLeft: 16,
    },
    ratedDoctor: {
        paddingHorizontal: 16,
    },
    rated: {
        fontSize: 16,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        marginTop: 30,
        marginBottom: 16,
    },
    news: {
        paddingHorizontal: 16,
    },
    newsStyle: {
        fontSize: 16,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        marginTop: 14,
    },
});
