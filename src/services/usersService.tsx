
const usersService = {
  getUsers: function () {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() })
      .catch(err => console.log(err))
  }
}

export default usersService;