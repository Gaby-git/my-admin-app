const authProvider = {
    login: ({ username }) => {
        if (username === "admin") {
            localStorage.setItem("auth", username);
            return Promise.resolve();
        }
        return Promise.reject("Invalid username or password");
    },
    logout: () => {
        localStorage.removeItem("auth");
        return Promise.resolve();
    },
    checkAuth: () => 
        localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
};

export default authProvider;


