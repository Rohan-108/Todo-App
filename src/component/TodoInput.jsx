import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
//modal design////
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24, 
  p: 4,
  display:'flex',
  flexDirection:'column',
  gap:"10px",
};

const TodoInput = (props) => {
  const {todos,setTodos}=props;
  const [open, setOpen] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const addTodo=(text)=>{
      const nextId=todos.length>0? Math.max(...todos.map((t)=>t.id))+1:0;
      const newTodo={
        id:nextId,
        text,
        completed:false,
      }
      setTodos([newTodo,...todos]);
    }
  const onClick=()=>{
    addTodo(newTodo);
    setNewTodo('');
    setOpen(false);
  }
  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleOpen}
      sx={{position: 'absolute',
            top: '95%',
            left: '50%',
            transform: 'translate(-50%, -50%)',}}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <TextField
          id="outlined-multiline-flexible"
          label="Add New To-Do"
          multiline
          maxRows={2}
          value={newTodo}
          onChange={handleChange}
          fullWidth
        />
          <Button disabled={newTodo.length===0} variant="contained" onClick={onClick}>Add</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default TodoInput