import { render, screen, fireEvent } from "@testing-library/react"
import { AddUserButton } from "./AddUserButton";


test("function called when clicked button", () => {
    let props = {
        onClick: jest.fn()
    };
    render(<AddUserButton {...props} />);
    const buttonEL = screen.getByText(/Add user/i)
    fireEvent.click(buttonEL);
    expect(props.onClick).toHaveBeenCalled();
})