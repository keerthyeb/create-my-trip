import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import Body from "../../template/Body";
import { TripDetails } from "../Home/Home";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const tripInit: TripDetails[] = [];
  const [trips, setTrips] = useState(tripInit);
  const [displayTrips, setDisplayTrips] = useState(false);

  const loginHandler = () => {
    setDisplayTrips(true);
    const json = localStorage.getItem("bookings") || "[]";
    setTrips(JSON.parse(json));
  };

  return (
    <Body>
      {!displayTrips && (
        <>
          <TextField
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button onClick={loginHandler}>Login</Button>
        </>
      )}
      {displayTrips && (
        <>
          <TextField placeholder="Search by name or emailId" />
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

const CardContainer = styled(Container)({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "space-between",
});
const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: "2em",
  width: "25%",
});
const CardTitleContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const JourneyContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
});
const JourneyDivider = styled(Divider)({
  flex: 1,
  margin: "15px 0",
});

export default AdminLogin;
