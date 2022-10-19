import { render, screen, fireEvent } from "@testing-library/react"
import { DeleteSelected } from "./DeleteSelected"

test("selected box should be hide if there is no users checkbox selected",()=>{
    render(<DeleteSelected />)
    const element = screen.queryByTestId('count-selected');
    expect(element).toBeFalsy()
})


test("selected box should show if there is users checkbox selected",()=>{
    render(<DeleteSelected count={2} />)
    const element = screen.getByTestId('count-selected');
    expect(element).toBeTruthy()
})

test("function called when clicked on delete button", () => {
    let props = {
        onClick: jest.fn(),
        count:2
    };
    render(<DeleteSelected {...props} />);
    const buttonEL = screen.getByText(/Delete/i)
    fireEvent.click(buttonEL);
    expect(props.onClick).toHaveBeenCalled();
})