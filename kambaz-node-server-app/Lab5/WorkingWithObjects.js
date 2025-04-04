const assignment = {
    id: 1, name: "Module Name",
    description: "Module Description",
    course: "Course",
  };

const module = {
    id: 2, name: "Module Name",
    description: "Module Desc",
    course: "Course",
};

  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });


    
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });

    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });

    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });
    
  };


  
  