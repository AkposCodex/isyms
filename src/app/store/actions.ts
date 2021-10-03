import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const login = createAction(
    '[Admin Component] Login',
    // props<{user: User}>()
    props<{username: string, password: string}>()
)
