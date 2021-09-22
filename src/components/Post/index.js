import { Button, Typography, Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  post: { marginBottom: "50px" },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  },
  postTitle: {
    fontWeight: "500",
  },
  postText: {
    fontSize: "14px",
    margin: "5px 0",
  },
  button: {
    marginTop: "15px",
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const { hdurl, title, date, explanation } = props.photoObj;
  const likeArr = props.likeArr;
  const likedObj = likeArr.find((x) => x.key === title);
  const liked = likedObj ? likedObj.liked : false;
  const [like, setLike] = useState(liked);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <Grid container spacing={5} className={classes.post}>
      <Grid item xs={12} md={6} className={classes.imgContainer}>
        <img src={hdurl} alt={title} className={classes.img} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography component="h2" className={classes.postTitle}>
          {title}
        </Typography>
        <Typography className={classes.postText}>Date: {date}</Typography>
        <Typography className={classes.postText}>{explanation}</Typography>

        {like ? (
          <Button
            variant="outlined"
            onClick={toggleLike}
            color="primary"
            className={classes.button}
          >
            Unlike
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={toggleLike}
            color="primary"
            className={classes.button}
          >
            Like
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Post;
