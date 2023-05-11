import moment from 'moment/moment';
import React, { useState } from 'react'
import { RenderCalendar } from './RenderCalendar';
import {MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'

export const CalendarSelector = ({setShowCalendar,selectedDay,setSelectedDay}) => {
    const [currentMonth, setCurrentMonth] = useState(moment());

    function goToPreviousMonth() {
        setCurrentMonth(moment(currentMonth).subtract(1, 'month'));
    }
    
    function goToNextMonth() {
        setCurrentMonth(moment(currentMonth).add(1, 'month'));
    }
   
      return (
        <div>
            <div className='absolute bg-primary p-4 rounded-md mt-6'>
              <div className="justify-between mb-2 text-[white]">
                <button onClick={goToPreviousMonth} className='mr-2' >
                    <MdArrowBackIosNew/>
                </button>
                <button onClick={goToNextMonth} className='ml-2'>
                    <MdArrowForwardIos/>
                </button>
              </div>
              <p className='mb-2 text-fourth'>{currentMonth.format('MMMM YYYY')}</p>
              <RenderCalendar  currentMonth={currentMonth} selectedDay={selectedDay} setSelectedDay={setSelectedDay} setShowCalendar={setShowCalendar}/>
            </div>
        </div>
      );
}
