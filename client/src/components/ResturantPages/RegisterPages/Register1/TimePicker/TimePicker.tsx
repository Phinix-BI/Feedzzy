import React, { useState, useEffect, useRef } from 'react';

const TimePicker: React.FC = () => {
    const [showOpeningPicker, setShowOpeningPicker] = useState(false);
    const [showClosingPicker, setShowClosingPicker] = useState(false);
    const [openingTime, setOpeningTime] = useState('Open Time');
    const [closingTime, setClosingTime] = useState('Close Time');
    const [openingAmPm, setOpeningAmPm] = useState('');
    const [closingAmPm, setClosingAmPm] = useState('');
    const openingRef = useRef<HTMLDivElement>(null);
    const closingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                openingRef.current &&
                !openingRef.current.contains(event.target as Node) &&
                closingRef.current &&
                !closingRef.current.contains(event.target as Node)
            ) {
                setShowOpeningPicker(false);
                setShowClosingPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleOpeningPicker = () => {
        setShowOpeningPicker(!showOpeningPicker);
        setShowClosingPicker(false);
    };

    const toggleClosingPicker = () => {
        setShowClosingPicker(!showClosingPicker);
        setShowOpeningPicker(false);
    };

    const handleOpeningTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpeningTime(event.target.value);
        setShowOpeningPicker(false);
    };

    const handleClosingTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setClosingTime(event.target.value);
        setShowClosingPicker(false);
    };

    const handleOpeningAmPmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpeningAmPm(event.target.value);
    };

    const handleClosingAmPmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setClosingAmPm(event.target.value);
    };

    return (
        <div className='time-picker mt-10 mx-auto pb-8 max-w-md'>
            <div className='flex flex-row items-center justify-between gap-5'>
                <div className="relative" ref={openingRef}>
                    <input type="text" id="opening" placeholder="Open Time" value={`${openingTime} ${openingAmPm}`} readOnly={!showOpeningPicker} onClick={toggleOpeningPicker} className={`border-1 h-16 w-full border-gray-400 rounded-md px-2 py-1 text-center cursor-pointer ${showOpeningPicker ? 'sr-only' : ''}`} />
                    {showOpeningPicker && (
                        <div className="time-picker-overlay">
                            <div className="time-picker-dropdown">
                                <input type="time" title='openTime' className="w-full h-10 px-2 py-1" value={openingTime} onChange={handleOpeningTimeChange} onClick={(e) => e.stopPropagation()} />
                                <select title="timeAmPM" className="sr-only" value={openingAmPm} onChange={handleOpeningAmPmChange}>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative" ref={closingRef}>
                    <input type="text" id="closing" placeholder="Close Time" value={`${closingTime} ${closingAmPm}`} readOnly={!showClosingPicker} onClick={toggleClosingPicker} className={`border-1 h-16 w-full border-gray-400 rounded-md px-2 py-1 text-center cursor-pointer ${showClosingPicker ? 'sr-only' : ''}`} />
                    {showClosingPicker && (
                        <div className="time-picker-overlay">
                            <div className="time-picker-dropdown">
                                <input type="time" title='CloseTime' className="w-full h-10 px-2 py-1" value={closingTime} onChange={handleClosingTimeChange} onClick={(e) => e.stopPropagation()} />
                                <select title="timeAmPM" value={closingAmPm} className='sr-only' onChange={handleClosingAmPmChange}>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimePicker;
