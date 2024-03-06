import {createContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../FirebaseConfig";

export const AuthenticationContext = createContext(undefined);

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (u) => {
            if (u) {
                setUser(u);
            }
        });
    }, []);

    const onSignUp = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onSignIn = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            }).finally(() => {
                setIsLoading(false);
            });
    };

    const onSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                setError(error);
            }).finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{ user, error, isLoading, onSignUp, onSignIn, onSignOut }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};