import { Container, Typography } from "@mui/material";
import Body from "../../template/Body";

function ThankYou() {
  return (
    <Body>
      <Container>
        <Typography variant="h4">
          Thank you for inquiring about your trip of a lifetime with us. Our
          team of experts will be in touch soon to help craft the perfect
          vacation for you.{" "}
        </Typography>
        <Typography variant="h5"> Sincerely, </Typography>
        <Typography variant="h5"> Enchanting Travels</Typography>
      </Container>
    </Body>
  );
}

export default ThankYou;
