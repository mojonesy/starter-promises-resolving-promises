const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will I have a nice evening?";
const promise = welcome();
const tellPromise = tell();

// tellPromise
//     .then((result) => {        //Returns the promise from tell()
//         console.log(question); //Logs the question
//         console.log(result);   //Logs the result of tell()
//     })
//     .catch((error) => {        //Returns the error from tell()
//         console.log(error);    //Logs the error from tell()
//     });

/*
welcome()
    .then(console.log)      // Logs the result of welcome()
    .then(goodbye)          // Returns the promise from goodbye()
    .then(console.log)      // Logs the result of goodbye()
    .catch(console.error);  // Logs the error of either welcome() or goodbye()

    
welcome()
    .then((welcomeMessage) =>
      goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
    ) // welcomeMessage and goodbyeMessage combined.
    .then(console.log) // Logs combines messages
    .catch(console.error); // Logs error from welcome() or goodbye()


welcome()
    .then(console.log) // Logs the result of welcome()
    .then(tell) // Calls tell, which returns a rejected promise (no question supplied).
    .then(console.log) // Skipped because tell returned a rejected promise.
    .catch(console.error) // Logs error from tell() or welcome()
    .then(goodbye) // Returns promise from goodbye()
    .then(console.log) // Logs the result from goodbye()
    .catch(console.error); // Logs error only from goodbye()
*/

async function fullSession(question) {
    try {
        const welcomeMessage = await welcome();
            console.log(welcomeMessage);
        const fortune = await tell(question);
            console.log(question);
            console.log(fortune);
        const bye = await goodbye();
            console.log(bye);
    }
    catch (error) {
        console.log(`${error}`);
    }  
}

fullSession(question);