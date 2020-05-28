import * as actionTypes from './actionTypes';

// export const createContact = (contact) => {
//     return {
//       type: actionTypes.CREATE_NEW_CONTACT,
//       contact: contact
//     }
//   };

  export const createContact = () => dispatch => {
    dispatch({
        type: actionTypes.CREATE_NEW_CONTACT,
      contact: 'contact'
    //  type: 'SIMPLE_ACTION',
    //  payload: 'result_of_simple_action'
    })
   }