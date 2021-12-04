import { Backdrop, CircularProgress, createStyles, makeStyles, Theme } from "@material-ui/core";
import { ReactNode } from "react";
import { IBase } from "./Base";

export interface IBackground extends IBase {
    open: boolean;
    children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export const Background = ({open, className, children}: IBackground) => {
    const classes = useStyles();
    return <div className={className}>
        {children}
        <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    </div>
}
