export enum VATType {
    ALL = 'ALL',
    CLAIM = 'CLAIM',
    CONVEY = 'CONVEY',
}

export interface VATItem {
    Amount: number;
    AmountVAT: number;
    ArticleNumber: string;
    CreateDate: Date;
    Description: string;
    IsDeleteAllowed: boolean;
    IsEditAllowed: boolean;
    OrganizationId: number;
    OrganizationName: string;
    VATDate: Date;
    VATDescription: string;
    VATId: number;
    VATItemId: number;
    VATType: VATType;
    VATTypeDescription: string;
}
