import { render, screen, fireEvent } from "@testing-library/react"
import { UserActions } from "./UserActions";

test("delete click should work", () => {
    let props = {
        onDeleteClick: jest.fn()
    };
    render(<UserActions {...props}/>);
    const usernameInputEl = screen.getByTestId('delete-element');
    fireEvent.click(usernameInputEl);
    expect(props.onDeleteClick).toHaveBeenCalled();
})

test("edit click should work", () => {
    let props = {
        onEditClick: jest.fn(),
        user:{id:1}
    };
    render(<UserActions {...props}/>);
    const usernameInputEl = screen.getByTestId('edit-element');
    fireEvent.click(usernameInputEl);
    expect(props.onEditClick).toHaveBeenCalled();
})