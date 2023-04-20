import express from 'express';
const app = express();

const students = [{
        id: 1,
        name: "weam",
        city: "shuhada",
    },
    {
        id: 2,
        name: "hoda",
        city: "tala",
    },
    {
        id: 3,
        name: "lola",
        city: "shebien",
    },
]

const studentFunction = (request, response) => {
    let output = "<ul>";
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        output += "<li>" + student.name + "</li>";
    }
    output += "</ul>";
    response.send(output);
};

app.get('/students', studentFunction);


app.listen(5000);