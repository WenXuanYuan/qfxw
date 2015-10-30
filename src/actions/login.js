import { CREATE_ADMINISTOR_INFOMATION } from 'constants/ActionTypes';

export function loginSuccess( name, avator, email, phoneNum, gender, campous, address, navigation ) {
  return {
    type: CREATE_ADMINISTOR_INFOMATION,
    name, avator, email, phoneNum, gender, campous, address, navigation
  }
}