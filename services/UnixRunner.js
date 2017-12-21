import sys from "util"
import {exec} from "child_process"

export function runCommand(command){
  const promise = new Promise((resolve, reject) => {
    const child = exec(command, function (error, stdout, stderr) {
      resolve({
        stdout: stdout,
        stderr: stderr,
        error: error,
        log: logResult(command, stdout, stderr, error)
      })
    })
  })
  return promise
}

function logResult(cmd, stdout, stderr, error){
  return function(){
    const divider = "--------------------"
    console.log(
      `${divider}\n`+
      `command: ${cmd}\n`+
      `stdout: ${stdout}\n`+
      `stderr: ${stderr}\n`+
      `error: ${error ? error : `no error`}\n`+
      `${divider}`
    )
  }
}
