import React, { useRef, useState } from 'react';
import { Alert, Image, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';
import { Container, Form, FormInput, SignLink, SignLinkText, SubmitButton } from './styles';

export default function SignIn({ navigation }) {
    const dispatch = useDispatch();
    const passwordRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const loading = useSelector(state => state.auth.loading);

    function handleSubmit() {
        Keyboard.dismiss();
        let errors = false;

        if (email.trim().length == 0) {
            errors = true;
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (password.trim().length == 0) {
            errors = true;
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        if (errors) {
            Alert.alert('', 'Preencha todos os campos obrigatórios');
        } else {
            dispatch(signInRequest(email, password));
        }
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        error={emailError}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <FormInput
                        secureTextEntry
                        placeholder="Sua senha secreta"
                        ref={passwordRef}
                        returnKeyType="send"
                        error={passwordError}
                        onSubmitEditing={handleSubmit}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <SubmitButton loading={loading} onPress={handleSubmit}>
                        Entrar
                    </SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar conta grátis</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
