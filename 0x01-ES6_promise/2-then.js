function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      response: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
