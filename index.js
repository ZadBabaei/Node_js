const express = require("express");
const app = express();
const courses = [
  { id: 1, name: "comp 2001" },
  { id: 2, name: "comp 2002" },
  { id: 3, name: "comp 2003" },
];

app.get("/", (req, res) => {
  res.send("Check again please!!!!!");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if(!course){res.status(404).send('course with the given id not found')};
  res.send(course);
});
app.listen(port, () => console.log(`listening on port ${port}.....`));
