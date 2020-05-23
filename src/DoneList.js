import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UndoIcon from "@material-ui/icons/Undo";
import useInputState from "./useInputState";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import EditIcon from "@material-ui/icons/Edit";

const DoneList = ({dones, deleteDone, setToTodo, editDone}) => {
    const [open, setOpen] = React.useState(false);
    const {value, reset, onChange} = useInputState();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <List>
            {dones.map((done, index) => (
                <ListItem key={index.toString()} dense button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Edit todo</DialogTitle>
                        <DialogContent>
                            <TextField
                                variant="outlined"
                                placeholder=""
                                margin="normal"
                                onChange={onChange}
                                value={value}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={event => {
                                reset();
                                handleClose();
                            }}>
                                Cancel
                            </Button>
                            <Button onClick={event => {
                                event.preventDefault();
                                editDone(index, value);
                                reset();
                                handleClose();
                            }}>
                                Edit
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <ListItemText primary={done}/>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Edit"
                            onClick={() => {
                                handleClickOpen()
                            }}>
                            <EditIcon/>
                        </IconButton>
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
}

export default DoneList;
