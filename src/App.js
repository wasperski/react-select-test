import React from 'react';
import { useState } from 'react';
import Select from 'react-select';

function App() {
  const [selectedOption, setSelectedOption] = useState({ value: '17:00', label: '17:00' })
  const hourOptions = () => {
    const options = []
    // 7:00 ... 23:45
    for (let h = 7; h <= 23; h++) {
      // TODO steps
      for (const m of ['00', '15', '30', '45']) {
        const hour = `${h}:${m}`
        options.push({ value: hour, label: hour })
      }
    }
    return options
  }
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }
  return (
    <Select
      value={selectedOption}
      options={hourOptions()}
      onChange={handleChange}
    />
  );
}

export default App;
