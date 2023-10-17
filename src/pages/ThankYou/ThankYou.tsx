import { Container, Typography } from "@mui/material";
import Body from "../../template/Body";

function ThankYou() {
  return (
    <Body>
      <Container>
        <div style={{ marginBlockEnd: "17%" }}></div>
        <div
          style={{
            minHeight: "35vh",
            padding: "40px",
            margin: "10px",
            display: "flex",
            background: "white",
            borderRadius: "10px",
            justifyContent: "space-evenly",
            flexDirection: "column",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Typography style={{ fontFamily: "cursive" }} variant="h4">
            Thank you for inquiring about your trip of a lifetime with us. Our
            team of experts will be in touch soon to help craft the perfect
            vacation for you.
          </Typography>
          <div>
            <Typography style={{ fontFamily: "cursive" }} variant="h5">
              {" "}
              Sincerely,{" "}
            </Typography>
            <Typography style={{ fontFamily: "cursive" }} variant="h5">
              {" "}
              Enchanting Travels
            </Typography>
          </div>
        </div>
      </Container>
    </Body>
  );
}

export default ThankYou;
