import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { Card, Container, Typography } from "@mui/material";
import Body from "../../template/Body";
import { TripDetails } from "../../Model/TripDetails";
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const tripInit: TripDetails[] = [];
  const [trips, setTrips] = useState(tripInit);
  const [displayTrips, setDisplayTrips] = useState(false);

  const loginHandler = () => {
    if (username === "admin" && password == "1234") {
      setDisplayTrips(true);
      const tripDetails = getFromLocalStorage();
      setTrips(JSON.parse(tripDetails));
      return;
    }
    alert("Invalid Credentials");
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
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", width: "100%" }}>
            {trips.map((trip, index) => (
              <Card style={{
                minWidth: "23%",
                minHeight: "45vh",
                maxWidth: "23%",
                margin: "10px",
                borderRadius: "14px",
                display: "flex",
                boxShadow: "rgb(38, 57, 77) 0px 20px 20px -15px",
              }} key={index}>
                <Container style={{
                  padding: "17px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column"
                }} >
                  <div>
                    <Typography variant="h4">{trip.name}</Typography>
                    <Typography>{trip.emailId}</Typography>
                    <Typography>Mob: {trip.phoneNumber.toString()}</Typography>
                  </div>
                  <div>
                    <Typography>Destinations: {trip.destinations.join(", ")}</Typography>
                    <Typography>Interests: {trip.interests}</Typography>
                    <Typography>Date: {trip.date}</Typography>
                  </div>
                  <div>
                    <Typography>Duration: {trip.duration.toString()}</Typography>
                    <Typography>No of People: {trip.travellersCount.toString()}</Typography>
                    <Typography>Expected Budget: {trip.budget}</Typography>
                    <Typography>Stage: {trip.stageOfTrip}</Typography>
                  </div>
                </Container>
              </Card>
            ))}
          </div>
        </>
      )}
    </Body>
  );
}

function getFromLocalStorage() {
  return localStorage.getItem("bookings") || "[]";
}

export default AdminLogin;
