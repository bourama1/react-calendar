import React from 'react'
import { CalendarMonthContainer } from '../../containers'

function Calendar() {
    return (
        <div className='calendar'>
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            < CalendarMonthContainer />
        </div>
    );
}

export default Calendar