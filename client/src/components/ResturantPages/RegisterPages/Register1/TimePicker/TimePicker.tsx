import React, { useState } from 'react';
import './TimePicker.css'; // Import CSS file for styling

const TimePicker: React.FC = () => {
    const [showOpeningPicker, setShowOpeningPicker] = useState(false);
    const [showClosingPicker, setShowClosingPicker] = useState(false);

    const toggleOpeningPicker = () => {
        setShowOpeningPicker(!showOpeningPicker);
        if (!showOpeningPicker) {
            setShowClosingPicker(false);
        }
    };

    const toggleClosingPicker = () => {
        setShowClosingPicker(!showClosingPicker);
        if (!showClosingPicker) {
            setShowOpeningPicker(false);
        }
    };

    return (
        <div className='time-picker mt-10 mx-auto pb-8 max-w-md'>
            <div className='flex flex-col items-center gap-5'>
                <label htmlFor="opening" className='sr-only'>Opening Time</label>
                <div className="relative">
                    <input type="text" id="opening" placeholder="Open Time" readOnly onClick={toggleOpeningPicker} className="border-1 h-16 w-full border-gray-400 rounded-md px-2 py-1 text-center cursor-pointer" />
                    {showOpeningPicker && (
                        <div className="time-picker-overlay">
                            <div className="time-picker-dropdown">
                                <input type="time" className="w-full h-10 px-2 py-1" placeholder='open time' />
                            </div>
                        </div>
                    )}
                </div>

                <label htmlFor="closing" className='sr-only'>Closing Time</label>
                <div className="relative">
                    <input type="text" id="closing" placeholder="Close Time" readOnly onClick={toggleClosingPicker} className="border-1 h-16 w-full border-gray-400 rounded-md px-2 py-1 text-center cursor-pointer" />
                    {showClosingPicker && (
                        <div className="time-picker-overlay">
                            <div className="time-picker-dropdown">
                                <input type="time" className="w-full h-10 px-2 py-1" placeholder='close time' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimePicker;
