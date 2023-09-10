import * as api from '../api'
import { setCurrentuser } from './currentUser'
import { fetchAllUsers } from './users'
export const SignupForm= (authData, navigate) => async (dispatch) => {
      try {
        const {data}= await api.SignupForm(authData)
        dispatch({type:'AUTH', data})
        dispatch(setCurrentuser(JSON.parse(localStorage.getItem('Profile'))))
        dispatch(fetchAllUsers())
        navigate('/')
      } catch (error) {
        console.log(error)
      }
}

