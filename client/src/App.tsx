import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

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
      <Header className={classes.header} />
      <Content className={classes.main} />
      <Footer className={classes.footer} />
    </>
  );
};

export default App;
