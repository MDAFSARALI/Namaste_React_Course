import React from 'react';
import ReactDOM from 'react-dom/client';

/*
const jsxHeading = (
  <h1 className="heading">  Laying the Foundation</h1>
);
*/
const Heading=()=>(
  <h1 className="heading"> This is heading 1 </h1>
);
const Heading2=()=>(
   <div className="heading2">
    <Heading/>
    <Heading></Heading>
    {Heading()} 
    {/* This is a function call of Heading component */}
   <h1>This is heading 2</h1>
   </div>
);
const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(jsxHeading);
root.render(<Heading2/>);
