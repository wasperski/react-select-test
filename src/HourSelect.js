import React from 'react';
import Select from 'react-select';

const HourSelect = ({defaultHourValue, onChange}) => {
  const hourOptions = [
    { value: '7:00', label: '7:00' },
    { value: '7:15', label: '7:15' },
    { value: '7:30', label: '7:30' },
    { value: '7:45', label: '7:45' },
    { value: '8:00', label: '8:00' },
    { value: '8:15', label: '8:15' },
    { value: '8:30', label: '8:30' },
    { value: '8:45', label: '8:45' },
    { value: '9:00', label: '9:00' },
    { value: '9:15', label: '9:15' },
    { value: '9:30', label: '9:30' },
    { value: '9:45', label: '9:45' }
  ]

  console.log('HourSelect RENDER')

  return (
    <Select
      options={hourOptions}
      onChange={onChange}
      defaultValue={defaultHourValue}
    />
  );
}

export default HourSelect;
