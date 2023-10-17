import { CardContent, Container, Divider, styled } from "@mui/material";

const CardContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-between",
  margin: 0,
  padding: 0
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

export {
  CardContainer,
  StyledCardContent,
  CardTitleContainer,
  JourneyContainer,
  JourneyDivider,
};
