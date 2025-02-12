"use strict"

import fs from "fs/promises"
import { join } from "path"

const __dirname = process.cwd()

export default async function router(req, res) {
// A simple router implementation

  // Headers
  var headers = {}


  // Logs
  console.log(`>> # Requested http://${req.headers.host}${req.url} from ${req.socket.remoteAddress}`)


try {
  // Files
  var errorFile = await fs.readFile(join(__dirname,'pages','not_found.html'))
  const fileType = req.url.split(".")[1];
  let filePath; 
  // Get HTML files
  if(!fileType) { 
      filePath = join(__dirname,'pages',req.url,'index.html');
  } else if(fileType == "html") { 
      console.log(req.url.split('/index.html')[0])
      filePath = join(__dirname,'pages',req.url.split('/index.html')[0],'index.html'); 
  // Get JS and CSS files
  } else if(fileType == "js" || fileType == "css") {
      filePath = join(__dirname,'pages',req.url);
  // Get static files
  } else {
      filePath = join(__dirname,'static',req.url);
  }


  const contentFile = await fs.readFile(filePath);
  const stats = await fs.stat(filePath);
  const lastModified = stats.mtime.toUTCString()

  //Responses
  headers['Last-Modified'] = lastModified; 
  res.writeHead(200, headers)
  res.end(contentFile)

 } catch(err) {
      res.writeHead(404, headers)
      res.end(errorFile)
      console.error(err)
 }
}
