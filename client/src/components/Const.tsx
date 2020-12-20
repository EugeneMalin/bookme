import { 
    PeopleAlt as PeopleAltIcon,
    MenuBook as MenuBookIcon,
    Settings as SettingsIcon,
    Person as PersonIcon
} from '@material-ui/icons';
import { IAuthInput } from './interface/IAuthInput';
import { IField } from './interface/IField';
import { IFooterButton } from './interface/IFooterButton';
import { IUserInput } from './interface/IUserInput';

/**
 * Footer buttons
 */
export enum PAGES {
    BOOKS = 'books',
    PEOPLE = 'people',
    PROFILE = 'profile',
    SETTINGS = 'settings',

    // unvisible element
    NONE = 'none'
}

export enum BUTTONS {
    BOOKS = 2,
    PEOPLE = 3,
    PROFILE = 4,
    SETTINGS = 5,

    DEFAULT = 0
}

/**
 * Default buttons for unauthorizated user
 */
export const DEFAULT_BUTTONS: IFooterButton[] = [{
    index: BUTTONS.BOOKS,
    value: PAGES.BOOKS,
    label: 'Books',
    icon: <MenuBookIcon />
}, {
    index: BUTTONS.PEOPLE,
    value: PAGES.PEOPLE,
    label: 'People',
    icon: <PeopleAltIcon />
}];

/**
 * Buttons for authorizated buttons
 */
export const USER_BUTTONS: IFooterButton[] = [
...([...DEFAULT_BUTTONS]).filter((item) => item.index < 1000), {
    index: BUTTONS.PROFILE,
    value: PAGES.PROFILE,
    label: 'Person',
    icon: <PersonIcon />
}, {
    index: BUTTONS.SETTINGS,
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
    field: 'surname',
    label: 'Surname',
    helper: 'Your second name.',
    type: 'text'
}, {
    field: 'name',
    label: 'Name',
    helper: 'Your first name.',
    type: 'text',
    required: true
}, {
    field: 'patronymic',
    label: 'Patronymic',
    type: 'text',
}, {
    field: 'about',
    label: 'About',
    type: 'text',
    helper: 'Something interesting about you.'
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

/**
 * Login fields config
 */
export const LOGIN_FIELDS: IField<IAuthInput>[] = [{
    field: 'login',
    label: 'Login',
    helper: 'or use email field',
    type: 'text',
}, {
    field: 'email',
    label: 'Email address',
    helper: 'or use login field',
    type: 'email',
}, {
    field: 'password',
    label: 'Password',
    type: 'password',
    required: true
}]
