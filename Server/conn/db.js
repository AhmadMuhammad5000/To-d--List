import mysql from 'mysql';

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'todo-list'
});

conn.connect((err) => {
    if (err) {
        console.log("Failed To connect database");
    } else {
        console.log("Connection Successfull ...");
    }
})

export default conn