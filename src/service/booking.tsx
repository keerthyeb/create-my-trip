import { TripDetails } from '../Model/TripDetails';
const saveTripDetails = (tripDetails: TripDetails) => {
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  bookings.push(tripDetails);
  localStorage.setItem('bookings', JSON.stringify(bookings));
};
const validateCredentials = (username: string, password: string) => {
  return username === 'admin' && password == '1234';
}

function getTripDetails() {
  return localStorage.getItem('bookings') || '[]';
}

export { saveTripDetails, validateCredentials, getTripDetails};
