import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { ListItemSecondaryAction } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const Todolist = (props) => {
    const{todos,setTodos,filteredTodos}=props;
    const toggleTodo=(id)=>{
      const foundTodo=todos.find(t=>t.id === id);
      if(foundTodo){
        foundTodo.completed= !foundTodo.completed;
      }
      const newTodos=todos.map(t=>{
        if(t.id === id){
          return foundTodo;
        }
        return t;
      });
      setTodos(newTodos);
    };
    const removeTodo=(id)=>{
      const newTodos=todos.filter(t=>t.id !== id);
      setTodos(newTodos);
    };
  return (
    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
      {filteredTodos.map((todo) => {
        return (
                <ListItem>
                    <ListItemText primary={todo.text} />
                    <ListItemSecondaryAction>
                        <Checkbox checked={todo.completed} onClick={()=>toggleTodo(todo.id) } />
                        <IconButton onClick={()=>removeTodo(todo.id)}>
                            <DeleteIcon  />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
              );
      })}
    </List>      
  )
}

export default Todolist