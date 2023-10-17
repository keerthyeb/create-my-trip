import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { Card, Container, Typography } from "@mui/material";
import Body from "../../template/Body";
import { TripDetails } from "../../Model/TripDetails";
import { Call, LocationOn } from "@mui/icons-material";
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {trips.map((trip, index) => (
              <Card
                style={{
                  minWidth: "23%",
                  minHeight: "45vh",
                  maxWidth: "23%",
                  margin: "13px",
                  // borderRadius: "14px",
                  display: "flex",
                  background: "rgb(235 226 226 / 4%)",
                  borderRadius: "10px",
                  transition:
                    "border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",

                  boxShadow:
                    "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(190, 190, 190), 0.3em 0.3em 1em rgba(0,0,0,0.3)",
                }}
                key={index}
              >
                <Container
                  style={{
                    padding: "10px 10px 10px 40px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <Typography variant="h4">{trip.name}</Typography>
                    <Typography>{trip.emailId}</Typography>
                    <div style={{ display: "flex" }}>
                      <Call />
                      <Typography>{trip.phoneNumber.toString()}</Typography>
                    </div>
                  </div>
                  <div>
                    <Typography style={{ fontSize: "25px" }}>
                      <LocationOn></LocationOn>
                      {trip.destinations.join(", ")}
                    </Typography>
                    <Typography style={{ fontSize: "18px" }}>
                      Interests: {trip.interests}
                    </Typography>
                    <Typography style={{ fontSize: "18px" }}>
                      Date: {trip.date}
                    </Typography>
                  </div>
                  <div>
                    <Typography>
                      Duration: {trip.duration.toString()} Days
                    </Typography>
                    <Typography>
                      No of People: {trip.travellersCount.toString()}
                    </Typography>
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
