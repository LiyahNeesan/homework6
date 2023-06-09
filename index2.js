// Первый обработчик сработает, потому что он не был удалён методом removeEventListener. 
// Чтобы удалить обработчик, необходимо передать именно ту функцию, которая была назначена в качестве обработчика. 
// Несмотря на то, что код идентичен, в removeEventListener передаётся новая, другая функция.
// Для того чтобы удалить функцию-обработчик, нужно где-то сохранить ссылку на неё, например:

function handler() {
    alert(1);
  }
  
  button.addEventListener("click", handler);
  button.removeEventListener("click", handler);

  // Обработчик button.onclick сработает независимо от addEventListener.