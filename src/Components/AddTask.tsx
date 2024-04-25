import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface AddTaskProps {
  onAddTarea: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTarea }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (newTaskText.trim()) {
      onAddTarea(newTaskText);
      setNewTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            label="Nueva tarea"
            value={newTaskText}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => setNewTaskText(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ height: '100%' }}>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTask;