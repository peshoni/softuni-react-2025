import { test, it, expect, assert, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, getByRole } from "@testing-library/react";
import Log from './Log';
import type { Repair_RequestFragment, Requests_Logs, Users } from '../../../../graphql/generated';
// import { create } from "framer-motion/m";
// import { createRoot } from "react-dom/client";
// import { act } from "react";

afterEach(() => {
    // runs before each test
    cleanup();
    document.body.innerHTML = '';
});

// Simple unit testing examples
// console.log('My first test');
// test('adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// });

// it('adds 2 + 3 to equal 5', () => {
//     expect(2 + 3).toBe(5);
//     assert.equal(2 + 3, 5);
// });

// it('should throw error when dividing by zero', () => {
//     expect(() => divide(4, 0)).toThrow('Cannot divide by zero');
// });

// function divide(a: number, b: number) {
//     if (b === 0) {
//         throw new Error('Cannot divide by zero');
//     }
//     return a / b;
// }

it("should have heading", async () => {
    // create an empty element to mount the app
    // // Attach to DOM
    // document.body.appendChild(container); 
    // await act(async () => {
    //     const root = createRoot(container);
    //     root.render(<App />);
    // });


    render(<Log log={{
        user: {
            first_name: 'Test',
            id: '1',
            last_name: 'User',
            email: 'aaa@test.bg',
            user_role: {
                id: '1',
                name: 'User'
            }
        } as Users
    } as Requests_Logs} isFromCurrentUser={false} />);
    // screen.debug();
    const a = screen.getByAltText('Test');
    //  const test = document.getElementById("test");

    // const provider = document.getElementsByTagName('ConfirmationDialogProvider');
    // console.log(provider)

    expect(a).not.toBeNull();
});
