export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "search", searchingBy });
};

export const video = (req, res) =>
  res.send(`this is video from videoController`);
export const upload = (req, res) =>
  res.send(`this is upload from videoController`);
export const videoDetail = (req, res) =>
  res.send(`this is videoDetail from videoController`);
export const editVideo = (req, res) =>
  res.send(`this is editVideo from videoController`);
export const deleteVideo = (req, res) =>
  res.send(`this is deleteVideo from videoController`);
