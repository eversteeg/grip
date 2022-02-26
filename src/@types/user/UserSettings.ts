export enum MailClient {
    APPLEMACMAIL = 'APPLEMACMAIL',
    OTHER = 'OTHER',
    OUTLOOK = 'OUTLOOK',
    THUNDERBIRD = 'THUNDERBIRD',
}

export interface UserSettings {
    AppTheme: string | null;
    IsSuccess: boolean;
    MailClient: MailClient | null;
}
