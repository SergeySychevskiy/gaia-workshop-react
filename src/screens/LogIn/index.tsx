import React from 'react';
import useStyles from './styles';
import Screen from '../../components/Screen';

export const LogIn = () => {
  const classes = useStyles();
  
  return (
    <Screen>
      <div className={classes.logIn}>
        Log in
      </div>
    </Screen>
  );
}
