import more from '../../../../assets/icons/more.png'
export const TotalUserWidget = (props) => {
    return (
        <div className="rounded-md border p-6">
            <div className="inline-flex items-center justify-between w-full">
                <div className="text-sm font-medium text-gray-600">Total Users</div>
                <img src={more} alt="More" className="h-3 w-3" />
            </div>
            <div className="inline-flex items-center justify-between w-full">
                <div data-testid="total-users" className="font-bold text-2xl">{props.total}</div>
                <div></div>
            </div>
        </div>
    );
}