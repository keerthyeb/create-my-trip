import { getTripDetails, saveTripDetails, validateCredentials } from "./booking";

describe('Admin Functions', () => {
  const testTripDetails = {
    destinations: ['Paris', 'New York'],
    interests: ['Sightseeing', 'Adventure'],
    travellersCount: 2,
    budget: 5000,
    name: 'John Doe',
    emailId: 'johndoe@example.com',
    phoneNumber: '1234567890',
    duration: '7',
    date: '2023-10-20',
    stageOfTrip: 'Planning'
  };

  it('should save trip details to local storage', () => {
    saveTripDetails(testTripDetails);
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    expect(savedBookings.length).toBe(1);
    expect(savedBookings[0].name).toBe('John Doe');
  });

  it('should validate admin credentials', () => {
    expect(validateCredentials('admin', '1234')).toBe(true);
    expect(validateCredentials('user', '5678')).toBe(false);
  });

  it('should get trip details from local storage', () => {
    localStorage.setItem('bookings', JSON.stringify([testTripDetails]));
    const tripDetails = getTripDetails();
    expect(tripDetails.length).toBeGreaterThan(0);
    expect(tripDetails).toContain('John Doe');
  });
});