import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the component", ()=> {
    render(<App/>);
});



// it("does the a test 1", ()=> {
//     console.log("doing a test with it!!!");
// })

// describe("positive tests", ()=>{
//     test("does the a test 1", ()=>{
//         console.log("doing a test");
//     });
    
//     test("does the a test 2", ()=>{
//         console.log("doing a test");
//     });
    
//     test("does the a test 3", ()=>{
//         console.log("doing a test");
//     });
// });

// describe("negative tests", ()=>{
//     test("does the a test 1", ()=>{
//         console.log("doing a test");
//     });
    
//     test("does the a test 2", ()=>{
//         console.log("doing a test");
//     });
    
//     test("does the a test 3", ()=>{
//         console.log("doing a test");
//     });
// });

// describe("edge cases", ()=>{
//     test("does the a test 1", ()=>{
//         console.log("doing a test");
//     });
    
//     test("does the a test 2", ()=>{
//         console.log("doing a test");
//     });
    
//     test("does the a test 3", ()=>{
//         console.log("doing a test");
//     });
// });