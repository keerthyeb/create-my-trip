import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Body from "../../template/Body";
import {
  BUDGETOPTIONS,
  INTERESTS,
  PLACES,
  STAGESOPTIONS,
  TRAVELSIZE,
  WHENOPTIONS,
} from "../../utils/constants";
import MultiSelect from "../../component/Dropdown/MultiSelect/MultiSelect";
import Dropdown from "../../component/Dropdown/SingleSelect/Dropdown";
import { TripDetails } from "../../Model/TripDetails";
import modalStyle from "./HomeStyle";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    [],
  );
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [travellersCount, setTravellersCount] = useState<number>(0);
  const [budget, setBudget] = useState<number>(0);
  const [showPopup, setShowPop] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [emailId, setEmailId] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [stageOfTrip, setStageOfTrip] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value: any = event.target.value;
    setSelectedDestinations(value);
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
    saveToLocalStorage(tripDetails);
    navigate("/thankyou");
  };

  const openPopup = () => {
    setShowPop(true);
  };

  return (
    <Body>
      <div style={{ marginBlockEnd: "17%" }}></div>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBlockEnd: "1%",
        }}
      >
        <Typography variant="h4">
          We Care, So You Can Travel Carefree
        </Typography>
        <Typography variant="h5">
          Let our experts plan your private, tailor-made and secure tour in 70+
          inspiring destinations.
        </Typography>
      </Container>
      <Container style={{ display: "flex" }}>
        <div style={{ background: "white", display: "flex" }}>
          <MultiSelect
            options={PLACES}
            placeHolder="Where do you want to go?"
            selectedItems={selectedDestinations}
            onChangeHandler={handleChange}
          />
        </div>
        <div style={{ background: "white", display: "flex" }}>
          <MultiSelect
            options={INTERESTS}
            placeHolder="Your Interests?"
            selectedItems={selectedInterests}
            onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) =>
              setSelectedInterests(e.target.value as string[])
            }
          />
        </div>
        <div style={{ background: "white", display: "flex" }}>
          <Dropdown
            options={TRAVELSIZE}
            placeHolder="No. of travelers"
            onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) =>
              setTravellersCount(e.target.value as number)
            }
          />
        </div>
        <div style={{ background: "white", display: "flex" }}>
          <Dropdown
            options={BUDGETOPTIONS}
            placeHolder="Budget Per Person"
            onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) =>
              setBudget(e.target.value as number)
            }
          />
        </div>
      </Container>
      <Container
        style={{ margin: "10px", display: "flex", justifyContent: "center" }}
      >
        <Button variant="contained" onClick={openPopup}>
          Create My Trip Now
        </Button>
      </Container>

      <Modal
        open={showPopup}
        onClose={() => setShowPop(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Almost There!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              We need a bit more info to create your itinerary:
            </Typography>
          </div>
          <Container style={{ padding: "0px", marginTop: "10px" }}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Container>
          <Container style={{ padding: "0px", marginTop: "10px" }}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </Container>

          <Container style={{ padding: "0px", marginTop: "10px" }}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Container>

          <Container
            style={{
              padding: "0px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              placeholder="Trip Duration (Days)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <Dropdown
              options={WHENOPTIONS}
              placeHolder="When"
              onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) =>
                setDate(e.target.value as string)
              }
            />
          </Container>

          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Dropdown
              options={STAGESOPTIONS}
              placeHolder="What stage of planning are you in?"
              onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) =>
                setStageOfTrip(e.target.value as string)
              }
            />
          </Container>

          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button variant="contained" onClick={click}>
              Submit
            </Button>
          </Container>
        </Box>
      </Modal>
    </Body>
  );
};

function saveToLocalStorage(tripDetails: TripDetails) {
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  bookings.push(tripDetails);
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

export default Home;
