import React from 'react';

function EditStep(props) {  

  const id = props.stepId;

  let buttonText = "ACTIVATE!";
  if (props.currentStep.active) {
    buttonText = "DEACTIVATE!"
  }

  return (
    <div className="editBox">
      <p>EDIT STEP: {id.toUpperCase()}</p>
      <p>NOTE<input type="range" min="1" max="7" defaultValue="1" className="slider" id="noteSlider"/></p>
      <button onClick={() => props.toggleStep(id)}>{buttonText}</button>
      <button onClick={() => props.editStep(id)}>CLOSE</button>
    </div>      
  )
}

export default EditStep;