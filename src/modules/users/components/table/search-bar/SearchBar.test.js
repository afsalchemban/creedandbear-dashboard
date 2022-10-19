import { render, screen, fireEvent } from "@testing-library/react"
import { SearchBar } from "./SearchBar";

test("function called when clicked on delete button", () => {
    let props = {
        onChange: jest.fn()
    };
    render(<SearchBar {...props}/>);
    const usernameInputEl = screen.getByPlaceholderText(/Search.../i);
    const testValue = "test";

    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    expect(usernameInputEl.value).toBe(testValue);
})