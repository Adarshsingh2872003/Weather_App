import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  "./InfoBox.css"

function InfoBox({Info}) {

    let Cold_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Rain_URL ="https://images.unsplash.com/photo-1737472794232-4c8be24ba535?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Hot_URL  = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className='InfoBox'>
      
      <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {Info.humidity > 80
             ? Rain_URL
              : (Info.temp<20)
              ? Cold_URL 
              : Hot_URL
            }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p> temperature :  {Info.temp}&deg;C</p>  
          <p>  Max_temperature :  {Info.temp_max}&deg;C</p> 
          <p> Min_temperature :  {Info.temp_min}&deg;C</p>  
          <p> Humidity :  {Info.humidity}</p>
          <p> feels_like :  {Info.feels_like}</p> 
          <p> weather is :  {Info.weather}</p>       
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default InfoBox
