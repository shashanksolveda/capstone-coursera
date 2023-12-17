import React, { useEffect, useState } from 'react'
import BookingForm from './BookingForm'
import ConfirmationModal from './ConfirmationModal';

function Booking() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAvailableTimes();
  },[]);

  const getAvailableTimes = () => {
      const timeSlots = [];
      const numberOfSlots = 9;
      for (let i = 0; i < numberOfSlots; i++) {
          const hours = Math.floor(Math.random() * (23 - 11 + 1) + 11);
          const minutes = Math.floor(Math.random() * 2) * 30; 

          const formattedHours = hours.toString().padStart(2, '0');
          const formattedMinutes = minutes.toString().padStart(2, '0');

          const timeSlot = `${formattedHours}:${formattedMinutes}`;
          timeSlots.push(timeSlot);
      }
      timeSlots.sort((a, b) => a.localeCompare(b));
      setAvailableTimes(timeSlots);
    
  }

  const submit = (data) => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const primaryClickHandler = () => {
    handleCloseModal();
    window.location.assign('/');
  }

  return (
    <>
        <ConfirmationModal 
            show={showModal}
            handleClose={handleCloseModal}
            primaryClickHandler={primaryClickHandler}
        />
        <div className='d-flex justify-content-center m-3'>
            <BookingForm 
                availableTimes={availableTimes}
                getAvailableTimes={getAvailableTimes}
                submit={submit}
            />
        </div>
    </>
  )
}

export default Booking