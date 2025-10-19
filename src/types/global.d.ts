declare global {
  interface Window {
    HSStaticMethods?: {
      autoInit: () => void;
    };
  }
}

export {};
