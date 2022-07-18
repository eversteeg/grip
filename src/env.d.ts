/* eslint-disable camelcase */
interface ImportMetaEnv {
    readonly PACKAGE_VERSION: string;
    readonly VITE_VERSION: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
