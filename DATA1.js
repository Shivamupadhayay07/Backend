const data = {
    A: {
      Subjects: ["Math", "Science", "History"],
      Faculty: ["John Smith", "Jane Doe", "David Johnson"],
      "Start Date": "2023-09-01",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Alice Brown",
          total: {
            completed: 30,
            joinedNew: 15,
            ongoing: 25,
          },
        },
        "Branch B": {
          Faculty: "Bob Wilson",
          total: {
            completed: 28,
            joinedNew: 12,
            ongoing: 22,
          },
        },
      },
    },
    B: {
      Subjects: ["English", "Physics", "Chemistry"],
      Faculty: ["Mary Adams", "Michael Clark", "Sarah Evans"],
      "Start Date": "2023-08-15",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Eve Green",
          total: {
            completed: 35,
            joinedNew: 20,
            ongoing: 30,
          },
        },
        "Branch B": {
          Faculty: "Frank White",
          total: {
            completed: 32,
            joinedNew: 14,
            ongoing: 28,
          },
        },
      },
    },
    C: {
      Subjects: ["Computer Science", "Economics", "Psychology"],
      Faculty: ["George Lee", "Helen Davis", "Ivy Martin"],
      "Start Date": "2023-09-15",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Jack Brown",
          total: {
            completed: 40,
            joinedNew: 25,
            ongoing: 35,
          },
        },
        "Branch B": {
          Faculty: "Jill Smith",
          total: {
            completed: 38,
            joinedNew: 18,
            ongoing: 32,
          },
        },
      },
    },
  };
  
 
//   const dates = Object.keys(data).map((program) => ({
//     Programs: program,
//     Startdate: data[program]["Start Date"],
//     "End date": data[program]["End Date"],
//   }));
  
//   console.log(dates);
  


//   const programAdata = data.A.Branches["Branch A"];
//   console.log(programAdata.total);



   
//   const branch = Object.keys(data).map((program) => ({
//     Programs: program,
//     const 
    
//   }));
  
//   console.log(branch);
  

const duration = Object.keys(data).map(program=>({
    Program: program,
    Duration:(
        new Date(data[program]["End Date"]) - (new Date(data[program]["Start Date"])))/(1000*60*60*24),
    
}));
console.log(duration)