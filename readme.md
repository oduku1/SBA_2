# OVERVIEW
The project demonstrates a way to process learner assignment submissions.

We take information about:
    - Course
    - Assignment Group
    - Learner Submissions

Then we use this information to calculate the learner performance, the assigment grades, the average grade of all assignments and while handling late assignments and due_dates.
---
## Data Structures

1. **CourseInfo**  
   Represents a single course (for example, the course name and ID).

2. **AssignmentGroup**  
   Represents a group of assignments within a course.  
   Each assignment has:
   - An ID  
   - A name  
   - A due date  
   - The number of points possible  

3. **LearnerSubmissions**  
   Represents the work submitted by learners.  
   Each submission has:
   - A learner ID  
   - The assignment ID it belongs to  
   - The submission details (date submitted and score received)  

---
