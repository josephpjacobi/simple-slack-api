const Joi = require('joi');
const express = require('express');
const app = express();
const { channels, people } = require('./data');

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World')
});

//Get all courses
app.get('/api/channels', (req, res) => {
  res.send(channels);
});

app.get('/api/people', (req, res) => {
  res.send(people);
});

//Get 1 course with a specific ID
app.get('/api/channels/:id', (req, res) => {
  const channel = channels.find(c => c.id === parseInt(req.params.id));
  if (!channel) {
    res.status(404).send("the course with the given ID was not found");
  }
    res.send(channel);
});

app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  //Look up course with given ID
  //If not existing return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("the course with the given ID was not found");
  }
  //Validate the couse 
  //If invalid, return 400 - bad request
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  //update course
  //Return the updated course
  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  //Look up course
  //Not existing, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("the course with the given ID was not found");
  }

  //Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  //REturn the same course
  res.send(course);
});

const validateCourse = (course) => {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, schema);
}

const port = process.env.PORT || 3001;
//export port= add number here
app.listen(port, () => console.log(`listening on port ${port}`));