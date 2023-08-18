// Users.test.js

import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import Users from "./Users";


test("", async () => {
    render(<Users />)
    // Because getByRole tries to execute immediately I will use findAllByRole instead
    // const listElements = screen.getByRole('listitem');  // getByRole: checks the item-type (eg. input, button, listitem)
    const listElements = await screen.findAllByRole('listitem');    // asynchronous methods for testing: findAllByRole(), findByRole(), findByTestId()
    expect(listElements).not.toHaveLength(0);   // if there's a listitem the list is succesfully retrieved and length will not be 0
})





