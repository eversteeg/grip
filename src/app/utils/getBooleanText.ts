import { getTranslation } from './translationFunctions';

export const getBooleanText = (value: boolean | null): string => getTranslation(value ? 'Yes' : 'No');

export default getBooleanText;
