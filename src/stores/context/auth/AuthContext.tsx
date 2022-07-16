import { CommonActions, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createContext, useReducer } from "react";
import { apiUser } from "../../../api/apiCalls";
import { MainStackParamList } from "../../../navigation/main/mainNavigator";
import { authInitialState, authReducer } from "./authReducer";

type AuthContextProps = {
    errorMessage: string | null,
    userId: string | null | undefined,
    token: string | null;
    status: 'checking' | 'autenticated' | 'not-autenticated'
    signIn: (email: string, password: string) => void;
    signOut: () => void;
    removeError: () => void;
}


export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: any) => {


    const [state, dispatch] = useReducer(authReducer, authInitialState);
    const signIn = async (email: string, password: string) => {
        console.log("ss", state.status)
        try {
            const { data } = await apiUser.post('/login', { "email": email, "password": password })
            console.log(data.data);
            dispatch({
                type: 'signIn',
                payload: {
                    token: data.token,
                    userId: data.user.id,

                }
            })

        } catch (error) {
            dispatch({
                type: 'addError',
                payload: error.response.data.error
            })
            console.log(error.response.data.error);

        }


    };
    const signOut = () => { console.log('d') };
    const removeError = () => { dispatch({ type: 'removeError' }) };
    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            signOut,
            removeError,
        }}>

            {children}

        </AuthContext.Provider>
    )
}
