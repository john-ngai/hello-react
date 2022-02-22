/*
Requirements:
  1. Return a <button> from the <Button> component.
  2. Put a <Button> inside the Application component between the <main> tags above the <h1>. Pass the <Button> the text "Reset".
  3. Add an onClick event handler to the button element that triggers the reset function.
  4. Add state to <Application> using a variable called name and a function to setName. Give name a default value of your name. Inside the <h1>, replace the word "React" with the name variable.
  5. Create an <input> tag inside of the <main> tags above the <Button>. Give the <input> tag a placeholder attribute of "Type your name"
  6. Replace your name with an empty string "" as the default value in the useState hook. Alter the <input> tag to give it an attribute that will make the text update immediately with whatever a user types into the input field.
  7. Write one line of code in the reset function that empties the input field.
  8. Write conditional logic using short circuit evaluation that renders the <h1> with "Hello {name}" only if name has a value. If there is no value for name, don't render anything.
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const {reset} = props;
  return (
    <button onClick={reset}>Reset</button>
  );
};

const Application = () => {
  const [name, setName] = useState('');
  const reset = () => {
    console.log("reset");
    setName('');
  };
  const textInput = event => setName(event.target.value);
  return (
    <main>
      <input value={name} onChange={textInput} placeholder="Type your name"></input>
      <Button reset={reset}/>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
