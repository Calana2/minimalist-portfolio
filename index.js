"use strict"

import http from "http"
import router from "./router.js"

const host = "0.0.0.0"
const port = "3000"

const server =  http.createServer(router)
 console.log('> Starting server...')


server.listen(port, host, ()=>{
 console.log(`> Listening on http://${host}:${port}`)
})



