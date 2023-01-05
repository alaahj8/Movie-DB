/**
 * help commend help you to choose the correct commands words
 /**
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text){
  console.log("")
  if (text === 'quit\n') {
    quit();
  }
 
  else if(text === 'hello'){
    hello();
  }
  else if(text === 'hello'){
    return "hello!"
  }
  else if (text === 'exit\n') {
    quit();
  }
  else if (text === 'help\n') {
    return "hello, quit, exit,hello x, hello anyone,list,add, remove"
    {
    }
  }
  else if (text === 'list\n') {
    list();
  }
  else if (text === 'add\n') {
    add(x);
  }
  else if (text === 'remove\n') {
    remove();
  }
  else{
    unknownCommand(text);
  }
}
const list = ["hello", "quit", "help"];
list.forEach(myFunction);


const add = require("x");

let remove = ["hello", "quit", "help"];
remove.splice(2);
let remove1 = ["hello", "quit", "help"];
remove1.splice(0);
let remove2 = ["hello", "quit", "help"];
remove2.splice(1);
function remove(text){
  
  if (text != removeEventListener[0,1,2]) {
    return "does not exist"
  }}


  function edit(text){
    if (text =""){
      return "error"
    }
    else if (text=tasks[2]){
      return "new text"
    }
    else{
      return "1 new text"
    }
  }
  function model(hello, quit, help , add , list , remove) {
    this.hello = hello;
    this.quit = quit;
    this.help = help;
    this.add = add;
    this.list = list;
    this.remove = remove;
  }
  describe("done", function() {

    it("checked", function() {
      assert.equal(done(0,1,2));
    });
  
  });
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Alaa hijazi")

