import { randomUUID } from 'node:crypto';
import { Database } from "./database.js"


const database = new Database()

export const routes = [
    {
        method: 'GET',	
        path: "/tasks",
        handler: async (req, res) => {
            const tasks = await database.select('tasks')
            return res.end(JSON.stringify(tasks))
        }
    },

    {
        method: 'POST',
        path: "/tasks",
        handler:(req, res) =>{
            const {title, description} = req.body
            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at: Date.now().toString(),
                update_at: Date.now().toString(),
            }

            database.insert('tasks', task)
            return res.writeHead(201).end()
        }
    }
]