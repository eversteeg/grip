import { Locale } from 'faralley-ui-kit';

export interface GenericErrorMessages {
    email: string;
    required: string;
    telephone: string;
    uri: string;
}

export interface LanguageState {
    dialect: Dialect;
    genericErrorMessages: GenericErrorMessages;
    isLoading: boolean;
    isLocaleChanged: boolean;
    locale: Locales;
    translations: Translations;
}

export interface Dialect {
    [key: string]: string;
}

export type Locales = typeof Locale['EN'] | typeof Locale['NL'];

export interface Translations {
    Add: string;
    AddDescription: string;
    AddDescriptionOptional: string;
    AddFile: string;
    AddName: string;
    AddNameOptional: string;
    AddVAT: string;
    Amount: string;
    AmountVAT: string;
    AppSettings: string;
    Apply: string;
    ArticleNumber: string;
    BackToHome: string;
    Cancel: string;
    CarTripOverview: string;
    Change: string;
    ChangePassword: string;
    ChangeVAT: string;
    ChangeVATItem: string;
    ChooseAnotherFile: string;
    ChooseFile: string;
    CloseWindow: string;
    ContinueAnyway: string;
    DateFormat: string;
    DateFormatDateTime: string;
    DateFormatLong: string;
    DateFormatTime: string;
    DateFormatXLong: string;
    Delete: string;
    DeleteHistoryData: string;
    Description: string;
    DragFile: string;
    Email: string;
    EndDate: string;
    Error404: string;
    Error404Text: string;
    ErrorInactivity: string;
    ErrorInvalidAmount: string;
    ErrorOAuthFailed: string;
    ErrorReCaptchaVerifying: string;
    ErrorServerFailure: string;
    ErrorUnauthorizedCall: string;
    ErrorUnknown: string;
    ErrorUpdatePasswordNotEqual: string;
    ForgotPassword: string;
    ForgotPasswordText: string;
    GenericErrorMessageEmail: string;
    GenericErrorMessageRequired: string;
    GenericErrorMessageTelephone: string;
    GenericErrorMessageURI: string;
    GoBack: string;
    GoToLoginPage: string;
    GoToPage: string;
    Language: string;
    Login: string;
    Logout: string;
    Maintenance: string;
    NewPassword: string;
    NewPasswordRepeat: string;
    NewPasswordText: string;
    No: string;
    NoDataKnown: string;
    NoEmailReceived: string;
    NothingSelected: string;
    Of: string;
    Organization: string;
    OrganizationDetails: string;
    Page: string;
    Password: string;
    PasswordReset: string;
    PasswordResetText: string;
    Percentage: string;
    Period: string;
    Print: string;
    PrintVATList: string;
    RememberLoginData: string;
    Reset: string;
    ResetYourPassword: string;
    ResetYourPasswordText: string;
    ResultsOf: string;
    RowsPerPage: string;
    Save: string;
    SendInstructions: string;
    Settings: string;
    Show: string;
    ShowAll: string;
    Sort: string;
    StartDate: string;
    Support: string;
    TermsOfUse: string;
    TooBigToUpload: string;
    TooLongFileName: string;
    Type: string;
    Unknown: string;
    UnsavedChangesAlert: string;
    UnsupportedAlert: string;
    UnsupportedAlertText: string;
    Upload: string;
    UploadDate: string;
    UploadFile: string;
    Uploaded: string;
    UploadedFiles: string;
    UploadingFiles: string;
    UseDarkTheme: string;
    VAT: string;
    VATDate: string;
    VATType: string;
    VATTypeALL: string;
    VATTypeCLAIM: string;
    VATTypeCONVEY: string;
    VATs: string;
    Version: string;
    WrongExtension: string;
    Yes: string;
    ZipCode: string;
}

export const GET_TRANSLATIONS = 'language.GET_TRANSLATIONS';

interface GetTranslationsAction {
    payload: Translations;
    type: typeof GET_TRANSLATIONS;
}

export const SET_DIALECT = 'language.SET_DIALECT';

interface SetDialectAction {
    payload: Dialect;
    type: typeof SET_DIALECT;
}

export const SET_GENERIC_ERROR_MESSAGES = 'language.SET_GENERIC_ERROR_MESSAGES';

interface SetGenericErrorMessagesAction {
    payload: GenericErrorMessages;
    type: typeof SET_GENERIC_ERROR_MESSAGES;
}

export const SET_IS_LOADING = 'language.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export const SET_IS_LOCALE_CHANGED = 'language.SET_IS_LOCALE_CHANGED';

interface SetIsLocaleChangedAction {
    payload: boolean;
    type: typeof SET_IS_LOCALE_CHANGED;
}

export const SET_LOCALE = 'language.SET_LOCALE';

interface SetLocaleAction {
    payload: Locales;
    type: typeof SET_LOCALE;
}

export const SET_TRANSLATIONS = 'language.SET_TRANSLATIONS';

interface SetTranslationsAction {
    payload: Translations;
    type: typeof SET_TRANSLATIONS;
}

export type LanguageActionTypes =
    | GetTranslationsAction
    | SetDialectAction
    | SetGenericErrorMessagesAction
    | SetIsLoadingAction
    | SetIsLocaleChangedAction
    | SetLocaleAction
    | SetTranslationsAction;
