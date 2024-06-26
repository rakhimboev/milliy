import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/* 1 ~ entrance */
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/* 2 ~ sessions */

/* 3 ~ views */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* 4 ~  routes */

app.use("/admin", routerAdmin); //BSSR => EJS => Admin page
app.use("/", router); //SPA => ReactJS => Client page

export default app;
