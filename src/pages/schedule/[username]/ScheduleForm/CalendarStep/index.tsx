import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimerHeader,
  TimerPicker,
  TimerPickerItem,
  TimerPickerList,
} from './styles'

export function CalendarStep() {
  const IsDateSelected = false

  return (
    <Container isTimePickerOpen={IsDateSelected}>
      <Calendar />
      {IsDateSelected && (
        <TimerPicker>
          <TimerHeader>
            Terca-feira <span>20 de setembro</span>
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
