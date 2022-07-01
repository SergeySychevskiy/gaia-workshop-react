import React from 'react';
import useStyles from './styles';
import Screen from '../../components/Screen';
import { useNavigate } from 'react-router-dom';
import { Button } from '@stryberventures/gaia-react.button';

export const Home = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <Screen>
      <div className={classes.home}>
        Home
        <div>
          <Button label="Login" onClick={() => navigate('/login')}/>
        </div>
      </div>
    </Screen>
  );
}
