import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useSomeState, useTheme } from '../../Theme';
import { Button } from '../../Button';

export interface ITemp {
  temp: string
}

export const Temp = (props: ITemp) => {
  const { temp } = props;
  const classes = useStyles();
  const { updateTheme, theme } = useTheme();
  const { state, update } = useSomeState();
  console.log('temp render');
  useEffect(() => {
    console.log('## useEffect theme');
  }, [theme]);
  return (
    <div>
      <Button label={state+''} onClick={() => {update(state + 1)}}/>
      <Button label={'Theme'} onClick={() => {updateTheme({primary: {main: 'orange'}})}}/>
      <div className={classes.temp}>{state}</div>
    </div>
  );
}
