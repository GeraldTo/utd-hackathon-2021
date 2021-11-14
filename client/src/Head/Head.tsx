import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ClassNameMap } from '@material-ui/styles';
import * as React from 'react';



export interface HeadProps {
    classes: ClassNameMap
}


export default function Head (props: HeadProps) {
  return (
    <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5"className={props.classes.title}> 
                        UTD Hackathon
                    </Typography>
                </Toolbar>
            </AppBar>
  );
}


