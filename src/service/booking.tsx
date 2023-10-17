import { TripDetails } from '../Model/TripDetails';
const saveTripDetails = (tripDetails: TripDetails) => {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  bookings.push(tripDetails);
  localStorage.setItem('bookings', JSON.stringify(bookings));
};

export { saveTripDetails };
