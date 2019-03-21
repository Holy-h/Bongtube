import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

// user에게 받은 쿠키를 이해함
// req.cookies
app.use(cookieParser);
// user에게 받은 정보를 이해함
// req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Logger
// ex) GET / 304 4.176 ms - -
app.use(morgan("dev"));
// helps to secure my Express apps
app.use(helmet());

const handleHome = (req, res) => res.send("I am Home");

const handleProfile = (req, res) => res.send("I am Profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

export default app;
