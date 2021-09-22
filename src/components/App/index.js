import { useState, useEffect } from "react";
import axios from "axios";
import firebase from "../../firebase";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import {
  Typography,
  MuiThemeProvider,
  makeStyles,
  Container,
} from "@material-ui/core";
import { theme } from "../../themes/theme";

import Post from "../Post";

const useStyles = makeStyles(() => ({
  mainHeader: {
    marginTop: "20px",
    fontWeight: "600",
  },
  creditText: {
    fontSize: "14px",
    color: "gray",
    marginBottom: "30px",
  },
}));

function App() {
  const classes = useStyles();
  const [apiArr, setApiArr] = useState([]);
  const [likeArr, setLikeArr] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    const apiUrl = "https://api.nasa.gov/planetary/apod";
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 10);
    const newDateFormat =
      startDate.toLocaleDateString("en-US", { year: "numeric" }) +
      "-" +
      startDate.toLocaleDateString("en-US", { month: "numeric" }) +
      "-" +
      startDate.toLocaleDateString("en-US", { day: "numeric" });

    axios({
      url: apiUrl,
      method: "GET",
      params: {
        api_key: apiKey,
        start_date: newDateFormat,
      },
    }).then((res) => {
      const reverseDataArr = res.data.reverse();
      setApiArr(reverseDataArr);
      setLoadedData(true);
    });
    const dbRef = firebase.database().ref();
    dbRef.on(
      "value",
      (snapshot) => {
        const myData = snapshot.val();
        const newArray = [];
        for (let propertyName in myData) {
          const itemObject = {
            key: propertyName,
            liked: myData[propertyName],
          };
          newArray.push(itemObject);
        }
        setLikeArr(newArray);
      },
      []
    );
  }, []);

  return loadedData ? (
    <MuiThemeProvider theme={theme}>
      <Container>
        <Typography component="h1" variant="h5" className={classes.mainHeader}>
          Spacestagram
        </Typography>
        <Typography className={classes.creditText}>
          Brought to you by NASA's image API
        </Typography>
        {apiArr.map((photoObj) => {
          return (
            <Post key={photoObj.title} likeArr={likeArr} photoObj={photoObj} />
          );
        })}
      </Container>
    </MuiThemeProvider>
  ) : (
    <LoadingAnimation />
  );
}

export default App;
