import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Card, Container, Typography } from '@mui/material';
import Body from '../../template/Body';
import { TripDetails } from '../../Model/TripDetails';
import { Call, LocationOn } from '@mui/icons-material';
import { container, headerDiv, loginContainer, styles, tripContainer } from './AdminLoginStyle';
import { getTripDetails, validateCredentials } from '../../service/booking';
import { LOGIN } from '../../utils/constants';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const tripInit: TripDetails[] = [];
  const [trips, setTrips] = useState(tripInit);
  const [displayTrips, setDisplayTrips] = useState(false);

  const loginHandler = () => {
    if (validateCredentials(username, password)) {
      setDisplayTrips(true);
      const tripDetails = getTripDetails();
      setTrips(JSON.parse(tripDetails));
      return;
    }
    alert('Invalid Credentials');
  };

  function renderHeaderDiv() {
    return <div style={headerDiv}></div>;
  }

  function renderLoginDiv() {
    return (
      <div style={loginContainer}>
        <h2 style={styles.header}>Login</h2>
        <div style={styles.line}></div>
        <div style={styles.textField}>
          <TextField placeholder={LOGIN.userName} value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div style={styles.textField}>
          <TextField
            type="password"
            placeholder={LOGIN.password}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div style={styles.button}>
          <Button variant="contained" onClick={loginHandler}>
            {LOGIN.login}
          </Button>
        </div>
      </div>
    );
  }

  function renderHeader() {
    return (
      <Typography variant="h5" mb={2}>
        {LOGIN.trips}
      </Typography>
    );
  }

  function renderCard(index: number, trip: TripDetails) {
    return (
      <Card style={styles.card} key={index}>
        <Container style={container}>
          <div>
            <Typography variant="h4">{trip.name}</Typography>
            <Typography>{trip.emailId}</Typography>
            <div style={{ display: 'flex' }}>
              <Call />
              <Typography>{trip.phoneNumber.toString()}</Typography>
            </div>
          </div>
          <div>
            <Typography style={styles.fond25}>
              <LocationOn></LocationOn>
              {trip.destinations.join(', ')}
            </Typography>
            <Typography style={styles.fond18}>Interests: {trip.interests}</Typography>
            <Typography style={styles.fond18}>Date: {trip.date}</Typography>
          </div>
          <div>
            <Typography>Duration: {trip.duration.toString()} Days</Typography>
            <Typography>No of People: {trip.travellersCount.toString()}</Typography>
            <Typography>Expected Budget: {trip.budget}</Typography>
            <Typography>Stage: {trip.stageOfTrip}</Typography>
          </div>
        </Container>
      </Card>
    );
  }

  function renderCardDetails() {
    return <div style={tripContainer}>{trips.map((trip, index) => renderCard(index, trip))}</div>;
  }

  return (
    <Body>
      {!displayTrips && (
        <>
          {renderHeaderDiv()}
          {renderLoginDiv()}
        </>
      )}
      {displayTrips && (
        <>
          {renderHeader()}
          {renderCardDetails()}
        </>
      )}
    </Body>
  );
}

export default AdminLogin;
