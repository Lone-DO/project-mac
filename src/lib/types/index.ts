import type { WINDOW_CONFIG } from '@/lib/constants';

export * from './tooltip.ts';
export type DockApp = { id: keyof (typeof WINDOW_CONFIG); label: string; imgSrc: string; canOpen: boolean };
export type DockListeners = [HTMLElement, (keyof HTMLElementEventMap), (e: any) => any][];
export type WindowData = null | { [key: string]: any };
