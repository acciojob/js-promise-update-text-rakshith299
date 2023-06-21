const str = "Hello, world!";

const output = document.getElementById("output");

const random = (resolve, reject) => {
	setTimeout(() => {
        resolve()
    }, 1000)
}
const received = new Promise(random);

received.then(() => { 
    output.innerText = str;
    console.log("received");
})


received.catch(() => {
    output.innerText = "Error";
    console.log("rejected");
})
