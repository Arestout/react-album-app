export type FillActionType<T> = (
  payload: T
) => {
  type: string,
  payload: T,
};

export const SHOW_LOADER = 'SHOW_LOADER';
export type ShowLoaderAction = {
  type: typeof SHOW_LOADER,
};

export const HIDE_LOADER = 'HIDE_LOADER';
export type HideLoaderAction = {
  type: typeof HIDE_LOADER,
};

export const SHOW_ERROR = 'SHOW_ERROR';
export type ShowErrorAction = {
  type: typeof SHOW_ERROR,
  payload: string,
};

export type AppActionTypes =
  | ShowLoaderAction
  | HideLoaderAction
  | ShowErrorAction;
