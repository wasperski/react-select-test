import React from 'react';
import { useState } from 'react';
import HourSelect from "./HourSelect";

const App = () => {
  const value = '9:30'
  const [hourSelected, setHourSelected] = useState({})

  const handleHourChange = (selectedOption) => {
    setHourSelected(selectedOption)
    console.log('selectedOption', selectedOption)
  }

  console.log('App RENDER')

  return (
    <HourSelect
      value={value}
      onChange={handleHourChange}
    />
  );
}

export default App;
