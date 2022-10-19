import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./Button"
import save from '../../../assets/icons/save.png';

test("Button renders text correctly", () => {
    render(<Button>Test</Button>);
    const buttonEL = screen.getByText(/Test/i)
    expect(buttonEL).toBeInTheDocument();
})

test("Button renders icon correctly", () => {
    render(<Button icon={save}>Test</Button>);
    const image = screen.getByRole('img');
    expect(image.src).toContain(save);
})

test("function called when clicked", () => {
    let props = {
        onClick: jest.fn() 
    };
    render(<Button {...props}>Test</Button>);
    const buttonEL = screen.getByText(/Test/i)
    fireEvent.click(buttonEL);
    expect(props.onClick).toHaveBeenCalled();
})
