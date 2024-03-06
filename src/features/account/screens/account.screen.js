import {ActivityIndicator, Image, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../FirebaseConfig";
import {
    AccountPageBackground, AccountPageChanger, AccountPageFooter,
    AccountPageTitle, FormContainer,
    LoginButton,
    LoginButtonTitle,
    LoginInput, OrContainer, OrText, SocialLoginContainer
} from "./account.styles";
import {Ionicons} from "@expo/vector-icons";

export const AccountScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('');

    const [isLogin, setIsLogin] = useState(true);

    const onSignUp = () => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                setUser(response.user.uid);
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                setLoading(false)
            });
    }

    const onSignIn = () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                setUser(response.user.uid);
                console.log('User logged in!')
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                setLoading(false)
            });
    }

    return (
        <AccountPageBackground>
            <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', height: 80, marginBottom: 20}} >
                <Image source={require('../../../../assets/logo.png')} resizeMode='contain' style={{flex: 1}}/>
            </View>
            <FormContainer>
                <AccountPageTitle>
                    { isLogin ? 'Fazer login' : 'Criar conta' }
                </AccountPageTitle>
                <LoginInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='E-mail'
                    autoCapitalize='none'
                />
                <LoginInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Senha'
                    autoCapitalize='none'
                />
                {!isLogin &&
                    <LoginInput
                        secureTextEntry={true}
                        value={repeatPassword}
                        onChangeText={setRepeatPassword}
                        placeholder='Repita sua senha'
                        autoCapitalize='none'
                    />
                }
                <LoginButton onPress={isLogin ? onSignIn : onSignUp}>
                    {loading
                        ? <ActivityIndicator color='white' size={30}/>
                        : <LoginButtonTitle> {isLogin ? 'Entrar' : 'Criar'} </LoginButtonTitle>
                    }
                </LoginButton>
            </FormContainer>
            <OrContainer>
                <OrText>
                    Ou
                </OrText>
            </OrContainer>
            <SocialLoginContainer>
                <Ionicons name='logo-google' size={30} color='white'/>
            </SocialLoginContainer>

            <AccountPageFooter>
                <AccountPageChanger>
                    {isLogin ? 'Ainda não tem uma conta?' : 'Já possui uma conta?'}
                </AccountPageChanger>
                <TouchableOpacity style={{ height: 25, justifyContent: 'center'}} onPress={() => setIsLogin(!isLogin)}>
                    <AccountPageChanger style={{ color: '#6B9080', fontFamily: 'Montserrat-Bold'}}>
                        {isLogin ? 'Criar conta' : 'Fazer login'}
                    </AccountPageChanger>
                </TouchableOpacity>
            </AccountPageFooter>
        </AccountPageBackground>
    )
}
