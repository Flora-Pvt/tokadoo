
const listsService = {
  getLists: function () {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => { return response.json() })
      .catch(err => console.log(err))
  }
}

export default listsService;