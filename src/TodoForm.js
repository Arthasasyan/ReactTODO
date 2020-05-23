import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const TodoForm = ({saveTodo}) => {
    const {value, reset, onChange} = useInputState();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <form    
        >
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        AddToDo
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">ADDTODO</DialogTitle>
        <DialogContent>
          <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={value}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={event=>{
              reset();
              handleClose(); 
              }}>
            Cancel
          </Button>
          <Button onClick={event=>{
                event.preventDefault();
                saveTodo(value);
                reset();
                handleClose();
                }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
        </form>
    );
};

export default TodoForm;
