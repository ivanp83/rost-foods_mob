import { ActionType, AppActions } from "./actions";
import { AppState } from "./state";

export function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case ActionType.MenuHandler:
      return { ...state, menuIsOpen: !state.menuIsOpen };

    default:
      return state;
  }
}
export const toggleMenu = (payload: boolean) => ({
  type: ActionType.MenuHandler,
  payload,
});
