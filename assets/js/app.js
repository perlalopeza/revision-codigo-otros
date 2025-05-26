const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se agregó el punto (.) como selector de clase
const $b = document.querySelector('.blog'); //blog es una clase y esta siendo llamada como un id
const $l = document.querySelector('.location');

async function displayUser(username) { // Se agregó la palabra reservada async para el correcto funcionamiento de await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response); // cambie el data que se esta llamando por response
  $n.textContent = '${response.name}'; 
  $b.textContent = '${response.blog}';
  $l.textContent = '${response.location}';
}

function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  $n.textContent = `Algo salió mal: ${error}` //error no esta escrito completo en la funciono y la variable $n estaba siendo llamada sin el simbolo $
}

displayUser('stolinski').catch(handleError);