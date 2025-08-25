// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

// --- Mock data ---
const TOKEN = "9157bc44-2230-4831-a2b4-646ba039c03b";

const loginResponse = { token: TOKEN };

const userResponse = {
    username: "admin",
    firstName: "John",
    lastName: "Doe",
    image: "https://avatars.githubusercontent.com/u/97137007?v=4",
};

// --- Helpers ---
function extractToken(req) {
    const h = req.headers.authorization || "";
    console.log("WSTV", req, loginResponse);
    // Accept both "Bearer <token>" and raw token (for convenience)
    if (h.startsWith("Bearer ")) return h.slice("Bearer ".length).trim();
    return h.trim();
}

// --- Routes ---
app.get("/health", (_req, res) => {
    res.status(200).json({ ok: true });
});

app.post("/login", (req, res) => {
    try {
        const { username, password, code } = req.body || {};
        if (!username || !password || !code) {
            return res.status(400).json({ error: "Missing username or password" });
        }

        if (username === "admin" && password === "password" && code === "12345") {
            // return an object, not a bare string
            return res.status(200).json(loginResponse);
        }

        return res.status(401).json({ error: "Wrong credentials" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Unexpected error" });
    }
});

app.get("/user", (req, res) => {
    try {
        const token = extractToken(req);
        if (token !== TOKEN) {
            return res.status(401).json({ error: "Wrong auth token" });
        }
        return res.status(200).json(userResponse);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Unexpected error" });
    }
});

// --- Start ---
app.listen(PORT, () => {
    console.log(`Mock API listening at http://localhost:${PORT}`);
});