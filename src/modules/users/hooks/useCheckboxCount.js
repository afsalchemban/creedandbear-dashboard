import { useState, useEffect } from "react";
export const useCheckboxCount = (users) => {
    /* For calculate how many users checkbox selected */
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedUsers, setSelectedUsers] = useState([]);
    useEffect(() => {
        if (users === null) {
            setSelectedCount(0);
            return;
        }
        const selected = users.filter(user => {
            return user.selected;
        }).map(user => user.id)
        setSelectedUsers(selected);
        setSelectedCount(selected.length);
    }, [users]);
    return { selectedCount, selectedUsers };
}