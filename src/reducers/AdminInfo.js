import { CREATE_ADMINISTOR_INFOMATION } from 'constants/ActionTypes';
let localStorage = window.localStorage;
let localAdminInfo = JSON.parse(localStorage.getItem('adminInfo'));

const initialState = {
  adminInfo: {
    name: '',
    avator: '',
    email: '',
    gender: '',
    campous: '',
    address: '',
    phoneNum: '',
    navigation: []
  }
};

if (localAdminInfo) {
  initialState.adminInfo = localAdminInfo;
};

export function adminInfo(state = initialState, action) {

  switch (action.type) {
    case CREATE_ADMINISTOR_INFOMATION:
      let state = {
        ...state,
        adminInfo: {
          name: action.name,
          avator: action.avator,
          email: action.email,
          gender: action.gender,
          campous: action.campous,
          address: action.address,
          phoneNum: action.phoneNum,
          navigation: action.navigation
        }
      };
      window.localStorage.setItem('adminInfo',JSON.stringify(state.adminInfo));
      return state;
    default:
      return state;
  }
}