const apiUrl = 'https://g37ea79c93b71fe-atenienses.adb.eu-madrid-1.oraclecloudapps.com/ords/atenienses/agua/';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    console.log("CONSEGUIDO :D!")
  })
  .catch(error => {
    console.error('Error:', error);
  });