declare global {
  interface Window {
    HSStaticMethods?: {
      autoInit: () => void;
    };
  }
}

declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';

export {};

