/* eslint-disable no-useless-catch */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const customResponse = require('./response')

const testRoute = [
    {
        // bagian render HTML dari GET "/"
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index', {
                title: 'Percobaan EJS dengan API'
            })
        }
    },
    {
        // bagian request data API
        method: 'GET',
        path: '/getData1',
        handler: (request, h) => {
            const props = {
                data1: 'ini merupakan data1 dari API',
                data2: 'ini merupakan data2 dari API',
                data3: 'ini merupakan data3 dari API'
            }

            const response = h.response({
                data1: props.data1,
                data2: props.data2,
                data3: props.data3
            })
            response.code(200)

            return response
        }
    },
    {
        // bagian untuk akses file main.js 
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true
            }
        }
    },
    {
        // untuk akses get from table todo mysql
        method: 'GET',
        path: '/getDatabase',
        handler: async (req, res) => {
            const sql = 'SELECT * FROM `todo_list`'
            try {
                const result = await req.app.db.query(sql)
                console.log(result)
                return customResponse(200, result, 'Mengambil data dari database', res)
            } catch (error) {
                throw error
            }
        }
    },
    {
        // bagian show.ejs
        method: 'GET',
        path: '/show',
        handler: (request, h) => {
            return h.view('show', {
                title: 'Percobaan EJS dengan API'
            })
        }
    },
    {
        // bagian untuk Update database dari UI(front-end)
        method: 'PUT',
        path: '/show',
        handler: async (req, res) => {
            const { id, updatedTasks } = req.payload
            console.log(id.value)
            // console.log(id, 'kali', updatedTasks)
            const sql = `UPDATE \`todo_list\` SET \`tasks\` = '${updatedTasks}', \`status\` = '1' WHERE \`todo_list\`.\`id\` = ${id};`

            try {
                const result = await req.app.db.query(sql)
                console.log(result)
                return customResponse(200, result, 'Update data ke database', res)
            } catch (error) {
                throw error
            }
        }
    },
    {
        // bagian untuk Update database dari UI(front-end)
        method: 'POST',
        path: '/show',
        handler: async (req, res) => {
            const { newInput } = req.payload
            const sql = `INSERT INTO \`todo_list\` (\`id\`, \`tasks\`, \`status\`) VALUES (NULL, '${newInput}', '');`
            try {
                const result = await req.app.db.query(sql)
                console.log(result)
                return customResponse(200, result, 'Menambah data ke database', res)
            } catch (error) {
                throw error
            }
        }
    },
    {
        method: 'DELETE',
        path: '/show',
        handler: async (req, res) => {
            const { id } = req.payload
            const sql = `DELETE FROM todo_list WHERE \`todo_list\`.\`id\` = ${id}`

            try {
                const result = await req.app.db.query(sql)
                console.log(result)
                return customResponse(200, result, 'Menghapus data dari database', res)
            } catch (error) {
                throw error
            }
        }
    }
]

module.exports = testRoute
