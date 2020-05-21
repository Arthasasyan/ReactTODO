import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UndoIcon from "@material-ui/icons/Undo";

const DoneList = ({dones, deleteDone, setToTodo}) => (
    <List>
        {dones.map((done, index) => (
            <ListItem key={index.toString()} dense button>
                <ListItemText primary={done}/>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Undo"
                        onClick={() => {
                            setToTodo(index)
                        }}
                    >
                        <UndoIcon/>
                    </IconButton>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteDone(index);
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default DoneList;
