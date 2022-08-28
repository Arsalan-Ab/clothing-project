import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firbase/firbase"

const SignIn = () => {
const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
}

    return (
        <div>
            <h2>hello</h2>
            <button onClick={logGoogleUser}> sing in google</button> 
        </div>
    )
}

export default SignIn