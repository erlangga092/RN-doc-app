import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input, Link } from '../../components';
import { RootStackNavigator } from '../../router';
import { colors, useForm } from '../../utils';

type RegisterScreenProps = NativeStackScreenProps<
    RootStackNavigator,
    'Register'
>;

interface RegisterFormType {
    fullName: string;
    profession: string;
    email: string;
    password: string;
}

const Register: React.FC<RegisterScreenProps> = ({ navigation }) => {
    const { formValues, getFieldValue, setFieldValue, setFieldsValue } =
        useForm<RegisterFormType>({
            fullName: '',
            profession: '',
            email: '',
            password: '',
        });

    const clearForm = () => {
        setFieldsValue({
            fullName: '',
            profession: '',
            email: '',
            password: '',
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onContinue = () => {
        console.log(formValues);
        clearForm();
    };

    return (
        <View style={styles.page}>
            <Header
                title="Daftar Akun"
                type="icon-only"
                icon="back-dark"
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.content}>
                <Input
                    label="Full Name"
                    value={getFieldValue('fullName')}
                    onChangeText={value => setFieldValue('fullName', value)}
                    placeholderText="Enter your full name..."
                />
                <Gap height={24} />
                <Input
                    label="Profession"
                    value={getFieldValue('profession')}
                    onChangeText={value => setFieldValue('profession', value)}
                    placeholderText="Enter your profession..."
                />
                <Gap height={24} />
                <Input
                    label="Email"
                    value={getFieldValue('email')}
                    onChangeText={value => setFieldValue('email', value)}
                    placeholderText="Enter your email..."
                />
                <Gap height={24} />
                <Input
                    label="Password"
                    value={getFieldValue('password')}
                    onChangeText={value => setFieldValue('password', value)}
                    placeholderText="Enter your password..."
                    secureText
                />
                <Gap height={40} />
                <Button
                    title="Continue"
                    onPress={function () {
                        navigation.navigate('UploadPhoto');
                    }}
                />
                <Gap height={30} />
                <Link
                    title="Already an account? Login"
                    size={16}
                    align="center"
                />
            </ScrollView>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 40,
        paddingTop: 0,
    },
});
