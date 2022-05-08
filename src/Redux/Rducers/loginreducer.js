import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from '../Type'

const user = {
    loading: true,
    user:[]
}
export const logInReducer = (state = user, action) => {

    switch (action.type) {
        case LOGIN_START:
            {
                return {
                    loading: true
                }
            }
            
        case LOGIN_SUCCESS: {
            return {
                loading: false,
                ...state,
                payload: action.payload
            }
        }
            
        case LOGIN_FAILED: {
            return {
                loading: false,
                error: action.payload
            }
            }

        default:
            return state;

    }
}
