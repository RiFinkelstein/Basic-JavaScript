const makeServerRequest = new Promise((resolve, reject) => {
  
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not recieved");

  }
});

makeServerRequest.then(result => {
  console.log(result);
});

