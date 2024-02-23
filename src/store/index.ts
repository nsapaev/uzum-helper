import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice.ts"

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


