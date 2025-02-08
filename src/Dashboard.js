import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
    const [stats, setStats] = useState({ users: 0, posts: 0 });

    useEffect(() => {
        // Fetch total users count
        fetch("http://localhost:3002/users")
            .then((res) => res.json())
            .then((data) => setStats((prev) => ({ ...prev, users: data.length })));

        // Fetch total posts count
        fetch("http://localhost:3002/posts")
            .then((res) => res.json())
            .then((data) => setStats((prev) => ({ ...prev, posts: data.length })));
    }, []);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">📊 Dashboard</Typography>
                <Typography variant="body1">👤 Total Users: {stats.users}</Typography>
                <Typography variant="body1">📝 Total Posts: {stats.posts}</Typography>
            </CardContent>
        </Card>
    );
};

export default Dashboard;
