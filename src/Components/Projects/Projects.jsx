import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import gofish1 from "../Projects/gofish1.png";
import sixdegree1 from "../Projects/sixdegree1.png";
import todo from "../Projects/Todo-screenshot.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="cards">
      {/* GoFish */}
      <div className="card-item">
        <h1>GoFish</h1>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia sx={{ height: 200 }} image={gofish1} title="GoFish App" />
          <CardContent>
            <Typography variant="body1" sx={{ color: "white" }}>
              Tired of catching no fish, let alone bogus fish? Well have no
              fear, your boy Stephon is here. I would like to introduce you guys
              to my new app called “Go Fish!”. This app is designed to give the
              user journal and tracking capabilities when it comes to catching
              the species of fish around the area. The user will also be able to
              add a description of their fish as well as take a picture of it as
              well. Also, the user will have a history of past fish caught and
              the option to edit or delete the current fish entry.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

      {/* Six Degree */}
      <div className="card-item">
        <h1>Six Degrees of Kevin Bacon</h1>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            sx={{ height: 200 }}
            image={sixdegree1}
            title="Six Degree App"
          />
          <CardContent>
            <Typography variant="body1" sx={{ color: "white" }}>
              The Sixth Degree is a digital version of the game 'The Six Degrees
              of Kevin Bacon'. The app allows two users to play the game against
              one another and has a scoring system to identify winners and
              losers of a challenge. The app is built with React, Redux,
              Node.js, PostgreSQL, and the Movie Database Project's API. Users
              save scripts (cards to play against one another) and challenge one
              another to see who can create the closest links between actors and
              movies.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

      {/* To Do List */}
      <div className="card-item">
        <h1>To Do List</h1>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia sx={{ height: 277 }} image={todo} title="To Do List App" />
          <CardContent>
            <Typography variant="body1" sx={{ color: "white" }}>
              This app is designed to give the user the ability to add, edit and
              delete tasks. The user will also be able to mark the task as
              complete and have the option to view all completed tasks. The user
              will also have the option to view all tasks, completed tasks, and
              incomplete tasks. The user will also have the option to edit or
              delete the task.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
