import React, { useEffect, useState } from 'react';
import { ThemeProvider, useSomeState, useTheme } from '../Theme';
import { Button } from '../Button';
import { Temp } from './Temp';

export interface ITest {
  test: string
}


export const Test = (props: ITest) => {
  const { test } = props;
  // const [state, setState] = useState(false);
  const {state, update} = useSomeState();
  console.log('state', state);
  return (
    <Temp temp={'fwa'}/>
  );
}
