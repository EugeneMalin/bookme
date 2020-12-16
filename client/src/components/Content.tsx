import { IContent } from "./interface/IContent"
import { PAGES } from "./Const";
import { useTheme, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Tab } from "./Tab";
import { Auth } from "./pages";

/**
 * Getter for page index, some pages displayed on same index templates
 * @param buttonId page identifier
 */
function getIndex(buttonId: PAGES): number {
    switch(buttonId) {
        case PAGES.AUTH:
            return 1;
        case PAGES.BOOKS:
            return 2;
        case PAGES.PEOPLE:
            return 3;
        case PAGES.NONE:
        default:
            return 0;
    }
}

const styles = (theme: Theme) => createStyles({
    base: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
    },
    about: {

    },
    auth: {

    },
    book: {

    }, 
    people: {

    },
    spacing: {
        flexGrow: 1,
        flexShrink: 1
    }
});

/**
 * Main content application component
 */
export const Content = withStyles(styles)((props: IContent) => {
    const theme = useTheme();
    const value = getIndex(props.id);

    return <main className={`${props.className} ${props.classes?.base}`}>
        <Tab  
            className={props.classes?.about}
            value={value} index={0}
        >
            <article>
                <section>
                    <h3>Your books at one place now!</h3>
                    <div>There is simple service that provide storing books, that you've read</div>
                    <ul>
                        <li>You can add books to the different list</li>
                        <li>You can find friends with same books</li>
                        <li>You can sale of change books that you've read or you are goint to read</li>
                        <li>You can find same books using tags</li>
                        <li>You can share your opinion about books</li>
                    </ul>
                </section>
            </article>
        </Tab>
        <Tab
            className={props.classes?.auth}
            value={value} index={1}
        >
            <Auth/>
        </Tab>
        <Tab
            className={props.classes?.book}
            value={value} index={2}
        >
            <div>Books tab</div>
        </Tab>
        <Tab  
            className={props.classes?.people}
            value={value} index={3}
        >
            <div>People tab</div>
        </Tab>
        <div className={props.classes?.spacing}></div>
    </main>;
});
