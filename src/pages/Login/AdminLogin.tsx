import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { Card, Container, Typography } from "@mui/material";
import {
  CardContainer,
  StyledCardContent,
  CardTitleContainer,
  JourneyContainer,
  JourneyDivider,
} from "./AdminLoginStyle";
import Body from "../../template/Body";
import { TripDetails } from "../../Model/TripDetails";
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const tripInit: TripDetails[] = [];
  const [trips, setTrips] = useState(tripInit);
  const [displayTrips, setDisplayTrips] = useState(false);

  const loginHandler = () => {
    setDisplayTrips(true);
    const tripDetails = getFromLocalStorage();
    setTrips(JSON.parse(tripDetails));
  };

  return (
    <Body>
      {!displayTrips && (
        <>
          <div style={{ marginBlockEnd: "17%" }}></div>
          <div style={{ margin: "5px", background: "white" }}>
            <TextField
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div style={{ margin: "5px", background: "white" }}>
            <TextField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div style={{ margin: "5px" }}>
            <Button variant="contained" onClick={loginHandler}>
              Login
            </Button>
          </div>
        </>
      )}
      {displayTrips && (
        <>
          <Typography variant="h5" mb={2}>
            Trips
          </Typography>
          <CardContainer>
            {trips.map((trip, index) => (
              <Card key={index}>
                <StyledCardContent>
                  <CardTitleContainer>
                    <div>
                      <Typography variant="h6">{trip.name}</Typography>
                      <Typography>{trip.emailId}</Typography>
                      <Typography>{trip.phoneNumber.toString()}</Typography>
                    </div>
                  </CardTitleContainer>
                  <JourneyContainer>
                    <Typography variant="h5">{trip.destinations}</Typography>
                    <JourneyDivider>{trip.date}</JourneyDivider>
                    <Typography variant="h5">{trip.interests}</Typography>
                  </JourneyContainer>
                  <Container>
                    <Typography>{trip.duration.toString()}</Typography>
                    <Typography>{trip.stageOfTrip}</Typography>
                  </Container>
                  <Container>
                    <Typography>{trip.travellersCount.toString()}</Typography>
                    <Typography>{trip.budget}</Typography>
                  </Container>
                </StyledCardContent>
              </Card>
            ))}
          </CardContainer>
        </>
      )}
    </Body>
  );
}

function getFromLocalStorage() {
  return localStorage.getItem("bookings") || "[]";
}

export default AdminLogin;
