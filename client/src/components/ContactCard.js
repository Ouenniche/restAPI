import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux'
import {deleteContact, getOneContact} from '../redux/actions/contactActions'
import { useNavigate } from 'react-router-dom';

export default function ContactCard({contact}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleDelete=()=>{
    dispatch(deleteContact(contact._id))
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://slp-statics.astockcdn.net/static_assets/staging/22spring/homepage/featured-contributors/card-5.jpg?width=580&format=webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {contact.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {contact.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleDelete}>Delete</Button>
        <Button size="small"  variant="contained" onClick={()=>{
          dispatch(getOneContact(contact._id));
          navigate('/edit')
        }} >Edit</Button>
      </CardActions>
    </Card>
  );
}
