import React, { useState } from 'react';
import './App.css';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { 
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
  Folder as FolderIcon
} from '@material-ui/icons';

function App() {
  const [value, setValue] = useState('recents')
  return (
    <>
      <header>
        <h1>Саааайт</h1>
      </header>
      <main>
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
      <footer>
        <BottomNavigation value={value} onChange={(e, value: string) => {
          setValue(value);
        }}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        <span>Powered by Eugene Malin 2020</span>
      </footer>
    </>
  );
}
export default App;
