const initialState = {
  loginPage: {
    yOffset: 0,
    email: '',
    password: '',
    verify: ''
  }
};
/*
 * UPDATE_YOFFSET action.data = new yOffset
 */
export function login(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_YOFFSET':
      return {
        ...state,
        loginPage: {
          yOffset: action.offsetNum
        }
      };

    case 'DELETE_LOGIN_DATA':
      return {
        ...state,
        LoginPage: {
          email: '',
          password: '',
          verify: ''
        }
      };
      
    default:
      return state;
  }
}
