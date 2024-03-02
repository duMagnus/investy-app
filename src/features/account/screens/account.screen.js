import {ActivityIndicator, Button, TextInput, View} from "react-native";
import {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../FirebaseConfig";

export const AccountScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState('');

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
        <View>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder='E-mail'
                autoCapitalize='none'
            />
            <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                placeholder='Senha'
                autoCapitalize='none'
            />
            {loading
                ? <ActivityIndicator/>
                : <>
                    <Button title='Entrar' onPress={onSignIn}/>
                    <Button title='Registrar-se' onPress={onSignUp}/>
                </>
            }
        </View>
    )
}
