import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const CommentCard = (props) => {
    return (
        <Card sx={{ width: '9cm' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        By: {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="body2" color="text.secondary">
                    Email:{props.email}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default CommentCard