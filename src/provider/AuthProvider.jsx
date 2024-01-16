import React, { createContext, useEffect, useState } from 'react';
import app from '../config/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: user?.email
                }
                fetch('https://car-service-server-site-eta.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt response', data)
                        localStorage.setItem('carServiceToken', data.token);
                    })

            } else {
                localStorage.removeItem('carServiceToken')
            }
        })

        return () => {
            unSubscribe()
        }
    }, [user])

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    //         setUser(currentUser);
    //         console.log(currentUser);
    //         setLoading(false);

    //         if (currentUser && currentUser.email) {
    //             const loggedUser = {
    //                 email: user?.email
    //             };

    //             try {
    //                 // Wait for the JWT request to complete before storing the token
    //                 const response = await fetch('https://car-service-server-site-eta.vercel.app/jwt', {
    //                     method: "POST",
    //                     headers: {
    //                         "content-type": "application/json"
    //                     },
    //                     body: JSON.stringify(loggedUser)
    //                 });

    //                 if (response.ok) {
    //                     const data = await response.json();
    //                     console.log('jwt response', data);
    //                     localStorage.setItem('carServiceToken', data.token);
    //                 } else {
    //                     console.error('JWT request failed:', response.statusText);
    //                 }
    //             } catch (error) {
    //                 console.error('Error during JWT request:', error);
    //             }
    //         } else {
    //             localStorage.removeItem('carServiceToken');
    //         }
    //     });

    //     return () => {
    //         unSubscribe();
    //     };
    // }, [user]);

    console.log(user)
    const authInfo = {
        user,
        createUser,
        logIn,
        LogOut,
        loading,
        setLoading,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;