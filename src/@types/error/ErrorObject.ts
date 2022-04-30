import { Translations } from '../../app/state/language/types';

export interface ErrorObject {
    description?: string;
    descriptionKey: keyof Translations;
    id: number;
}
