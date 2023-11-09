import { useContext, useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { NewDatesContext } from '../contexts/Context';
export default function BasicDatePicker() {

  const { dateValue } = useContext(NewDatesContext)

  return (
    <>

      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DatePicker format="DD-MM-YYYY" label="Basic date picker" onChange={dateValue} />

      </LocalizationProvider>

    </>
  );
}