import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import { ChangeEvent } from "react";
import { IBase } from "./Base"
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../store";
import actions from "../actions";
import { BOOKS_TAB_ID, HOME_TAB_ID, PEOPLE_TAB_ID } from "../const";

export interface IFooter extends IBase {

}

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
});

export const Footer = (props: IFooter) => {
  const classes = useStyles();
  const value = useSelector<IStore>(store => store.tabId);
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    dispatch(actions.tab.change(newValue));
  };

  return <footer className={props.className}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value={HOME_TAB_ID} icon={<HomeIcon />} />
            <BottomNavigationAction label="People" value={PEOPLE_TAB_ID} icon={<PeopleIcon />} />
            <BottomNavigationAction label="Books" value={BOOKS_TAB_ID} icon={<LibraryBooksIcon />} />
        </BottomNavigation>
    </footer>
}
