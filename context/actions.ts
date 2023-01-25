export enum ActionType {
  MenuHandler,
}

export interface IMenu {
  type: ActionType.MenuHandler;
  payload: boolean;
}

export type AppActions = IMenu;
