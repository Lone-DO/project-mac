export * from './tooltip.ts';
export type DockApp = { id: string; label: string; imgSrc: string; canOpen: boolean };
export type DockListeners = [HTMLElement, (keyof HTMLElementEventMap), (e: any) => any][];
