const apiRoot = process.env.BACKEND_API_URL;

const authUrl = apiRoot + '/auth';
export const signInUrl = authUrl + '/sign-in';
export const signUpUrl = authUrl + '/sign-up';

export const usersUrl = apiRoot + '/users';
export const mailVerifyUrl = apiRoot + '/mail/verify';

export const calcFoldersUrl = apiRoot + '/calc/folders';
