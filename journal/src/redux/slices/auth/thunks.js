import { GoogleAuthProvider } from "firebase/auth"
import { loginUser, registerUser, signInWithGoogle } from "../../../firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"
import { async } from "@firebase/util"

export const checkingAuth = ({email, password}) =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials())
    }
}

export const googleSignIn =()=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials())
        const result = await signInWithGoogle()
        if( !result.ok) return dispatch(logout( result.errorMessage ))
        dispatch( login( result ))
          
    }
}

export const registerUserWithEmailAndPassword =(email, password, displayName)=>{
    return async ( dispatch )=>{
        dispatch(checkingCredentials() )
        const resp = await registerUser(email, password, displayName)
        if(!resp.ok) {
           return dispatch( logout(resp.errorMessage))}
        dispatch(login(resp))
    }
}


export const loginUserWithEmail = (email, password) =>{
    return async (dispatch)=>{
        dispatch(checkingCredentials())
        const resp = await loginUser(email, password)
        if(!resp.ok) return dispatch(logout( resp.errorMessage))
        dispatch(login(resp))
    }
}