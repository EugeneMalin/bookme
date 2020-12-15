import { 
    PeopleAlt as PeopleAltIcon,
    MenuBook as MenuBookIcon,
    MeetingRoom as MeetingRoomIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    Check as CheckIcon,
    Clear as ClearIcon
} from '@material-ui/icons';
import { IFooterButton } from './interface/IFooterButton';

/**
 * Footer buttons
 */
export enum PAGES {
    CONFIRM = 'confirm',
    CANCEL = 'cancel',
    BOOKS = 'books',
    PEOPLE = 'people',
    AUTH = 'auth',
    PROFILE = 'profile',
    SETTINGS = 'settings',

    // unvisible element
    NONE = 'none'
}

/**
 * Footer buttons for editor page
 */
export const EDITOR_BUTTONS: IFooterButton[] = [{
    index: -2,
    value: PAGES.CONFIRM,
    label: '',
    icon: <CheckIcon />
}, {
    index: -1,
    value: PAGES.CANCEL,
    label: '',
    icon: <ClearIcon />
}]

/**
 * Default buttons for unauthorizated user
 */
export const DEFAULT_BUTTONS: IFooterButton[] = [{
    index: 2,
    value: PAGES.BOOKS,
    label: 'Books',
    icon: <MenuBookIcon />
}, {
    index: 3,
    value: PAGES.PEOPLE,
    label: 'People',
    icon: <PeopleAltIcon />
}, {
    index: 1000,
    value: PAGES.AUTH,
    label: '',
    icon: <MeetingRoomIcon />
}];

/**
 * Buttons for authorizated buttons
 */
export const USER_BUTTONS: IFooterButton[] = [
...DEFAULT_BUTTONS, {
    index: 0,
    value: PAGES.PROFILE,
    label: 'Profile',
    icon: <PersonIcon />
}, {
    index: 50,
    value: PAGES.SETTINGS,
    label: 'Settings',
    icon: <SettingsIcon />
}];
