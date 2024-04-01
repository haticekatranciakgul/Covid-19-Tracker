import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import {useState, useEffect } from 'react';


function Main(props) {
  const { title } = props;

  const file_name ='blog-post.1.md';
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`./markdown/${file_name}`)
    .then(res => {
      fetch(res.default)
      .then(res => res.text())
      .then(res => setPost(res));
    })
    .catch(err => console.log(err))
  } );

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        
        {title}
      </Typography>
      <Divider />
       <Markdown>{ post }</Markdown>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;