import { ADD_MAINCATEGORY_RED } from "../Constants"
export function MaincategoryReducer(state = [], action) {
    let newState
    switch (action.type) {
        case ADD_MAINCATEGORY_RED:
            newState = state.push(action.payload)
            return newState
    }
}