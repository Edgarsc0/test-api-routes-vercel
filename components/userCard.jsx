
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function UserCard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/getUsers");
            console.log(response.data);
            const { users } = response.data;
            setData(users);
        }
        fetchData()
    }, [])
    return (
        <>
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
            
            }
            }>
                {data.map(item => (
                    <MediaCard key={item.id} user={item} />
                ))}
            </div>
        </>
    )
}



function MediaCard({ user }) {
    const { address, age, contactNumber, dob, email, firstName, id, imageUrl, lastName, salary } = user;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imageUrl}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {firstName} {lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {dob}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}