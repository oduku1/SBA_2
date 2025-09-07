const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      },
      {
        id: 4,
        name: "School is Cruel",
        due_at: "2025-01-15",
        points_possible: 300
      },
      {
        id: 5,
        name: "Debugging Basics",
        due_at: "2023-04-20",
        points_possible: 100
      },
      {
        id: 6,
        name: "Asynchronous JavaScript",
        due_at: "2023-05-30",
        points_possible: 200
      }
    ]
  };
  
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    },
  
    // New learner 201
    {
      learner_id: 201,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-26",
        score: 45
      }
    },
    {
      learner_id: 201,
      assignment_id: 5,
      submission: {
        submitted_at: "2023-04-19",
        score: 95
      }
    },
    {
      learner_id: 201,
      assignment_id: 6,
      submission: {
        submitted_at: "2023-06-01",
        score: 180
      }
    },
  
    {
      learner_id: 210,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-28",
        score: 120
      }
    },
    {
      learner_id: 210,
      assignment_id: 4,
      submission: {
        submitted_at: "2025-01-10",
        score: 250
      }
    },
    {
        learner_id: 232,
        assignment_id: 1,
        submission: {
          submitted_at: "2024-02-10",
          score: 20
        }
      },
      {
        learner_id: 555,
        assignment_id: 2,
        submission: {
          submitted_at: "2025-08-11",
          score: 240
        }
      }
  ];



















submission_210 = LearnerSubmissions.filter(s =>s.learner_id === 210)


console.log(submission_210);




  function getLearnerData(course, group, submission) {
    let learnerIds = submission.map(s => s.learner_id);//makes new array of each submission  by learner id
    let uniqueLearners = [...new Set(learnerIds)]; // this takes each submission and gives an array of unique ids so we can iterate using this
    let results = []; // array to store each object into 

    for (let learner of uniqueLearners) {
        const single_learner = {id: learner };
        let learner_submissions = submission.filter(s => s.learner_id === learner); // gives an array of submissions by that learner

        let totalScore = 0;
        let totalPoints = 0;
        try {
            for (let submitted of learner_submissions) {
                let assignment = group.assignments.find(a => a.id === submitted.assignment_id); //this finds assignments that correlates to the submitted assignment through each iteration of the loop.
                if (!assignment) continue;  //skips if the assignment is a null or falsy value; 

                let due_date = new Date(assignment.due_at); //turns the due date from a string to an actual date
                let submitted_at = new Date(submitted.submission.submitted_at);
                let today = new Date();// gets the date at present time

          
                if (due_date > today) continue;   // skips if the assignment isnt due yet

                let submission_score = parseInt(submitted.submission.score); //ParseInt makes sure the value is an integer
                let possible_points = parseInt(assignment.points_possible);

               
                if (submitted_at > due_date) { 
                    submission_score -= 0.1 * possible_points; // late penalty would be the score minus 1/10 of the possible points that was scored
                }

                if (possible_points > 0) {
                    single_learner[assignment.id] = submission_score / possible_points; //adds the assignment key and value to the object after each iteration
                    totalScore += submission_score;
                    totalPoints += possible_points;
                }
            }

            single_learner.avg = totalPoints > 0 ? totalScore / totalPoints : 0;


            results.push(single_learner); //adds the object to the array
          
        } catch {
            console.log("Something is wrong with the data, please fix problem and try again");
        }
    }
      
      return results;
}

console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions))



