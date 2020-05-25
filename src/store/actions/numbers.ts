export const CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE'
export const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'

export function changeMinValue(value: number) {
    return {
        type: CHANGE_MIN_VALUE,
        payload: value
    }
}

export function changeMaxValue(value: number) {
    return {
        type: CHANGE_MAX_VALUE,
        payload: value
    }
}