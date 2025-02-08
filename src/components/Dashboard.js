import React, { useEffect, useState } from "react";
import { useDataProvider } from "react-admin";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend
} from "recharts";

const Dashboard = () => {
  const dataProvider = useDataProvider();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch users
    dataProvider.getList("users", { pagination: { page: 1, perPage: 100 }, sort: { field: "id", order: "ASC" } })
      .then(({ data }) => setUsers(data));

    // Fetch posts
    dataProvider.getList("posts", { pagination: { page: 1, perPage: 100 }, sort: { field: "id", order: "ASC" } })
      .then(({ data }) => setPosts(data));
  }, [dataProvider]);

  // Group posts by user
  const postsPerUser = users.map(user => ({
    name: user.name,
    postCount: posts.filter(post => post.userId === user.id).length
  }));

  // Count published vs draft posts
  const statusDistribution = [
    { name: "Published", value: posts.filter(post => post.status === "Published").length },
    { name: "Draft", value: posts.filter(post => post.status === "Draft").length }
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <Grid container spacing={3} padding={3}>
      {/* Quick Stats Card */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>Quick Stats</Typography>
            <Typography variant="h6">Total Users: {users.length}</Typography>
            <Typography variant="h6">Total Posts: {posts.length}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Bar Chart - Posts per User */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>Posts Per User</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={postsPerUser}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="postCount" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Pie Chart - Published vs Draft Posts */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>Published vs Draft Posts</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
