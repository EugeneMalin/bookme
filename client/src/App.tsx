import React, { useState } from 'react';
import { Theme, withStyles, createStyles } from '@material-ui/core';
import { IApp } from './components/interface/IApp';
import { Footer } from './components/Footer';
import { PAGES } from './components/Const';
import { Content } from './components/Content';

const styles = (theme: Theme) => createStyles({
  header: {
    height: 80,
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
      <header className={classes.header}>
        <h1>Саааайт</h1>
        {
          store.getState().user?.name
        }
      </header>
      <Content
        className={classes.main}
        id={id}
      />
      <Footer
        className={classes.footer}
        id={id}
        hasUser={!!store.getState().user}
        isEdit={false}
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
