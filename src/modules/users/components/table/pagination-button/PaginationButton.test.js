import { render, screen, fireEvent } from "@testing-library/react"
import { PaginationButton } from "./PaginationButton";

test("function called when clicked on delete button", () => {
    let props = {
        onClick: jest.fn()
    };
    render(<PaginationButton {...props} >Test</PaginationButton>);
    const buttonEL = screen.getByText(/Test/i)
    fireEvent.click(buttonEL);
    expect(props.onClick).toHaveBeenCalled();
})