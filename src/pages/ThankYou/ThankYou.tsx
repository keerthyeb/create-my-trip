import { Container, Typography } from '@mui/material';
import Body from '../../Layout/Body';
import { fontFamily, headerDiv, thankYou } from './thankYouStyle';
import { THANK_YOU } from '../../utils/constants';

function ThankYou() {
  return (
    <Body>
      <Container>
        <div style={headerDiv}></div>;
        <div style={thankYou}>
          <Typography style={fontFamily} variant="h4">
            {THANK_YOU.note}
          </Typography>
          <div>
            <Typography style={fontFamily} variant="h5">
              {THANK_YOU.sincerely}
            </Typography>
            <Typography style={fontFamily} variant="h5">
              {THANK_YOU.travels}
            </Typography>
          </div>
        </div>
      </Container>
    </Body>
  );
}

export default ThankYou;
