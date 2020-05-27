import React from 'react';
import { useState } from 'react';
import HourSelect from "./HourSelect";

const App = () => {
  const defaultHourValue = { value: '9:45', label: '9:45' }
  const [hourSelected, setHourSelected] = useState({})

  const handleHourChange = (selectedOption) => {
    setHourSelected(selectedOption)
    console.log('selectedOption', selectedOption)
  }

  console.log('App RENDER')

  return (
    <HourSelect
      defaultHourValue={defaultHourValue}
      onChange={handleHourChange}
    />
  );
}

export default App;
