import { isValid } from './helper';

describe('Validation Function', () => {
  it('should return true for valid inputs', () => {
    const validName = 'John Doe';
    const validEmail = 'johndoe@example.com';
    const validPhoneNumber = '1234567890';
    expect(isValid(validName, validEmail, validPhoneNumber)).toBe(false);
  });

  it('should return false for invalid email format', () => {
    const invalidName = 'Jane Doe';
    const invalidEmail = 'janedoeexample.com';
    const validPhoneNumber = '9876543210';
    expect(isValid(invalidName, invalidEmail, validPhoneNumber)).toBe(true);
  });

  it('should return false for invalid phone number format', () => {
    const validName = 'Michael Scott';
    const validEmail = 'michaelscott@example.com';
    const invalidPhoneNumber = '12345';
    expect(isValid(validName, validEmail, invalidPhoneNumber)).toBe(false);
  });

  it('should return true if name is empty', () => {
    const emptyName = '';
    const validEmail = 'emptyname@example.com';
    const validPhoneNumber = '9876543210';
    expect(isValid(emptyName, validEmail, validPhoneNumber)).toBe(true);
  });
});
