import { render, screen, fireEvent } from "@testing-library/react"
import { TotalUserWidget } from "./TotalUserWidget";


test("function called when clicked button", () => {
    let props = {
        total: 20
    };
    render(<TotalUserWidget {...props} />);
    const element = screen.getByText(/20/i)
    expect(element).toBeInTheDocument();
})