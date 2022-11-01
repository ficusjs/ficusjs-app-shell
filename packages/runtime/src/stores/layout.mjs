import { createAppState, createPersist } from "../util/shell-runtime.mjs";
import { storeNames } from "./constants.mjs";

createAppState(storeNames.LAYOUT, {
  initialState: {
    layout: {},
    appTitle: null,
    appVersion: null,
    pageTitle: {
      loading: true,
      title: null,
      subtitle: null,
    },
  },
  persist: createPersist(storeNames.LAYOUT, "local"),
  setPageTitle(title) {
    document.title = title;
  },
  setLayout(layout) {
    this.setState((state) => ({ ...state, layout }));
  },
});
