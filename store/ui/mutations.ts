import { UIState } from '~/types/UIState';

export default {
  openSideBar(state: UIState) {
    state.sideBar = true;
  },

  closeSideBar(state: UIState) {
    state.sideBar = false;
  },
};
