import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MultiSelect from '../../component/MultiSelect/MultiSelect';
import Dropdown from '../../component/Dropdown/Dropdown';
import Body from '../../template/Body';
import { BUDGETOPTIONS, INTERESTS, PLACES, STAGESOPTIONS, TRAVELSIZE, WHENOPTIONS } from '../../utils/constants';

interface TripDetails {
  destinations: string[];
  interests: string[];
  travellersCount: number;
  budget: number;
  name: string;
  emailId: string;
  phoneNumber: string;
  duration: string;
  date: string;
  stageOfTrip: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home: React.FC = () => {
  const initPlace: string[] = [];

  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(initPlace);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(initPlace);
  const [travellersCount, setTravellersCount] = useState<number>(0);
  const [budget, setBudget] = useState<number>(0);
  const [showPopup, setShowPop] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [stageOfTrip, setStageOfTrip] = useState<string>('');

  const handle = (e: React.ChangeEvent<{ value: unknown }>) => {
    const a: any = e.target.value;
    setSelectedDestinations(a);
  };

  const click = () => {
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
  };

  const openPopup = () => {
    setShowPop(true);
  };

  return (
    <Body>
      <Container style={{ display: 'flex' }}>
        <MultiSelect
          options={PLACES}
          placeHolder="Where do you want to go?"
          selectedItems={selectedDestinations}
          onChangeHandler={handle}
        />
        <MultiSelect
          options={INTERESTS}
          placeHolder="Your Interests?"
          selectedItems={selectedInterests}
          onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setSelectedInterests(e.target.value as string[])}
        />
        <Dropdown options={TRAVELSIZE} placeHolder="No. of travelers" onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setTravellersCount(e.target.value as number)} />
        <Dropdown options={BUDGETOPTIONS} placeHolder="Budget Per Person" onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setBudget(e.target.value as number)} />
      </Container>
      <Container>
        <Button variant="contained" onClick={openPopup}>
          Create My Trip Now
        </Button>
      </Container>

      <Modal open={showPopup} onClose={click} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Almost There!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We need a bit more info to create your itinerary:
          </Typography>
          <Container style={{ marginTop: '10px' }}>
            <TextField fullWidth placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Container>
          <Container style={{ marginTop: '10px' }}>
            <TextField fullWidth placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
          </Container>

          <Container style={{ marginTop: '10px' }}>
            <TextField fullWidth placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </Container>

          <Container style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <TextField placeholder="Trip Duration (Days)" value={duration} onChange={(e) => setDuration(e.target.value)} />
            <Dropdown options={WHENOPTIONS} placeHolder="When" onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setDate(e.target.value as string)} />
          </Container>

          <Container style={{ marginTop: '10px' }}>
            <Dropdown options={STAGESOPTIONS} placeHolder="What stage of planning are you in?" onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setStageOfTrip(e.target.value as string)} />
          </Container>

          <Container style={{ marginTop: '10px' }}>
            <Button variant="contained" onClick={click}>
              Submit
            </Button>
          </Container>
        </Box>
      </Modal>
    </Body>
  );
};

export default Home;
