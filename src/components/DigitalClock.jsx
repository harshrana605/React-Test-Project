import { useState, useEffect } from 'react';

function DigitalClock() {
    // Initialize the state with the current date and time
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Set up an interval to update the time every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []); // No dependencies, runs once on component mount

    // Helper function to format the time
    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        // Convert 24-hour format to 12-hour format
        hours = hours % 12 || 12;
        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiem}`;
    }

    // Helper function to pad single-digit numbers with a leading zero
    function padZero(number) {
        return (number < 10 ? '0' : '') + number;
    }

    // Render the formatted time
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
