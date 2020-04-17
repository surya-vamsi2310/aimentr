// var baseUrl = "http://localhost:8080/";
var baseUrl = "http://localhost:5001/";
// var baseUrl = "https://aimentruiserver.herokuapp.com/";


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
    STUDENT_REGISTRATION: baseUrl + 'studentRegistration',

    // User Routes
    GET_USER_INFO: baseUrl + 'getUserInfo',
    UPDATE_USER_PROFILE: baseUrl + 'updateProfile',
    GET_USERS_BY_ROLE: baseUrl + 'getUsersByRole',
    GET_USERS_BY_QUERY: baseUrl + 'queryUsers',

    GET_USERS_FOR_FILTERS: baseUrl + 'filterUsersAndCourses',

    

    //Course 
    ADD_COURSE: baseUrl + 'addCourse',
    GET_ALL_COURSES_OF_MENTOR: baseUrl + 'getAllCoursesOfMentor',
    UPDATE_COURSE: baseUrl + 'updateCourse',
    DELETE_COURSE: baseUrl + 'deleteCourse',

    //topics and subtopics of course

    ADD_TOPICS_OF_COURSE: baseUrl + 'AddTopicOfCourse',
    GET_TOPICS_OF_COURSE: baseUrl + 'getTopicsOfCourse',
    UPDATE_TOPIC_NAMES_OF_COURSE: baseUrl + 'updateTopicNames',
    DELETE_TOPICS_NAMES_OF_COURSE: baseUrl + 'deleteTopicNames',

    ADD_SUB_TOPICS_OF_COURSE: baseUrl + 'AddSubTopicOfCourse',
    GET_SUB_TOPICS_OF_COURSE: baseUrl + 'getSubtopicsOfCourse',
    UPDATE_SUB_TOPIC_NAMES_OF_COURSE: baseUrl + 'updateSubTopicNames',
    DELETE_SUB_TOPIC_NAMES_OF_COURSE: baseUrl + 'deleteSubTopicNames',

    UPDATE_SUB_TOPIC_PROGRAMMING_STATUS: baseUrl + 'updateSubTopicProgrammingStatus',
    UPDATE_SUB_TOPIC_VIDEO_URL: baseUrl + 'updateSubTopicVideoUrl',







}