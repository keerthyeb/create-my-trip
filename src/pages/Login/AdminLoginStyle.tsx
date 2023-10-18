const styles = {
  textField: {
    margin: '5px',
    background: 'white',
  },
  line: {
    width: '35%',
    height: '1px',
    backgroundColor: 'lightgray',
    marginBottom: '20px',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  font18: {
    fontSize: '18px',
  },
  font25: {
    fontSize: '25px',
  },
  card: {
    minHeight: '45vh',
    maxWidth: '40vh',
    minWidth: '40vh',
    margin: '13px',
    display: 'flex',
    background: 'rgb(235 226 226 / 4%)',
    borderRadius: '10px',
    transition: 'border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: 'inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(190, 190, 190), 0.3em 0.3em 1em rgba(0,0,0,0.3)',
  },
};
const loginContainer: any = {
  display: 'flex',
  height: '60vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40vh',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: 'white',
};

const headerDiv = {
  marginTop: '8%',
};

const container: any = {
  padding: '10px 10px 10px 40px',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
};

const tripContainer: any = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  width: '100%',
};

export { styles, container, headerDiv, loginContainer, tripContainer };
