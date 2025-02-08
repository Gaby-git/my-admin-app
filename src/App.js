/**
 * @file App.js
 * @description Main entry point for the React Admin application.
 * Configures the admin panel, authentication, data provider, theming, and resources.
 */

import React, { useState } from "react"; // Removed unused useEffect
import { Admin, Resource, ThemeProvider } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest"; // Data provider for RESTful API
import authProvider from "./authProvider"; // Authentication provider
import Dashboard from "./components/Dashboard"; // Custom Dashboard with Charts

// Import User Resource Components
import { UserList, UserEdit, UserCreate, UserShow } from "./UserComponents";

// Import Post Resource Components
import PostList from "./components/PostList"; // Custom Post list component
import PostEdit from "./components/PostEdit"; // Custom Post edit component
import { PostCreate, PostShow } from "./PostComponents";

// Import Theming
import { lightTheme, darkTheme } from "./theme";
import { Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Define the data provider with the API endpoint
const dataProvider = simpleRestProvider("http://localhost:3002");

/**
 * @component App
 * @description Main component that initializes and configures the React Admin interface.
 * It includes authentication, data provider setup, theming, and resources for users and posts.
 *
 * @returns {JSX.Element} The Admin component with configured resources.
 */
const App = () => {
  // State to manage theme (light or dark)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );

  /**
   * @function toggleTheme
   * @description Toggles between light and dark themes, storing the preference in localStorage.
   */
  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <Admin
        dashboard={Dashboard} // Set the custom dashboard with charts
        authProvider={authProvider}
        dataProvider={dataProvider}
        theme={theme}
      >
        {/* Theme Toggle Button */}
        <Button
          onClick={toggleTheme}
          startIcon={theme === lightTheme ? <Brightness4Icon /> : <Brightness7Icon />}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          {theme === lightTheme ? "Dark Mode" : "Light Mode"}
        </Button>

        {/* Resource configuration for Users */}
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />

        {/* Resource configuration for Posts */}
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
      </Admin>
    </ThemeProvider>
  );
};

// Export the main application component
export default App;
