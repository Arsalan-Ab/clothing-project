import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firbase/firbase";
import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component";
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields



    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithgoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password')
                    break
                case 'auth/user-not-found':
                    alert('no user find with this email')
                    break
                default:
                    console.log(error)
            }
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>sign in with email and password</span>

            <form onSubmit={handleSubmit} >

                <FormInput label='Email' type='email' required name="email" onChange={handleChange} value={email} />

                <FormInput label='Password' type='password' required name="password" onChange={handleChange} value={password} />

                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithgoogle} >Google sign in</Button>
                </div>
            </form>
        </div>

    )
}

export default SignInForm