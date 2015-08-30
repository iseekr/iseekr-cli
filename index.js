#!/usr/bin/env node
var program = require('commander');
 
program
  .version('0.0.1')
    .arguments('<action> [arg1]')
      .action(function (cmd,arg1) {
          console.log(cmd,arg1);
                      });
                       
                      program.parse(process.argv);
