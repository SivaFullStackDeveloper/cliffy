const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));
/* IMPORTANT: serve public folder */
app.use(express.static(path.join(__dirname, "public")));

/* explicit home route (fixes Cannot GET / in edge cases) */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* APK route */
app.get("/apk", (req, res) => {
    res.download(path.join(__dirname, "public/apk/NetMirror.apk"));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});