import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from '../Type';

export const loginAction = ({email, password}) => async (dispatch) => {
    console.log(email, password);
    
    await dispatch({type: LOGIN_START})

    try {

        const result = [
             {email: email, password: password}

        ]
        if (result.length > 0) {

            return  await  dispatch({ type: LOGIN_SUCCESS, payload: result, loading: false})
        } else {
            return await dispatch({ type: LOGIN_FAILED, payload: "error some issue", loading: false })
        }
        
    } catch (error) {
        console.log(error);
        return await dispatch({ type: LOGIN_FAILED, payload: error || error.message, loading: false })
    }




}
