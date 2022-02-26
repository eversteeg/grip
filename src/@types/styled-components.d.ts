import 'styled-components';
import { Theme } from 'faralley-ui-kit';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
