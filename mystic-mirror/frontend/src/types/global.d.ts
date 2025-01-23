export {};

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: {
        url: string;
        parentElement?: HTMLElement | null;
        prefill?: object;
      }) => void;
      closePopupWidget: () => void;
    };
  }
}
