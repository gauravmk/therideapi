import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ success: true });
});

app.get("/boom", (req, res) => {
  throw new Error("boom");
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
