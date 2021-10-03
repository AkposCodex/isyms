import { createReducer, Action, on } from "@ngrx/store";
import { User } from "../models/user.model";
import { login } from "./actions";

export const initialState: User = {
    username: undefined,
    password: undefined
}

export const adminReducer = createReducer(
    initialState,
    on(login, (state, { username, password }) => ({
        ...state,
        username: username,
        password: password
        
    }))
)
export function reducer(state: User | undefined, action: Action) {
    return adminReducer(state, action);
}