import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { Button, Grid, Avatar, TextField } from "@material-ui/core";
import { v4 as uuidV4 } from "uuid";
import "./Homecomponent.css";
import { useHistory } from "react-router";
function HomeComponent() {
  const history = useHistory();
  const [input, setInput] = useState();
  function handleCreate() {
    history.push(`/meeting/${uuidV4()}`);
  }
  function handleJoin() {
    if (input) history.push(`/meeting/${input}`);
  }
  //https://reputationtoday.in/wp-content/uploads/2020/07/iStock-1215704164-700x395-1.jpg
  return (
    <div className="background">
      <Grid container direction="row">
        <Grid
          item
          container
          xs={8}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Grid item style={{ marginTop: "50px" }}>
            <Avatar
              alt="App logo"
              style={{ width: "250px", height: "250px" }}
              src="https://www.clipartkey.com/mpngs/m/41-414184_clipart-black-and-white-download-organization-clipart-client.png"
            />
          </Grid>
          <Grid item>
            <h1 className="heading">Welcome to WeConnect</h1>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={1}
            direction="column"
          >
            <Grid item>
              <Button
                variant="contained"
                onClick={handleCreate}
                style={{
                  padding: "10px 95px",
                  backgroundColor: "rgb(221, 186, 0)",
                }}
              >
                CREATE A ROOM
              </Button>
            </Grid>
            <Grid
              container
              item
              direction="row"
              spacing={2}
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <TextField
                  size="small"
                  id="outlined-basic"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  label="Enter the code"
                  variant="outlined"
                  style={{ backgroundColor: "#ededed" }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={handleJoin}
                  style={{ backgroundColor: "#cbcbcb", padding: "7px 15px" }}
                >
                  JOIN
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={4}
          direction="column"
          justify="center"
          spacing={3}
          style={{ fontSize: "120%" }}
        >
          <Grid item style={{ fontSize: "180%", marginTop: "0px" }}>
            Live meeting with real time text editing and whiteboard.
          </Grid>
          <Grid item>Interviews</Grid>
          <Grid item>Meetings</Grid>
          <Grid item>Friends hang out</Grid>
          <Grid item>Brainstorming ideas</Grid>
          <Grid item>Online Teaching</Grid>
          <Grid item>Painting Collaboration</Grid>
          <Grid item>
            <i>and use your imagination...</i>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          style={{ position: "absolute", bottom: "10px" }}
        >
          <Grid item>
            <a
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.linkedin.com/in/dhruv-sharma-867108124/"
            >
              Dhruv Sharma
            </a>
          </Grid>
          <Grid item>
            <a
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.linkedin.com/in/sayak-china-79a58b194/"
            >
              Sayak China
            </a>
          </Grid>
          <Grid item>
            <a
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.linkedin.com/in/nakul-c-296a2111a/"
            >
              Nakul Chauhan
            </a>
          </Grid>
          {/* <Grid item>
            <a>Dhruv Sharma</a>|<a>Dhruv Sharma</a>|<a>Dhruv Sharma</a>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeComponent;
