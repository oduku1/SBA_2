# OVERVIEW
The project demonstrates a way to process learner assignment submissions.

We take information about:
    - Course
    - Assignment Group
    - Learner Submissions

Then we use this information to calculate the learner performance, the assigment grades, the average grade of all assignments and while handling late assignments and due_dates.
## 📂 Data Structures

### 1. `CourseInfo`
Represents a single course.  
Example:
```js
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};
2. AssignmentGroup
Represents a group of assignments within a course, including their due dates and points possible.
Example:

js
Always show details

Copy code
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
    { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
    // ...
  ]
};
3. LearnerSubmissions
Represents actual submissions from learners for specific assignments.
Each entry contains:

learner_id

assignment_id

A submission object with:

submitted_at (date string)

score (numeric score earned)

Example:

js
Always show details

Copy code
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: { submitted_at: "2023-01-25", score: 47 }
  },
  {
    learner_id: 210,
    assignment_id: 2,
    submission: { submitted_at: "2023-02-28", score: 120 }
  }
];