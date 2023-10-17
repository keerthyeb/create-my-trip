const isValid = (name: string, emailId: string, phoneNumber: string) => {
  const validEmailIdRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileNumberRegex = /^(?:\+\d{1,3}\s?)?(?:\(\d{1,4}\))?(?:[-.\s]?\d{1,4})+$/;
  return name.length == 0 || !validEmailIdRegex.test(emailId) || !mobileNumberRegex.test(phoneNumber);
};

export { isValid };
