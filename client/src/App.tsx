import React from 'react';
import { Theme, withStyles, createStyles } from '@material-ui/core';
import { IApp } from './components/interface/IApp';
import { Footer } from './components/Footer';

const styles = (theme: Theme) => createStyles({
  header: {
    height: 80,
    display: 'flex',
    flexGrow: 0
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  footer: {
    display: 'flex',
    flexGrow: 0,
    width: '100%'
  }
})

const App = withStyles(styles)(({classes, store}: IApp) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Саааайт</h1>
        {
          store.getState().user?.name
        }
      </header>
      <main className={classes.main}>
        <article>
          <section>
            <h3>Section 1</h3>
            <div>Some contetn</div>
          </section>
          <section>
            <h3>Section 2</h3>
            <div>Some contetn</div>
          </section>
        </article>
      </main>
      <Footer
        className={classes.footer}
        hasUser={!!store.getState().user}
        isEdit={false}
        onActionClick={(id, params) => {
          switch(id) {

            default:
              return;
          }
        }}
      />
    </>
  );
});

export default App;
