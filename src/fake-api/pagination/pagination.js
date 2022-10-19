/* Function to paginate 
if total is given specifically the total should be it. This is because when filtering we need to show total users instead of filtered users count
*/
export const paginate = (users,currentPage,total=null) => {



    const totalUsers = users.length
    const pageSize = 6

    /* Calculate total pages */
    let totalPages = Math.ceil(totalUsers / pageSize);

    /* Calculate start index and end index */
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalUsers - 1)+1;
    
    /* Get current data */
    let currentPageData = users.slice(startIndex,endIndex);
    return {
        "page": currentPage,
        "per_page": pageSize,
        "total": (total===null)?totalUsers:total,
        "total_pages": totalPages,
        "data" : currentPageData
    }
}