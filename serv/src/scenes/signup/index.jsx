import { auth, googleProvider } from "../../config/firebase";
import {createUserWithEmailAndPassword, signInWithRedirect, signOut} from 'firebase/auth';
import {useState} from "react";
import {Box, Button, TextField} from "@mui/material";

import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import {Link} from "react-router-dom";



const SignUp = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.photoURL);
    console.log(auth?.currentUser);


    const handleChange = (to) => {
        
    }
    const signIn = async (email, password) => {
        try{
            console.log("Attempt");
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Pass");
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
        <Box className="content" m="20px">
            <Header title="Sign Up" subtitle="Create an account or sign up with a provider"/>
            <Formik
                onSubmit={(values, { setSubmitting }) => {
                    signIn(values.email, values.password);
                    setSubmitting(false);
                }}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}
                    >
                        {console.log("Begin")}
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4" }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type="password"
                            label="Password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={!!touched.password && !!errors.password}
                            helperText={touched.password && errors.password}
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            Login
                        </Button>
                    </Box>
                </form>
                )}
            </Formik>
            <Box display="flex" justifyContent="end" mt="20px">
                        <Button onClick={signInWithGoogle} color="secondary" variant="contained">
                            Sign in with google
                        </Button>

                        <Link to="/">
                            Sign in with google
                        </Link>
            </Box>
            {/*
        <div>
            <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>sign in</button>
            <button onClick={signInWithGoogle}> Sign </button>

            <button onClick={logOut}>log out</button>
        </div>
                */}
        </Box>
        
    )
}

const checkoutSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValues = {
    email: "",
    password: "",
    
};


export default SignUp;