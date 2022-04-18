import { combineReducers } from 'redux'
import calendarReducer from './CalendarReducer'

const allReducers = combineReducers({
    calendar: calendarReducer
})

export default allReducers