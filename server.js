const jsonServer = require("json-server"); 
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Ensure CORS headers allow React Admin to read `Content-Range`
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "X-Total-Count, Content-Range");
    
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    
    next();
});

// Middleware to force `Content-Range` for pagination support
server.use((req, res, next) => {
    if (req.method === "GET" && req.path.match(/^\/\w+$/)) { // Match /users, /posts, etc.
        const resource = req.path.slice(1); // Extract resource name
        const items = router.db.get(resource).value(); // Fetch resource data from db.json

        if (items) {
            const total = items.length;
            res.header("Content-Range", `${resource} 0-${total - 1}/${total}`);
            res.header("X-Total-Count", total);
        }
    }
    next();
});

// Use the router
server.use(router);

// Error handling middleware
server.use((err, req, res, next) => {
    console.error("❌ Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
});
