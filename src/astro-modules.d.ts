// Type declarations for .astro file imports
// This allows TypeScript to understand imports from .astro files

type AstroModuleExports = {
  [key: string]: any;
};

declare module "*.astro" {
  import type { AstroComponentFactory } from "astro/runtime/server";
  
  // Default export is the Astro component
  const Component: AstroComponentFactory;
  export default Component;
  
  // Export all properties from the exports type
  // This allows any named export from .astro files
  export const accordion: any;
  export const accordionContent: any;
  export const accordionItem: any;
  export const accordionTrigger: any;
  export const card: any;
  export const cardContent: any;
  export const cardDescription: any;
  export const cardFooter: any;
  export const cardHeader: any;
  export const cardTitle: any;
  export const button: any;
  export const selectContent: any;
  export const selectContentInner: any;
  export const selectItem: any;
  export const selectItemIcon: any;
  export const selectLabel: any;
  export const selectSearch: any;
  export const selectSeparator: any;
  export const selectTrigger: any;
  export const selectValue: any;
  export const dropdownContent: any;
  export const dropdownItem: any;
  export const dropdownLabel: any;
  export const dropdownSeparator: any;
  export const dropdownTrigger: any;
  export const dialogBackdrop: any;
  export const dialogCloseButton: any;
  export const dialogContent: any;
  export const dialogDescription: any;
  export const dialogFooter: any;
  export const dialogHeader: any;
  export const dialogTitle: any;
  export const input: any;
  export const label: any;
  export const sheet: any;
  export const sheetClose: any;
  export const sheetContent: any;
  export const sheetDescription: any;
  export const sheetFooter: any;
  export const sheetHeader: any;
  export const sheetTitle: any;
  export const sheetTrigger: any;
}
