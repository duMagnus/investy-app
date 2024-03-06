import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBy3qZjyyOsplQxQaFd1tHyCl4qc8R21X0",
    authDomain: "investy-dace1.firebaseapp.com",
    projectId: "investy-dace1",
    storageBucket: "investy-dace1.appspot.com",
    messagingSenderId: "130929131144",
    appId: "1:130929131144:web:826fc987eaf4f539a1e93d"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});