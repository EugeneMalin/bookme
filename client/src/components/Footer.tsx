import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { IBase } from "./Base"
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export interface IFooter extends IBase {

}

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
});

export const Footer = (props: IFooter) => {
  const classes = useStyles();
  const [value, setValue] = useState('people');
  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return <footer className={props.className}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="People" value="people" icon={<PeopleIcon />} />
            <BottomNavigationAction label="Books" value="books" icon={<LibraryBooksIcon />} />
        </BottomNavigation>
    </footer>
}
