import { fireEvent, render, screen } from "@testing-library/react"
import { ProfileBox } from "./ProfileBox"
import { UserContext } from "../../../../context/UserContext"
import { BrowserRouter, MemoryRouter } from 'react-router-dom'


const customRender = (ui, providerProps) => {
    return render(
        <UserContext.Provider value={providerProps}>{ui}</UserContext.Provider>, { wrapper: BrowserRouter }
    )
}

test("profile should show 'You are not logged in !' when no user logged in", () => {
    const providerProps = [
        null,
        jest.fn()
    ]
    customRender(<ProfileBox />, providerProps);
    const element = screen.getByText(/You are not logged in !/i)
    expect(element).toBeTruthy()
})

test("profile should show User details when  user logged in", () => {
    const providerProps = [
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        jest.fn()
    ]
    customRender(<ProfileBox />, providerProps);
    const element = screen.getByText(/Janet Weaver/i)
    expect(element).toBeTruthy()
})
