import { createSelector } from "@ngrx/store";
import { User } from "../models/user.model";
import { AppState } from "../store/app.state";

export const userSelector = (
    state: AppState
) => state.user

export const uniqueUser = createSelector(
    userSelector,
    (user: User) => {
        return user.username
    }
)