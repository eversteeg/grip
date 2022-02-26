// eslint-disable-next-line import/prefer-default-export
export const stripHtml = (value: string): string =>
    value
        .replace(/<style[^>]*>.*<\/style>/gm, '')
        // Remove script tags and content
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        // Remove all opening, closing and orphan HTML tags
        .replace(/<[^>]+>/gm, '')
        // Remove leading spaces and repeated CR/LF
        .replace(/([\r\n]+ +)+/gm, '') || '';
