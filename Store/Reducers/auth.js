import { SIGN_UP, LOG_IN, LOG_OUT } from "../Actions/auth"

const initialState = {
    userId: "",
    firebaseUserId: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_OUT:
            return initialState
        default:
            return state
    }
}

export default authReducer