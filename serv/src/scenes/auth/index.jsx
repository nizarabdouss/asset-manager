import { auth, googleProvider } from "../../config/firebase";
import {createUserWithEmailAndPassword, signInWithRedirect, signOut} from 'firebase/auth';
import {useState} from "react";






const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.photoURL);
    console.log(auth?.currentUser);

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try{
            await signInWithRedirect(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    const logOut = async ()  => {
        try{
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>sign in</button>
            <button onClick={signInWithGoogle}> Sign </button>

            <button onClick={logOut}>log out</button>
        </div>
    )
}



export default Auth;