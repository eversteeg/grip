export const isEnterKey = (event: React.KeyboardEvent | React.KeyboardEvent<HTMLInputElement>): boolean =>
    event.keyCode === 13 || event.code === 'Enter';

export const isEscapeKey = (event: React.KeyboardEvent | React.KeyboardEvent<HTMLInputElement>): boolean =>
    event.keyCode === 27 || event.code === 'Escape';

export const getKeyCode = (event: React.KeyboardEvent | React.KeyboardEvent<HTMLInputElement>): string => event.code;
