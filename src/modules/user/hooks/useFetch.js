import { useEffect, useState } from "react";
import { getUser } from '../../../fake-api/api'

export const useFetch = (id) => {
    /* Get and Paginate Users */

    const [user, setUser] = useState(null); // store users

    const fetchUser = async (id) => {
        let result = await getUser(id);
        setUser(result);
    };

    // fetch users when page changes and at initial time
    useEffect(() => {
        fetchUser(parseInt(id));
    }, [id]);


    return { user, fetchUser };

    /* ------END---- */
}