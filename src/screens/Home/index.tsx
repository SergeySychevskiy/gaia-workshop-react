import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import Screen from '../../components/Screen';
import { useNavigate } from 'react-router-dom';
import { Button } from '@stryberventures/gaia-react.button';
import {ThemeProvider} from '../../components/Theme';
import { Test } from '../../components/Test';
import { SomeContextProvider } from '../../components/Theme';

export const Home = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [myTheme, setMyTheme] = useState({
    primary: {main: 'violet'}
  })
  useEffect(() => {
    setTimeout(() => {
      setMyTheme({
        primary: { main: 'red'}
      });
    }, 300);
  }, []);
  return (
    <Screen>
      <SomeContextProvider>
        <ThemeProvider theme={myTheme}>
          <Test test={'dwa'}/>
        </ThemeProvider>
      </SomeContextProvider>
      {/*<ThemeProvider theme={{primary: {main: 'red', contrast: 'black', dark:'orange', light: 'green'}}}>*/}
      {/*  <div className={classes.home}>*/}
      {/*    Home*/}
      {/*    <div>*/}
      {/*      <Button label="Login" onClick={() => navigate('/login')}/>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</ThemeProvider>*/}
    </Screen>
  );
}
