import React, { useState } from 'react';
import { Theme, withStyles, createStyles } from '@material-ui/core';
import { IApp } from './components/interface/IApp';
import { Footer } from './components/Footer';
import { PAGES } from './components/Const';
import { Content } from './components/Content';
import { Header } from './components/Header';

const styles = (theme: Theme) => createStyles({
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
})

const App = withStyles(styles)(({classes, store}: IApp) => {
  const [id, setId] = useState(PAGES.NONE);

  return (
    <>
      <Header
        className={classes.header}
      />
      <Content
        className={classes.main}
        id={id}
      />
      <Footer
        className={classes.footer}
        id={id}
        hasUser={!!store.getState().user}
        onActionClick={(id, params) => {
          setId(id);
          switch(id) {
            case PAGES.AUTH:

              return;
            default:
              return;
          }
        }}
      />
    </>
  );
});

export default App;
