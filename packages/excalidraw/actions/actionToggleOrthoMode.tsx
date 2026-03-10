import { CaptureUpdateAction } from "@excalidraw/element";
import { gridIcon } from "../components/icons";
import { register } from "./register";
import type { AppState } from "../types";

export const actionToggleOrthoMode = register({
  name: "orthoMode",
  icon: gridIcon,
  keywords: ["ortho", "snap", "cad"],
  label: "Ortho Mode", // using raw string for now
  viewMode: true,
  trackEvent: {
    category: "canvas",
    predicate: (appState) => appState.orthoModeEnabled,
  },
  perform(elements, appState) {
    return {
      appState: {
        ...appState,
        orthoModeEnabled: !this.checked!(appState),
      },
      captureUpdate: CaptureUpdateAction.EVENTUALLY,
    };
  },
  checked: (appState: AppState) => appState.orthoModeEnabled,
  predicate: (element, appState, props) => {
    return true;
  },
  keyTest: (event) => event.key === "F8" || event.code === "F8",
});
