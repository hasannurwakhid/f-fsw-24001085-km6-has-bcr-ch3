exports.tampilHalaman = (req, res) => {
  // res.sendFile(path.join(__dirname, "../views", "sewa-mobil.html"));
  res.render("index", { layout: "layouts/main-layout" });
};
