import {
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grow,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import HotelsForm from './HotelsForm';
import NileCruise from './NileCruise';
import StudiosORApartments from './StudiosORApartments';

interface Props {}

const HotelsComponents = [
  {
    name: 'Hotels',
    component: <HotelsForm />,
  },
  {
    name: 'NileCruise',
    component: <NileCruise />,
  },
  {
    name: 'Studios/Apartments',
    component: <StudiosORApartments />,
  },
];
const Index: FunctionComponent<Props> = () => {
  const { t } = useTranslation();

  const [radioValue, setRadioValue] = React.useState('Hotels');
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ color: 'body.light', justifyContent: 'center' }}
        value={radioValue}
        onChange={handleChangeRadio}
      >
        <FormControlLabel
          value="Hotels"
          control={<Radio sx={{ color: 'body.light' }} />}
          label="Hotels"
        />
        <FormControlLabel
          value="NileCruise"
          control={<Radio sx={{ color: 'body.light' }} />}
          label="Nile cruise"
        />
        <FormControlLabel
          value="Studios/Apartments"
          control={<Radio sx={{ color: 'body.light' }} />}
          label="Studios / Apartments"
        />
      </RadioGroup>
      <Box>
        {
          <Box sx={{ zIndex: 100, position: 'relative' }}>
            {HotelsComponents.map(
              ({ name, component }, _) =>
                name === radioValue && (
                  <Grow in={radioValue === name}>
                    <div>{component}</div>
                  </Grow>
                )
            )}
          </Box>
        }
      </Box>
    </Box>
  );
};

export default Index;
