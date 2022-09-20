import { React, useCallback, useState } from 'react';
import DemoOutput from './compoents/Demo/DemoOutput';
import Button from './compoents/UI/Button/Button';

function App() {

  const [isShown, updateIsShown] = useState(false)

  // const handleOnToggle = () => updateIsShown(prev => !prev)

  const handleOnToggle = useCallback(
    () => updateIsShown(prev => !prev)
    , [])

  console.log('Render Apps.js')

  return (
    <div style={{
      textAlign: 'center'
    }} className="App">
      <h1>Hi there!</h1>
      <DemoOutput show={isShown}></DemoOutput>
      {/* <button onClick={handleOnToggle}>Toogle Paragraph</button> */}
      <Button onClick={handleOnToggle}>Toogle Paragraph</Button>
    </div>
  );
}

export default App;
