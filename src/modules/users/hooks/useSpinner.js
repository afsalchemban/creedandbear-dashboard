import { useState } from "react";
export const useSpinner = () => {
    /* For Spinner */

    const [showSpinner, setShowSpinner] = useState(false);
    //show spinner
    const startShowSpinner = () => {
        setShowSpinner(true);
    };
    //hide spinner
    const stopShowSpinner = () => {
        setShowSpinner(false);
    };

    return {showSpinner, startShowSpinner, stopShowSpinner};

    /* ------END---- */
}