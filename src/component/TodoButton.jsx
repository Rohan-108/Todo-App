import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const TodoButton = (props) => {
  const {setFilter}=props; 
  return (
   <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-evenly',
        '& > *': {
          m: 1,
        },
      }}
    >
      <Button variant="outlined"  onClick={()=>setFilter('all')}>All</Button>
      <Button variant="outlined" onClick={()=>setFilter('not_completed')}>
        Remaining
      </Button>
      <Button variant="outlined" onClick={()=>setFilter('completed')}>
        Completed
      </Button>
      </Box>
  )
}

export default TodoButton