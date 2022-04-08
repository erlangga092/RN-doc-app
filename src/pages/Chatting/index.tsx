import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { RootStackNavigator } from '../../router';
import { colors, fonts } from '../../utils';

type ChattingScreenProps = NativeStackScreenProps<
    RootStackNavigator,
    'Chatting'
>;

const Chatting: React.FC<ChattingScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header
                title="Nairobi Putri Hayza"
                icon="back-light"
                type="icon-only"
                theme="dark-profile"
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <InputChat />
        </View>
    );
};

export default Chatting;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.background,
    },
    date: {
        marginVertical: 20,
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        textAlign: 'center',
    },
});
