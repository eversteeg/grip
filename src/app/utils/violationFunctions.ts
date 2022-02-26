import { EntityViolation } from '../../@types/error/EntityViolation';

export const getViolationTexts = (violations: EntityViolation['Violations']): string[] =>
    Object.values(violations).map((violation) => violation);

export default getViolationTexts;
