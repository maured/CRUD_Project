let connection = require('../config/db')
let moment = require('moment')

class Task {

    constructor (row) {
        this.row = row
    }

    get task () {
        return this.row.task
    }

    get date () {
        return moment(this.row.date)
    }

    get id () {
        return this.row.id
    }

    static create(content, cb) {
        connection.query('INSERT INTO tasks SET task = ?, date = ?', [content, new Date()], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }

    static all(cb) {
        connection.query('SELECT * FROM tasks', (err, rows) => {
            if (err) throw err
            cb(rows.map((row) => new Task(row)))
            //cb(rows)
        })
    }

    static delete(id, cb) {
        connection.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }

}

module.exports = Task