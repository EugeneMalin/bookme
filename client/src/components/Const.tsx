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
export enum BUTTONS {
    CONFIRM = 'confirm',
    CANCEL = 'cancel',
    BOOKS = 'books',
    PEOPLE = 'people',
    AUTH = 'auth',
    PROFILE = 'profile',
    SETTINGS = 'settings'
}

/**
 * Footer buttons for editor page
 */
export const EDITOR_BUTTONS: IFooterButton[] = [{
    index: -2,
    value: BUTTONS.CONFIRM,
    label: '',
    icon: <CheckIcon />
}, {
    index: -1,
    value: BUTTONS.CANCEL,
    label: '',
    icon: <ClearIcon />
}]

/**
 * Default buttons for unauthorizated user
 */
export const DEFAULT_BUTTONS: IFooterButton[] = [{
    index: 2,
    value: BUTTONS.BOOKS,
    label: 'Books',
    icon: <MenuBookIcon />
}, {
    index: 3,
    value: BUTTONS.PEOPLE,
    label: 'People',
    icon: <PeopleAltIcon />
}, {
    index: 1000,
    value: BUTTONS.AUTH,
    label: '',
    icon: <MeetingRoomIcon />
}];

/**
 * Buttons for authorizated buttons
 */
export const USER_BUTTONS: IFooterButton[] = [
...DEFAULT_BUTTONS, {
    index: 0,
    value: BUTTONS.PROFILE,
    label: 'Profile',
    icon: <PersonIcon />
}, {
    index: 50,
    value: BUTTONS.SETTINGS,
    label: 'Settings',
    icon: <SettingsIcon />
}];
