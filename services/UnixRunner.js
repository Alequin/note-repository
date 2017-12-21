const sys = require('util')
const exec = require('child_process').exec;

function runCommand(command){
  const promise = new Promise((resolve, reject) => {
    const child = exec(command, function (error, stdout, stderr) {
      resolve({
        stdout: stdout,
        stderr: stderr,
        error: error,
        log: logResult(stdout, stderr, error)
      })
    })
  })
  return promise
}

function logResult(stdout, stderr, error){
  return function(){
    const divider = "--------------------"
    console.log(divider);
    console.log("stdout: "+stdout)
    console.log("stderr: "+stderr)
    if(error){
      console.log("error: "+error);
    }
    console.log(divider);
  }
}

module.exports = runCommand
