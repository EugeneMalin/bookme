import { IContent } from "./interface/IContent"
import { PAGES } from "./Const";
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Tab } from "./Tab";
import { Books, People } from "./pages";

/**
 * Getter for page index, some pages displayed on same index templates
 * @param buttonId page identifier
 */
function getIndex(buttonId: PAGES): number {
    switch(buttonId) {
        case PAGES.BOOKS:
            return 2;
        case PAGES.PEOPLE:
            return 3;
        case PAGES.NONE:
        default:
            return 2;
    }
}

const styles = (theme: Theme) => createStyles({
    base: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
    },
    book: {

    },
    people: {},
    spacing: {
        flexGrow: 1,
        flexShrink: 1
    }
});

/**
 * Main content application component
 */
export const Content = withStyles(styles)((props: IContent) => {
    const value = getIndex(props.id);

    return <main className={`${props.className} ${props.classes?.base}`}>
        <Tab
            className={props.classes?.book}
            value={value} index={2}
        >
            <Books />
        </Tab>
        <Tab  
            className={props.classes?.people}
            value={value} index={3}
        >
            <People />
        </Tab>
        <div className={props.classes?.spacing}></div>
    </main>;
});
