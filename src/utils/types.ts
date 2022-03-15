//redux stuffs
export interface RootState {
  readonly userReducers: UserReducerState;
}

export interface UserReducerState {
  userSession: Boolean;
}

export interface ReduxActionState {
  type: string;
  payload: any | null;
}
