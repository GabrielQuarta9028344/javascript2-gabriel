const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

localStorage.setItem('user-without-json', user);
const userWithoutJson = localStorage.getItem('user-without-json');
const withoutJsonResult = document.createElement('p');
withoutJsonResult.textContent = `Opgeslagen waarde: ${userWithoutJson}`;
document.querySelector('#zonder-json').appendChild(withoutJsonResult);

localStorage.setItem('user-with-json', JSON.stringify(user));
const userWithJson = JSON.parse(localStorage.getItem('user-with-json'));
const withJsonResult = document.createElement('pre');
withJsonResult.textContent = JSON.stringify(userWithJson, null, 2);
document.querySelector('#met-json').appendChild(withJsonResult);
