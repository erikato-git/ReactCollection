import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from "./Counter";
import { userEvent } from "@testing-library/user-event";


// args: description, anonymouse function with the test
test("Init value should be 0", () => {
    render (<Counter />);
    const counterEl = screen.getByText(0);      // 'screen' gives the access the the DOM in the test
    expect(counterEl).toBeInTheDocument(counterEl);
})

test("Get counter calue by id", () => {
    render (<Counter />);
    const counterEl = screen.getByTestId("cnt");        // gets DOM by 'data-testid' in the component
    expect(counterEl).toBeInTheDocument(counterEl);
})

test("On click - by fireEvent, counter should increment by 1", () => {
    // Arrange    
    render( <Counter />)
    const btnEl = screen.getByTestId("btn");
    const counterEl = screen.getByTestId("cnt");
    const preCounterVal = counterEl.textContent;

    // Act
    fireEvent.click(btnEl);

    // Assert
    expect(preCounterVal).toBe("0")
    expect(counterEl.textContent).toBe("1");
    expect(counterEl.textContent).not.toBe("2");    // just for showin .not.toBe()
    expect(counterEl.textContent).not.toBeNull();   // -||-
})

// TODO - doesn't work - find another example
// userEvent is a way to test for a lot of events simultaneously fired along with each other: 
// 1. mouserOver(), 2. mouseMove(), 3. mouseDown(), 4. focus(), 5. mouseUp(), 6. click() 


test("Entering value in input works",()=>{
    render(<Counter/>);
    const inputEl = screen.getByTestId("input");
    fireEvent.change(inputEl,{
        target:{
            value:11
        }
    })
    expect(inputEl.value).toBe("11");
})


// Snapshot tests
// The snapshot of the component 'Counter' is stored i folder '__snapshots__' and if I make a change in the component the test will fail 

// test("Snapshot test",() => {
//     expect(render(<Counter/>)).toMatchSnapshot();
// })





