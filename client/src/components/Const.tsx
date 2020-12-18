import { 
    PeopleAlt as PeopleAltIcon,
    MenuBook as MenuBookIcon,
    MeetingRoom as MeetingRoomIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    Check as CheckIcon,
    Clear as ClearIcon
} from '@material-ui/icons';
import { IField } from './interface/IField';
import { IFooterButton } from './interface/IFooterButton';
import { IUserInput } from './interface/IUserInput';

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

/**
 * Min size of login name
 */
export const MIN_LOGIN_SIZE = 6;

/**
 * Min size of password
 */
export const MIN_PASSWORD_SIZE = 8;

/**
 * User fields config
 */
export const USER_FIELDS: IField<IUserInput>[] = [{
    field: 'name',
    label: 'Name',
    helper: 'Your first name.',
    type: 'text',
    required: true
}, {
    field: 'surname',
    label: 'Surname',
    helper: 'Your second name.',
    type: 'text'
}, {
    field: 'patronymic',
    label: 'Patronymic',
    type: 'text',
    
}, {
    field: 'login',
    label: 'Login',
    helper: `Required length is ${MIN_LOGIN_SIZE} symbols.`,
    type: 'text',
    required: true
    
}, {
    field: 'email',
    label: 'Email address',
    helper: "We'll never share your email.",
    type: 'email',
    required: true
    
}, {
    field: 'password',
    label: 'Password',
    helper: `It should contain number and upper and lower case letter. Required length is ${MIN_PASSWORD_SIZE} symbols.`,
    type: 'password',
    required: true
    
}, {
    field: 'rPassword',
    label: 'Repeat password',
    type: 'password',
    required: true
}];

export const MAX_FIELD_WIDTH = 400;
