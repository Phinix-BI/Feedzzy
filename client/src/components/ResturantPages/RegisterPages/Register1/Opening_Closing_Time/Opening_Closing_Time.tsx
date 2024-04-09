import React from 'react';
import TimePicker from '../TimePicker/TimePicker.tsx';


interface Opening_Closing_Time_Props {
    isDiffOpeningClosingTime ?: boolean;
    onChangeIsDiffOpeningClosingTime ?: (isDiffOpeningClosingTime: boolean) => void;
}

const Opening_Closing_Time : React.FC<Opening_Closing_Time_Props> = ({isDiffOpeningClosingTime,onChangeIsDiffOpeningClosingTime}) => {

    const handelRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === 'ColorBlue1') {
            onChangeIsDiffOpeningClosingTime && onChangeIsDiffOpeningClosingTime(false);
        } else if ( onChangeIsDiffOpeningClosingTime) {
            onChangeIsDiffOpeningClosingTime(true);
        }
    };

    return (
        <>
            <div className="bg-white rounded-3xl mx-4 my-6 px-5 pb-5">
                   
                <div className="px-5 pt-5  pb-3 font-semibold text-lg">
                    <h2>Opening & Closing time</h2>
                </div>

                <div className='mx-8 pb-4 pt-2'>
                    <div className='flex mb-2 '>
                        <div className='flex my-auto block size-2 my-auto cursor-pointer rounded-full bg-orange-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-orange-500 has-[:checked]:ring-offset-2'>
                            <input type="radio" name="timeOption" value="timeOption1" id="timeOption1" className="sr-only" 
                             checked={!isDiffOpeningClosingTime}
                             onChange={handelRadioChange} />
                        </div>
                        <div className='pl-3'>
                            <label htmlFor="timeOption1" className="text-sm cursor-pointer text-semibold text-gray-400">I open and close my resturant at the same time on all working days</label>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex my-auto block size-2 my-auto cursor-pointer rounded-full bg-orange-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-orange-500 has-[:checked]:ring-offset-2'>
                            <input type="radio" name="timeOption" value="timeOption2" id="timeOption2" className="sr-only"
                              />
                        </div>
                        <div className='pl-3'>
                            <label htmlFor="timeOption2" className="text-sm cursor-pointer text-semibold text-gray-400">I've separate daywise timings</label>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-4 mx-3 border-1 border-dashed bg-gray-400" />

                <TimePicker />
                
                <div className='mx-2  text-sm px-2 py-3 rounded-2xl bg-zinc-200 '>Longer operational timings ensures you get 1.5X more orders and helps you avoid cancellations. </div>
            </div>
        </>
    )
}

export default Opening_Closing_Time;