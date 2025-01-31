import React from 'react';

interface OpeningDatesProps {
    checkedDays: string[];
    setCheckedDays: React.Dispatch<React.SetStateAction<string[]>>;
}

const OpeningDates: React.FC<OpeningDatesProps> = ({ checkedDays, setCheckedDays }) => {
    // Function to handle checkbox change
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id } = event.target;
        if (event.target.checked) {
            // If the checkbox is checked, add the day to the checkedDays array
            setCheckedDays(prevState => [...prevState, id]);
        } else {
            // If the checkbox is unchecked, remove the day from the checkedDays array
            setCheckedDays(prevState => prevState.filter(day => day !== id));
        }
        console.log(checkedDays);
        
    };

    const selectAllfunction = () => {
        const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        setCheckedDays(allDays);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            (checkbox as HTMLInputElement).checked = true;
        });
    }

    return (
        <>
            <div className="bg-white rounded-3xl mx-4 my-6 px-5 ">
                
                <div className="flex justify-between">
                   
                    <div className="px-5 pt-5  pb-3 font-semibold text-lg">
                        <h2>Working days</h2>
                    </div>
                    
                    <div className="px-5 pt-5 pb-3 font-semibold text-md text-orange-500 cursor-pointer" onClick={selectAllfunction} >Select All</div>
                
                </div>
                <div className="flex gap-28 my-4  pb-5 ml-5">
                    <div >
                    <div className="flex items-center mb-4">
                         <input id="Monday" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-white-100 border-gray-200 rounded focus:ring-0 " onChange={handleCheckboxChange} />
                         <label htmlFor="Monday" className="ms-2 text-sm font-medium text-black-200 dark:text-black-200">Monday</label>
                        
                    </div>
                    <div className="flex items-center mb-4">
                         <input id="Tuesday" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-white-100 border-gray-200 rounded focus:ring-0 " onChange={handleCheckboxChange}/>
                         <label htmlFor="Tuesday" className="ms-2 text-sm font-medium text-black-200 dark:text-black-200">Tuesday</label>
                        
                    </div>
                    <div className="flex items-center mb-4">
                         <input id="Wednesday" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-white-100 border-gray-200 rounded focus:ring-0 " onChange={handleCheckboxChange} />
                         <label htmlFor="Wednesday" className="ms-2 text-sm font-medium text-black-200 dark:text-black-200">Wednesday</label>
                        
                    </div>
                    <div className="flex items-center mb-4">
                         <input id="Thursday" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-white-100 border-gray-200 rounded focus:ring-0 "  onChange={handleCheckboxChange}/>
                         <label htmlFor="Thursday" className="ms-2 text-sm font-medium text-black-200 dark:text-black-200">Thursday</label>
                        
                    </div>
                    </div>
                    <div>
                    <div className="flex items-center mb-4">
                         <input id="Friday" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-white-100 border-gray-200 rounded focus:ring-0 " onChange={handleCheckboxChange}/>
                         <label htmlFor="Friday" className="ms-2 text-sm font-medium text-black-200 dark:text-black-200">Friday</label>
                        
                    </div>
                    <div className="flex items-center mb-4">
                         <input id="Saturday" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-white-100 border-gray-200 rounded focus:ring-0 " onChange={handleCheckboxChange} />
                         <label htmlFor="Saturday" className="ms-2 text-sm font-medium text-black-200 dark:text-black-200">Saturday</label>
                        
                    </div>
                    <div className="flex items-center mb-4">
                         <input id="Sunday" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-white-100 border-gray-200 rounded focus:ring-0 " onChange={handleCheckboxChange}/>
                         <label htmlFor="Sunday" className="ms-2 text-sm font-medium text-black-200 dark:text-black-200">Sunday</label>
                        
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default OpeningDates;