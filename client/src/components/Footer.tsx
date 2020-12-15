import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useState } from 'react';
import { IFooter } from './interface/IFooter';
import { IFooterButton } from './interface/IFooterButton';
import {USER_BUTTONS, EDITOR_BUTTONS, DEFAULT_BUTTONS, PAGES} from './Const';
import { Theme, withStyles, createStyles } from '@material-ui/core';

/**
 * Getter for application buttons 
 * @param hasUser marker of authorized user
 * @param isEdit marker of editing item state
 */
function getButtons(hasUser: boolean, isEdit: boolean): IFooterButton[] {
    if (isEdit) {
        return EDITOR_BUTTONS;
    }

    if (hasUser) {
        return USER_BUTTONS;
    }

    return DEFAULT_BUTTONS;
}

const styles = (theme: Theme) => createStyles({
    toolbar: {
        width: '100%'
    }
});

const StyledBottomNavigation = withStyles({
    root: {
        background: 'linear-gradient(to right, #005AA7, #FFFDE4)'   
    }
})(BottomNavigation)

/**
 * Footer application component
 * @param props
 */
export const Footer = withStyles(styles)((props: IFooter) => {
    const buttons: IFooterButton[] = getButtons(props.hasUser, props.isEdit).sort((a, b) => a.index - b.index);

    const [value, setValue] = useState(props.id);

    return (<footer className={props.className}>
        <StyledBottomNavigation className={props.classes?.toolbar} value={value} onChange={(e, value: PAGES) => {
                setValue(value);
                props.onActionClick(value);
            }}
        >
            {buttons.map((button) => <BottomNavigationAction key={button.value} value={button.value} label={button.label} icon={button.icon}/>)}
        </StyledBottomNavigation>
    </footer>)
})
