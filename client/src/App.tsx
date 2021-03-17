import React from 'react';
import { makeStyles } from '@material-ui/styles';

export interface IApp {

}

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexGrow: 0
  },
  main: {
    flexGrow: 1,
    overflowY: 'scroll'
  },
  footer: {
    display: 'flex',
    flexGrow: 0,
    width: '100%',
  }
});

export const App = (props: IApp) => {
  const classes = useStyles()
  return (
    <>
      <header className={classes.header} >Привет мир!</header>
      <main className={classes.main} >Привет мир!</main>
      <footer className={classes.footer} >Привет мир!</footer>
    </>
  );
};

export default App;
