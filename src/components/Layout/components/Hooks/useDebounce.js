import React, { useEffect, useState } from "react";

const useDebounce = (value, timeDelay) => {
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(
        () => {
        
            const handle = setTimeout(() => setCurrentValue(value), timeDelay);
            return () => clearTimeout(handle);

        }, [value]
    );
        // console.log(currentValue)
    return currentValue;
}

export { useDebounce };