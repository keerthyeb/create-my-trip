import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import MultiSelect from '../../component/MultiSelect/MultiSelect';
import Dropdown from '../../component/Dropdown/Dropdown';
import Body from '../../template/Body';
import { BUDGETOPTIONS, INTERESTS, PLACES, TRAVELSIZE } from '../../utils/constants';

const Home: React.FC = () => {
    const initPlace: string[] = [];

    const [selectedPlaces, setSelectedPlaces] = useState<string[]>(initPlace);
    const [selectedInterests, setSelectedInterests] = useState<string[]>(initPlace);
    const [travellersCount, setTravellersCount] = useState<number>(0);
    const [budget, setBudget] = useState<number>(0);
    const [showPopup, setShowPop] = useState<boolean>(false);
    const handle = (e: React.ChangeEvent<{ value: unknown }>) => {
        const value: any = e.target.value;
        setSelectedPlaces(value);
    };

    const click = () => {
    };

    const openPopup = () => {
        setShowPop(true);
    };

    return (
        <Body>
            <Container style={{ display: 'flex' }}>
                <MultiSelect
                    options={PLACES}
                    placeHolder="Where do you want to go?"
                    selectedItems={selectedPlaces}
                    onChangeHandler={handle}
                />
                <MultiSelect
                    options={INTERESTS}
                    placeHolder="Your Interests?"
                    selectedItems={selectedInterests}
                    onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setSelectedInterests(e.target.value as string[])}
                />
                <Dropdown options={TRAVELSIZE} placeHolder="No. of travelers" onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setTravellersCount(e.target.value as number)} />
                <Dropdown options={BUDGETOPTIONS} placeHolder="Budget Per Person" onChangeHandler={(e: React.ChangeEvent<{ value: unknown }>) => setBudget(e.target.value as number)} />
            </Container>
            <Container>
                <Button variant="contained" onClick={openPopup}>
                    Create My Trip Now
                </Button>
            </Container>
        </Body>
    );
};

export default Home;
