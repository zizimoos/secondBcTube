import routes from "./routes";
import multer from "multer";
const multerVideo = multer({ dest: "uploads/videos/" });

export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = "bcTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
