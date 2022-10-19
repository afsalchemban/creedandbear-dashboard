import { useEffect, useState } from "react";
import { getUsers } from '../../../fake-api/api'

export const useTable = ({ startShowSpinner, stopShowSpinner }) => {
    /* Get and Paginate Users */

    const [paginate, setPaginate] = useState(null); // store paginate details
    const [users, setUsers] = useState(null); // store users
    const [page, setPage] = useState(1); // store current page


    // fetch users when page changes and at initial time
    useEffect(() => {
        const fetchUsers = async () => {
            startShowSpinner();
            let result = await getUsers(page);
            setPaginate(result);

            // store users with default value selected as false for checkbox
            const users = result.data.map(object => {
                return { ...object, selected: false }
            });

            setUsers(users);
            stopShowSpinner();
        };
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    //refetch when edit and delete
    const refetchUsers = async () => {
        startShowSpinner();
        let result = await getUsers(page===0?1:page);
        setPaginate(result);
        // store users with default value selected as false for checkbox
        const users = result.data.map(object => {
            return { ...object, selected: false }
        });
        setUsers(users);
        stopShowSpinner();
        if(page>result.total_pages){
            setPage(prev=>prev-1)
        }
    }

    //pagination next/previous button
    const handleNextButtonClick = (e) => {
        if (!(page + 1 > paginate.total_pages)) {
            setPage((prev) => prev + 1);
        }
    }
    const handlePreviousButtonClick = (e) => {
        if (page - 1 > 0) {
            setPage((prev) => prev - 1);
        }
    }

    //checkbox selecting
    const handleCheckBoxChange = (id, isChecked) => {
        const newState = users.map(obj => {
            if (obj.id === id) {
                return { ...obj, selected: isChecked };
            }
            return obj;
        });
        setUsers(newState);
    }
    //checkbox select all
    const handleSelectAll = (isChecked) => {
        const newState = users.map(object => {
            return { ...object, selected: isChecked }
        });
        setUsers(newState);
    }

    //searchbar`
    const handleSearchBar = async (query) => {
        let result = await getUsers(page, query);
        setPaginate(result);
        const users = result.data.map(object => {
            return { ...object, selected: false }
        });
        setUsers(users);
    }

    return { paginate, users, page, setPaginate, setUsers, setPage, refetchUsers, handleNextButtonClick, handlePreviousButtonClick, handleCheckBoxChange, handleSelectAll, handleSearchBar };

    /* ------END---- */
}