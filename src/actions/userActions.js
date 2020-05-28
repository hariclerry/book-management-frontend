
import { userConstants } from '../actions/actionTypes';
import { userService } from '../services/userServices';

function createUser(userName, email, password){
  console.log('calleddaction')
  return dispatch => {
     let apiEndpoint = 'user';
     let payload = {
         userName: userName,
         email: email,
         password: password
     }       
     userService.post(apiEndpoint, payload)
     .then((response)=>{
      dispatch(creatUserDetails())
      // history.push('/home');
     })
  };
}

export default createUser;

export function creatUserDetails(){
  return{
      type: userConstants.REGISTER_SUCCESS
  }
}