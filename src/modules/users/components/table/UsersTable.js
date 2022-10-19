import { PaginationButton } from "./pagination-button/PaginationButton";
import { UserRow } from "./user-row/UserRow";
import { UserTableHeader } from "./user-table-header/UserTableHeader";
import { useEffect, useState } from "react";
import { SearchBar } from "./search-bar/SearchBar";
import { DeleteSelected } from "./delete-selected/DeleteSelected";

export const UsersTable = (props) => {
    
    
    const handleSelectAllCheckBox = (e) => {
        const isChecked = e.target.checked;
        props.onSelectAll(isChecked);
    }
    return (
        <div className="overflow-scroll">
            <SearchBar onChange={props.onSearch} />
            <DeleteSelected count={props.selectedCount} onClick={props.onMultipleDeleteClick} />
            <table className="table-auto w-full text-left rounded-lg border-spacing-0 border border-separate overflow-hidden">
                <thead>
                    <UserTableHeader selectAll={handleSelectAllCheckBox}/>
                </thead>
                <tbody>
                    {
                        props.users!=null &&
                        props.users.map((user) => (
                            <UserRow key={user.id} user={user} onChangeCheckBox={props.onCheckBoxSelect} onDeleteClick={props.onDeleteClick} onEditClick={props.onEditClick}/>
                        ))
                    
                    }
                </tbody>
                <tfoot>
                    <tr>
                    <td colSpan="5">
                        <div className="flex px-6 py-2">
                            <div className="flex-none w-20">
                                <PaginationButton onClick={props.onPreviousClick}>Previous</PaginationButton>
                            </div>
                            <div className="grow text-center text-xs py-1">
                                Page {props.paginate.page} 0f {props.paginate.total_pages}
                            </div>
                            <div className="flex-none w-20 text-right">
                                <PaginationButton onClick={props.onNextClick}>Next</PaginationButton>
                            </div>
                        </div>
                    </td>
                    </tr>
                </tfoot>
            </table>
            <div>

            </div>
        </div>
    );
}