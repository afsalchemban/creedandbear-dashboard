import { TotalUserWidget } from "./TotalUserWidget";

export const WidgetsRow = (props) => {
    return (
        <div className="py-6 grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-4">
            <TotalUserWidget total={props.total} />
        </div>
    );
}