function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true;
      if (success) {
        const data = 'Success!';
        resolve(data); // Resolving the promise with data
      } else {
        reject(new Error('Error occured')); // Rejecting the promise with an error message
      }
    }, 1000);
  });
  return myPromise;
}

export default getResponseFromAPI;
