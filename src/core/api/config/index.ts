const apiRoot = process.env.REACT_APP_URL_API;

const authUrl = apiRoot + '/auth';
export const signIn = authUrl + '/sign-in';
export const signUp = authUrl + '/sign-up';
