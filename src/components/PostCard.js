import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const PostCard = (props) => {
  return (
    <Card sx={{ width: '9cm' }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.body}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button onClick={props.onClick} style={{color:'#03045E'}}  size="small" color="primary">
     View Comments<ChatBubbleIcon/>
      </Button>
    </CardActions>
  </Card>
  )
}

export default PostCard