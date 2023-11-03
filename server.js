/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

'use strict'

const Hapi = require('@hapi/hapi')
const testRoute = require('./src/routes')
const Path = require('path')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')

const server = Hapi.server({
    host: 'localhost',
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
})

async function start() {
    await server.register({
        plugin: require('hapi-plugin-mysql'),
        options: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'todo'
        }
    })

    await server.register([
        Vision,
        Inert
    ])

    server.views({
        engines: {
            ejs: require('ejs')
        },
        relativeTo: __dirname,
        path: 'views'
    })

    server.route(testRoute)

    await server.start()
    console.log('Server is running at:', server.info.uri)
}

start()
