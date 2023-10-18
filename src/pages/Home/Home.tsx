import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Body from '../../Layout/Body';
import {
  BUDGETOPTIONS,
  HEADER_CONTENT_1,
  HEADER_CONTENT_2,
  INTERESTS,
  PLACES,
  STAGESOPTIONS,
  TRAVELSIZE,
  WHENOPTIONS,
  PLACEHOLDER_1,
  PLACEHOLDER_2,
  PLACEHOLDER_3,
  PLACEHOLDER_4,
  POP_UP_HEADING_1,
  POP_UP_HEADING_2,
  POP_UP_LABEL_1,
  POP_UP_LABEL_2,
  POP_UP_LABEL_3,
  TRIP_DURATION_PLACE_HOLDER,
  TIME_PLACE_HOLDER,
  STAGE_PALCEHOLDER,
  SUBMIT_BUTTON,
  CREATE_MY_TRIP_NOW,
} from '../../utils/constants';
import MultiSelect from '../../component/Dropdown/MultiSelect/MultiSelect';
import Dropdown from '../../component/Dropdown/SingleSelect/Dropdown';
import { TripDetails } from '../../Types/TripDetails';
import {
  modalStyle,
  displayFlex,
  headerDiv,
  headerStyles,
  popUpFieldStyle,
  tripDurationStyle,
  stageOptionStyle,
  submitButton,
} from './HomeStyle';
import { useNavigate } from 'react-router-dom';
import { isValid } from '../../utils/helper';
import { saveTripDetails } from '../../service/booking';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [travellersCount, setTravellersCount] = useState<number>(0);
  const [budget, setBudget] = useState<number>(0);
  const [showPopup, setShowPop] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [stageOfTrip, setStageOfTrip] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value: any = event.target.value;
    setSelectedDestinations(value);
  };

  const click = () => {
    if (isValid(name, emailId, phoneNumber)) {
      alert('Please enter required details properly');
      return;
    }

    const tripDetails: TripDetails = {
      destinations: selectedDestinations,
      interests: selectedInterests,
      travellersCount,
      budget,
      name,
      emailId,
      phoneNumber,
      duration,
      date,
      stageOfTrip,
    };

    saveTripDetails(tripDetails);
    navigate('/thankyou');
  };

  const openPopup = () => {
    setShowPop(true);
  };

  function renderHeaderDiv() {
    return <div style={headerDiv}></div>;
  }

  function renderHeaderContent() {
    return (
      <Container style={headerStyles}>
        <Typography variant="h4">{HEADER_CONTENT_1}</Typography>
        <Typography variant="h5">{HEADER_CONTENT_2}</Typography>
      </Container>
    );
  }

  function OnChangeHandler() {
    return (
      e: React.ChangeEvent<{
        value: unknown;
      }>,
    ) => setSelectedInterests(e.target.value as string[]);
  }

  function renderOptions() {
    return (
      <Container style={displayFlex}>
        <MultiSelect
          options={PLACES}
          placeHolder={PLACEHOLDER_1}
          selectedItems={selectedDestinations}
          onChangeHandler={handleChange}
        />
        <MultiSelect
          options={INTERESTS}
          placeHolder={PLACEHOLDER_2}
          selectedItems={selectedInterests}
          onChangeHandler={OnChangeHandler()}
        />
        <Dropdown
          options={TRAVELSIZE}
          placeHolder={PLACEHOLDER_3}
          onChangeHandler={(
            e: React.ChangeEvent<{
              value: unknown;
            }>,
          ) => setTravellersCount(e.target.value as number)}
        />
        <Dropdown
          options={BUDGETOPTIONS}
          placeHolder={PLACEHOLDER_4}
          onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setBudget(e.target.value as number)}
        />
      </Container>
    );
  }

  function renderModal() {
    return (
      <Modal
        open={showPopup}
        onClose={() => setShowPop(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div>
            <Typography id="modal-title" variant="h6" component="h2">
              {POP_UP_HEADING_1}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {POP_UP_HEADING_2}
            </Typography>
          </div>
          <Container style={popUpFieldStyle}>
            <TextField
              fullWidth
              required
              id="name"
              label={POP_UP_LABEL_1}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Container>
          <Container style={popUpFieldStyle}>
            <TextField
              fullWidth
              required
              id="email"
              label={POP_UP_LABEL_2}
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </Container>
          <Container style={popUpFieldStyle}>
            <TextField
              fullWidth
              required
              id="email"
              label={POP_UP_LABEL_3}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Container>
          <Container style={tripDurationStyle}>
            <TextField placeholder={TRIP_DURATION_PLACE_HOLDER} value={duration} onChange={(e) => setDuration(e.target.value)} />
            <Dropdown
              options={WHENOPTIONS}
              placeHolder={TIME_PLACE_HOLDER}
              onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setDate(e.target.value as string)}
            />
          </Container>
          <Container style={stageOptionStyle}>
            <Dropdown
              options={STAGESOPTIONS}
              placeHolder={STAGE_PALCEHOLDER}
              onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setStageOfTrip(e.target.value as string)}
            />
          </Container>
          <Container style={stageOptionStyle}>
            <Button variant="contained" onClick={click}>
              {SUBMIT_BUTTON}
            </Button>
          </Container>
        </Box>
      </Modal>
    );
  }

  function renderCreateMyTripButton() {
    return (
      <Container style={submitButton}>
        <Button variant="contained" onClick={openPopup}>
          {CREATE_MY_TRIP_NOW}
        </Button>
      </Container>
    );
  }

  return (
    <Body>
      {renderHeaderDiv()}
      {renderHeaderContent()}
      {renderOptions()}
      {renderCreateMyTripButton()}
      {renderModal()}
    </Body>
  );
};

export default Home;
