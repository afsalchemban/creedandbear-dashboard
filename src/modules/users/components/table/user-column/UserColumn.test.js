import { render, screen, fireEvent } from "@testing-library/react"
import { UserColumn } from "./UserColumn";

test("user column should include the icon", () => {
    let props = {
        user: {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        }
    };
    render(<UserColumn {...props} />);
    const avatar = screen.getByAltText(/avatar/i);
    expect(avatar).toBeInTheDocument();
})

test("user column should contain first name and last name", () => {
    let props = {
        user: {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        }
    };
    render(<UserColumn {...props} />);
    const avatar = screen.getByText(/Janet Weaver/i);
    expect(avatar).toBeInTheDocument();
})
