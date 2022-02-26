export interface LocalStorage {
    language: string;
    persistedState: string;
    rememberMe: string;
    resendActivationMail: string;
    theme: string;
    tokenInformation: string;
    username: string;
}

export const LOCAL_STORAGE: LocalStorage = {
    language: 'GRIP_LANGUAGE',
    persistedState: 'GRIP_PERSISTED_STATE',
    rememberMe: 'GRIP_REMEMBER_ME',
    resendActivationMail: 'GRIP_RESEND_ACTIVATION_MAIL',
    theme: 'GRIP_THEME',
    tokenInformation: 'GRIP_OAUTH_TOKEN',
    username: 'GRIP_USERNAME',
};

export interface SessionStorage {
    loginLayoutVariant: string;
    user: string;
}

export const SESSION_STORAGE: SessionStorage = {
    loginLayoutVariant: 'GRIP_LOGIN_LAYOUT_VARIANT',
    user: 'GRIP_USER',
};
