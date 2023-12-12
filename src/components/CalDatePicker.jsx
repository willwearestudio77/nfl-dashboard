import { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { NewDatesContext } from '../contexts/Context';
export default function BasicDatePicker() {

  const { dateValue } = useContext(NewDatesContext)
  const todaysDate = dayjs()

  return (
    <>

      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DatePicker views={['year', 'month', 'day']} default={todaysDate} format="DD-MM-YYYY" label="Choose Date" onChange={dateValue} />

      </LocalizationProvider>

    </>
  );
}