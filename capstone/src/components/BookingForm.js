import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import bookTable from '../images/bookTable.jpg'

function BookingForm(props) {
  const numberOfGuests = Array.from({ length: 10 }, (_, index) => index + 1);
  const occassion = ["Birthday", "Anniversary"];
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(props.availableTimes[0]);
  const [guestNumber, setGuestNumber] = useState(1);
  const [bookingOccassion, setBookingOccassion] = useState('Birthday');

  useEffect(() => {
    setTime(props.availableTimes[0]);
  }, [props.availableTimes])
  
  const handleDateChange = (e) => {
    setDate(e.target.value);
    props.getAvailableTimes();
  }

  const resetFormFields = () => {
    setDate(new Date().toISOString().split('T')[0]);
    setTime(props.availableTimes[0]);
    setGuestNumber(1);
    setBookingOccassion('Birthday');
  }

  const handleSubmit = () => {
    if (
        date != "" &&
        time != "" &&
        guestNumber != "" &&
        bookingOccassion != ""
    ) {
        const formData = {
            date: date,
            time: time,
            guests: guestNumber,
            occassion: bookingOccassion
        }
        resetFormFields();
        props.submit(formData);
    }
  }

  return (
    <Card
        bg="warning"
        text='dark'
        style={{width: '60rem'}}
        className='mb-2'
    >
        <Card.Img variant='top' src={bookTable}/>
        <Card.Body>
            <Card.Title>Book a table</Card.Title>
            <Card.Text>
                <Form>
                    <Row className='mb-3'>
                        <Form.Group as={Col} sm="12" md='6' controlId='Date'>
                            <Form.Label>Select a Date</Form.Label>
                            <Form.Control 
                                required
                                type='date'
                                placeholder='Select a date'
                                value={date}
                                onChange={handleDateChange}
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </Form.Group>
                        <Form.Group as={Col} sm="12" md="6" controlId='Time'>
                            <Form.Label>Select a time slot</Form.Label>
                            <Form.Select aria-label='time slot' value={time} onChange={e => setTime(e.target.value)}>
                                {props.availableTimes?.map((time) => (
                                    <option value={time}>{time}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} sm="12" md="6" controlId='Time'>
                            <Form.Label>Number of guests</Form.Label>
                            <Form.Select aria-label='number of guests' value={guestNumber} onChange={e => setGuestNumber(e.target.value)}> 
                                {numberOfGuests.map((number) => (
                                    <option value={number}>{number}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>    
                        <Form.Group as={Col} sm="12" md="6" controlId='Time'>
                            <Form.Label>Occassion</Form.Label>
                            <Form.Select aria-label='Occassion' value={bookingOccassion} onChange={e => setBookingOccassion(e.target.value)}>
                                {occassion.map((occassion) => (
                                    <option value={occassion}>{occassion}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>         
                    </Row>
                </Form>
            </Card.Text>
            <Button onClick={handleSubmit}>Submit Reservation</Button>
        </Card.Body>
    </Card>
  )
}

export default BookingForm