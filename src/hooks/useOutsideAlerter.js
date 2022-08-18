import { useEffect, useState } from 'react';
/**
* Hook that alerts clicks outside of the passed ref
*/
function useOutsideAlerter (ref, initialState) {
    const [values, setValues] = useState(initialState);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                setValues(!values)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, initialState]);
}

export default useOutsideAlerter;