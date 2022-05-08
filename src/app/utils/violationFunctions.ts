import { Error } from '../../@types/error/Error';

export const getViolationTexts = (violations: Error): string[] => [violations.description];

export default getViolationTexts;
