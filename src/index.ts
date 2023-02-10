import Express from "express";
import cors from "cors";

import productRouter from "./routes/products";
// import userRouter from "./routes/users";
const app = Express();

app.use(Express.json());

app.use(cors());

app.use("/products", productRouter);
// app.use("/users", userRouter);

const port = 8002;
// host: local host
app.listen(port, () => console.log(`The server is running on port ${port}`));
