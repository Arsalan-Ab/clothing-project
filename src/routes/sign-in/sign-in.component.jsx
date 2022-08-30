import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firbase/firbase"
import SignUpForm from "../../components/sign-up-form/singn-up-form.component"

const SignIn = () => {
const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
}

    return (
        <div>
            <h2>hello</h2>
            <button onClick={logGoogleUser}> sing in google</button> 
            <SignUpForm></SignUpForm>
        </div>
        
    )
}

export default SignIn