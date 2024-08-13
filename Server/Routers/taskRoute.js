import express from 'express'
import conn from '../conn/db.js';

const router = express.Router();
// Saving Task
router.post("/add_task", (req, res) => {
    const sql = "INSERT INTO todo(`tasks`) VALUES (?)";
    conn.query(sql, [req.body.input], (err, result) => {
        if (err) return res.json({ status: false });
        if (result) return res.json({ status: true });
    })
})

// Fetching Tasks
router.get("/tasks", (req, res) => {
    const sql = "SELECT * FROM todo";
    conn.query(sql, (err, result) => {
        if (err) return res.json({ status: false, error: err });
        if (result.length > 0) return res.json({ status: true, data: result });
    })
})

// Deleting Tasks
router.delete("/delete_task/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM todo WHERE id = ?";
    conn.query(sql, [id], (err, result) => {
        if (err) return res.json({ status: false, error: err });
        if (result) return res.json({ status: true, data: 'Deleted Successfully..' });
    })

})

export { router as taskRouter }