import React from 'react'
import moment from 'moment/moment';

export const RenderCalendar = ({setShowCalendar,currentMonth,selectedDay,setSelectedDay}) => {
    const monthStart = moment(currentMonth).startOf('month');
    const monthEnd = moment(currentMonth).endOf('month');
    const startDate = moment(monthStart).startOf('week');
    const endDate = moment(monthEnd).endOf('week');
    const dates = [];
    let day = startDate;

    while (day.isBefore(endDate)) {
        if (day.isSameOrAfter(monthStart) && day.isSameOrBefore(monthEnd)) {
          dates.push(day);
        }
        day = moment(day).add(1, 'day');
      }

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const firstDayOfMonth = monthStart.format('d');


    for (let i = 0; i < firstDayOfMonth; i++) {
      dates.unshift(null);
    }

    return (
        <div className="grid grid-cols-7 gap-2 text-[white]">
          {daysOfWeek.map((dayOfWeek) => (
            <div className="text-center" key={dayOfWeek}>
              {dayOfWeek}
            </div>
          ))}
          {dates.map((date, index) => {
            if (!date) {
              return <div key={index}></div>; 
            }
            return (
              <button
                key={index}
                className={`p-2 text-center ${
                  date.isSame(selectedDay, 'day') ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => {
                    setSelectedDay(date)
                    setShowCalendar(false)
                  }}
              >
                {date.format('D')}
              </button>
            );
          })}
        </div>
      );
}
