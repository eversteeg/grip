import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
        background-color: ${({ theme }): string => theme.background.primary};
        min-height: 100%;
        color: ${({ theme }): string => theme.colorTextBody.primary};
    }

    /* user-select overrides because of styled-reset-advanced */
    div,
    span {
        user-select: text;
    }

    .grecaptcha-badge {
        visibility: hidden;
    }
`;

export default GlobalStyle;
