import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { UserContext } from "../../context/UserContext";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

const customRender = (ui,  providerProps ) => {
    return render(
        <UserContext.Provider value={providerProps}>{ui}</UserContext.Provider>
    )
}

test("email input should be rendered", () => {
    const providerProps = [
        null,
        jest.fn()
    ]
    customRender(<LoginPage />, providerProps);
    const usernameInputEl = screen.getByPlaceholderText(/Email/i);
    expect(usernameInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
    const providerProps = [
        null,
        jest.fn()
    ]
    customRender(<LoginPage />, providerProps);
    const usernameInputEl = screen.getByPlaceholderText(/Password/i);
    expect(usernameInputEl).toBeInTheDocument();
});

