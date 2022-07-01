import React from 'react';
import useStyles from './styles';
import Screen from '../../components/Screen';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <Screen>
      <div className={classes.home}>
        Home
        <div>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </Screen>
  );
}
