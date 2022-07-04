
export interface AuthState {
    userId: string | null | undefined;
    status: 'checking' | 'autenticated' | 'not-autenticated';
    token: string | null;
    errorMessage: string | null;
}

export const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    userId: null,
    errorMessage: null,
}

export type AuthAction =
    | { type: 'signUp', payload: { token: string, userId: string } }
    | { type: 'signIn', payload: { token: string, userId: string } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAutenticated' }
    | { type: 'logOut' }
    | { type: 'cleanExists' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'cleanExists':
            return {
                ...state,
                token: null,
                errorMessage: null,
                userId: null,
                status: 'not-autenticated'

            }
        case 'signIn':
        case 'signUp':
            return {
                ...state,
                errorMessage: null,
                status: 'autenticated',
                token: action.payload.token,
                userId: action.payload.userId
            }
        case 'notAutenticated':
        case 'logOut':
            return {
                ...state,
                status: 'not-autenticated',
                token: null,
                userId: null
            }
        case "addError":
            return {
                ...state,
                status: 'not-autenticated',
                token: null,
                userId: null,
                errorMessage: action.payload,

            }
        case "removeError":
            return {
                ...state,
                errorMessage: null,
            }
        default:
            return state;

    }
}
