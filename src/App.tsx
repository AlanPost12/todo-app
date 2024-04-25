import React, { useState } from "react";  
import {
  Container,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Card,
  ListItemIcon,
} from "@mui/material";
import { grey } from '@mui/material/colors'
import AddTask from "./Components/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: tasks.length + 1, text, completed: false }]);
  };

  const toggleTaskCompleted = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container
      sx={{
        background: "linear-gradient(to bottom, #6DC8C8, #577CE0);",
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            m: 4,
            p: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Lista de tareas
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AddTask onAddTarea={addTask} />
            </Grid>

            <Grid item xs={12}>
              <List>
                {tasks.map((task) => (
                  <ListItem
                    divider
                    key={task.id}
                    sx={{
                      backgroundColor: grey[200],
                    }}
                  >
                    <Checkbox
                      checked={task.completed}
                      onChange={() => toggleTaskCompleted(task.id)}
                    />
                    <ListItemText primary={task.text} />

                    {
                      task.completed &&
                        <ListItemIcon>
                          <Button
                            onClick={() => deleteTask(task.id)}
                            variant="contained"
                            color="error"
                            fullWidth
                            sx={{ height: "100%" }}
                          >
                            <DeleteIcon />
                          </Button>
                        </ListItemIcon>
                    }

                  </ListItem>
                ))}
              </List>
            </Grid>


            <Grid container sx={{
              p: 2,
            }}>
              <Grid item xs={8} sx={{
                my: 'auto'
              }}>
                <Typography >
                  Tienes {tasks.filter((task) => !task.completed).length} tareas pendientes
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={deleteCompletedTasks}
                >
                  Eliminar completadas
                </Button>
              </Grid>
            </Grid>


          </Grid>
        </Card>
      </Container>
    </Container>
  );
};

export default App;
