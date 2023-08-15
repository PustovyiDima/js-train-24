// fetch("url", {});

// const request = new Request();
// fetch(request);

const data = { id: 1, name: "User", age: 50 };
async function getData(data) {
   const result = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "Get", //Post відправляємо,
      //   body: JSON.stringify(data),
      headers: {
         "Content-Type": "aplication/json", //які дання ми відправляємо
         Autorization: "Bearer your_token", //токен по якому бекенд авторизує на сайті
      },
   }); //.then((res) => res.json());
   const dataFromServer = await result.json();
   //    const dataFromServer = await result.text();
   console.log(dataFromServer);
   console.log(result.status);
}

getData(data);
