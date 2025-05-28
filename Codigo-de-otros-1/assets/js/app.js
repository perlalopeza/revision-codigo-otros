const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se agregó el punto (.) como selector de clase
const $b = document.querySelector('.blog'); //blog es una clase y esta siendo llamada como un id
const $l = document.querySelector('.location');

async function displayUser(username) { // Se agregó la palabra reservada async para el correcto funcionamiento de await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //se agrego la variable data para realizarle la asignacion de los datos
  console.log(data); // cambie el data que se esta llamando por response
  $n.textContent = `${data.name}`; //habían comillas simples y eran comillas invertidas o backticks
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  $n.textContent = `Algo salió mal: ${error}`; //error no esta escrito completo en la funciono y la variable $n estaba siendo llamada sin el simbolo $
}

displayUser('stolinski').catch(handleError);