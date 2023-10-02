import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimerHeader,
  TimerPicker,
  TimerPickerItem,
  TimerPickerList,
} from './styles'
import { useState } from 'react'
import dayjs from 'dayjs'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const IsDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describeDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  return (
    <Container isTimePickerOpen={IsDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {IsDateSelected && (
        <TimerPicker>
          <TimerHeader>
            {weekDay} <span>{describeDate}</span>
          </TimerHeader>

          <TimerPickerList>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:00h</TimerPickerItem>
          </TimerPickerList>
        </TimerPicker>
      )}
    </Container>
  )
}
