import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest"; // Import the Dashboard component
import authProvider from "./authProvider"; // Import authProvider
import Dashboard from "./Dashboard";// Import the Dashboard component
import PostList from "./PostList"; // Import the new PostList component

const dataProvider = simpleRestProvider("http://localhost:3001");

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" />
        <Resource name="posts" list={PostList} />
    </Admin>
);

export default App;