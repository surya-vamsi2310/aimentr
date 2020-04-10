// var baseUrl = "http://localhost:8080/";
var baseUrl = "http://localhost:5000/";
// var baseUrl = "";


export const APIURL = {

    REGISTER_WITH_RESUME: baseUrl + "api/upload",
    GET_AUDIO_TO_TEXT: baseUrl + "api/getAudioToText",





    // auth Routs
    AUTH_VALIDUSERNAME: baseUrl + 'auth/validUsername/:username',
    AUTH_REGISTER_USER: baseUrl + 'auth/register',
    AUTH_LOGIN_USER: baseUrl + 'auth/login',
    AUTH_RESET_PASSWORD: baseUrl + 'auth/resetPassword',
    EXTRACT_RESUME: baseUrl + 'extractResume',
    MAIL_VERIFIED_BY_USERNAME: baseUrl + 'mailVerified/:username',
    MAIL_VERIFICATION_STATUS_BY_USERNAME: baseUrl + 'mailVerificationStatus/:username',
    RESEND_CONFORMATION_BY_USERNAME: baseUrl + 'resendConfirmation/:username',
    SEND_OTP: baseUrl + 'sendOtp',
    VERIFY_OTP: baseUrl + 'verifyOtp',

    // User Routes
    GET_USER_INFO: baseUrl + 'getUserInfo',
    UPDATE_USER_PROFILE: baseUrl + 'updateProfile',
    GET_USERS_BY_ROLE: baseUrl + 'getUsersByRole',
    GET_USERS_BY_QUERY: baseUrl + 'queryUsers',







}