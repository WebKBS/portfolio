import { create } from "zustand";

interface ObserverState {
  html: boolean;
  css: boolean;
  javascript: boolean;
  typescript: boolean;
  react: boolean;
  next: boolean;
  setHtml: (html: boolean) => void;
  setCss: (css: boolean) => void;
  setJavascript: (javascript: boolean) => void;
  setTypescript: (typescript: boolean) => void;
  setReact: (react: boolean) => void;
  setNext: (next: boolean) => void;
}

export const useObserver = create<ObserverState>((set) => ({
  html: false,
  css: false,
  javascript: false,
  typescript: false,
  react: false,
  next: false,
  setHtml: (html: boolean) => set({ html: html }),
  setCss: (css: boolean) => set({ css: css }),
  setJavascript: (javascript: boolean) => set({ javascript: javascript }),
  setTypescript: (typescript: boolean) => set({ typescript: typescript }),
  setReact: (react: boolean) => set({ react: react }),
  setNext: (next: boolean) => set({ next: next }),
}));
