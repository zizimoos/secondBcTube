import routes from "./routes";

export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = "bcTube";
  res.locals.routes = routes;
  next();
};
