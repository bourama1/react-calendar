const ADD_REMINDER = 'ADD_REMINDER'
const EDIT_REMINDER = 'EDIT_REMINDER'
const DELETE_REMINDER = 'DELETE_REMINDER'
const CALENDAR_PREV_MONTH = 'CALENDAR_PREV_MONTH'
const CALENDAR_NEXT_MONTH = 'CALENDAR_NEXT_MONTH'

export const prevMonth = () => ({
    type: CALENDAR_PREV_MONTH
})

export const nextMonth = () => ({
    type: CALENDAR_NEXT_MONTH
})

export const addReminder = (weekIndex, weekdayIndex) => ({
    type: ADD_REMINDER,
    payload: { weekIndex, weekdayIndex }
})

export const editReminder = (weekIndex, weekdayIndex, reminder) => ({
    type: EDIT_REMINDER,
    payload: { weekIndex, weekdayIndex, reminder }
})

export const deleteReminder = (weekIndex, weekdayIndex, reminder) => ({
    type: DELETE_REMINDER,
    payload: { weekIndex, weekdayIndex, reminder }
})