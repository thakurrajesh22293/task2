declare module "react-dom/client" {
    import { ReactElement } from "react";
    interface Root {
        render(element: ReactElement): void;
    }
    function createRoot(container: Element | DocumentFragment): Root;
    export { createRoot };
}
