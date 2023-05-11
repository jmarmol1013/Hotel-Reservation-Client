import React, { useState } from 'react'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
import { CalendarSelector } from '../calendar/CalendarSelector';

export const BannerInformation = () => {
    const [showCalendarCheckOut, setShowCalendarCheckOut] = useState(false);
    const [showCalendarCheckIn, setShowCalendarCheckIn] = useState(false);
    const [selectedDayCheckIn, setSelectedDayCheckIn] = useState(null);
    const [selectedDayCheckOut, setSelectedDayCheckOut] = useState(null);
    const [numberGuests,setNumberGuests] = useState(0);

    return (
        <>
            <div className='items-center text-center align-middle mt-10 md:mt-20 lg:mt-40 absolute text-[white] w-[98%] mx-[1%] md:w-[80%] md:mx-[10%] lg:w-[35%] lg:mx-[32.5%] select-none'>
                <h1 className='md:text-xl text-lg'>Luxury Hotel & Best Resort</h1>
                <h2 className=' md:text-6xl text-3xl font-bold'>Enjoy a luxury experience </h2>
                <button className='border-2 border-[white] rounded-md px-4 py-2 my-5 hover:bg-[white] hover:text-primary'>Rooms & Suites</button>
                <div className='bg-[white] border-[white] rounded-md flex text-[black] w-full text-sm md:text-base '>
                    <div className='flex py-3 px-2 md:py-6 md:px-4 align-middle items-center w-[90%]'>
                        <div className='flex-row w-1/3'>
                            <p className='text-[#A0A0A0]'>CheckIn</p>
                            <div className='flex items-center justify-center '>
                                {
                                    selectedDayCheckIn ? 
                                        <div className='flex-row text-center w-4/5 ml-[10%]'>
                                            <p>{selectedDayCheckIn.format('MMM')}</p>
                                            <p>{selectedDayCheckIn.format('D')}</p>
                                        </div>
                                    :
                                        <p className='text-center hover:cursor-pointer'onClick={() => setShowCalendarCheckIn(!showCalendarCheckIn)}>Select Date</p>
                                }
                                {
                                    showCalendarCheckIn ?
                                        <CalendarSelector 
                                            selectedDay={selectedDayCheckIn} 
                                            setSelectedDay={setSelectedDayCheckIn} 
                                            setShowCalendar={setShowCalendarCheckIn}
                                        />
                                    :
                                    null
                                }
                                {
                                    showCalendarCheckIn ? 
                                        <MdKeyboardArrowUp className=' hover:cursor-pointer' onClick={() => setShowCalendarCheckIn(false)} size={24}/>
                                    :
                                        <MdKeyboardArrowDown className=' hover:cursor-pointer' onClick={() => setShowCalendarCheckIn(true)} size={24}/>
                                }
                            </div>
                        </div>
                        <div className='flex-row w-1/3'>
                            <p className='text-[#A0A0A0]'>CheckOut</p>
                            <div className='flex items-center justify-center '>
                                {
                                    selectedDayCheckOut ? 
                                        <div className='flex-row text-center w-4/5 ml-[10%]'>
                                            <p>{selectedDayCheckOut.format('MMM')}</p>
                                            <p>{selectedDayCheckOut.format('D')}</p>
                                        </div>
                                    :
                                        <p className='text-center hover:cursor-pointer'onClick={() => setShowCalendarCheckOut(!showCalendarCheckOut)}>Select Date</p>
                                }
                                {
                                    showCalendarCheckOut ?
                                        <CalendarSelector 
                                            selectedDay={selectedDayCheckOut} 
                                            setSelectedDay={setSelectedDayCheckOut} 
                                            setShowCalendar={setShowCalendarCheckOut}
                                        />
                                    :
                                    null
                                }
                                {
                                    showCalendarCheckOut ? 
                                        <MdKeyboardArrowUp className=' hover:cursor-pointer' onClick={() => setShowCalendarCheckOut(false)} size={24}/>
                                    :
                                        <MdKeyboardArrowDown className=' hover:cursor-pointer' onClick={() => setShowCalendarCheckOut(true)} size={24}/>
                                }
                            </div>
                        </div>
                        <div className='flex-row justify-center items-centers w-1/3'>
                        <p className='text-[#A0A0A0]'>Guets</p>
                            <div className='flex items-center justify-center '>
                                <div className='flex-row text-center w-2/5 ml-[10%]'>
                                    <p className='text-xl'>{numberGuests}</p>
                                </div>
                                <div className='flex-row'>
                                    <MdKeyboardArrowUp className='hover:cursor-pointer' onClick={() => setNumberGuests(numberGuests + 1)}/>
                                    <MdKeyboardArrowDown className='hover:cursor-pointer' onClick={() => setNumberGuests(numberGuests - 1)} />                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className='flex-row justify-center items-center align-middle rounded-r-md bg-primary w-1/3'>
                        <p className='text-[white] items-center'>Check <br></br> Availability</p>
                    </button>
                </div>
            </div>
        </>
    )
}
