import React from 'react';
import useStyles from './styles';

const Screen = (props: { children: React.ReactNode }) => {
  const classes = useStyles();

  return (
    <div className={classes.screen}>
      {props.children}
    </div>
  );
}

export default Screen;
