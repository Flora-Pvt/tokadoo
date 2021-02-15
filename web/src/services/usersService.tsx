
const usersService = {
  getUsers: function () {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() })
      .catch(err => console.log(err))
  },

  signupUser: function (newUserData) {
    const request = new Request('https://localhost:4000/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(newUserData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    return fetch(request)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        localStorage.setItem('id', data.id)
        window.location.href = '/'
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default usersService;