import { CHANGE_MIN_VALUE, CHANGE_MAX_VALUE } from "../actions/numbers"

export interface Numbers {
    min: number,
    max: number
}

export const numbers = (state: Numbers, action: { type: string, payload: number }) => {
    switch (action.type) {
        case CHANGE_MIN_VALUE: return {
            ...state,
            min: action.payload
        }
        case CHANGE_MAX_VALUE: return {
            ...state,
            max: action.payload
        }
        default: return {
            min: 1,
            max: 10
        }
    }
}