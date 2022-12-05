import './scss/style.scss'

const loginContent = document.querySelector('#login-content')
const loginEmail = loginContent.querySelector('#email')
const loginPassword = loginContent.querySelector('#password')
const loginBtn = loginContent.querySelector('#login')

const getData = async (token) => { // тут получаем
    const url = 'https://auth-79770-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const response = await fetch(`${url}news.json?auth=${token}`)
    const data = await response.json()
    console.log(data)
}

const login = async () => {

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
    const apiKey = 'AIzaSyApfCUv4E2TnywKfzA7D9CKz669WIYLW8c'
    const response = await fetch(`${url}${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email: loginEmail.value,
            password: loginPassword.value,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    if(data?.error?.code){
        console.log(data.error.message)
        console.log(data.error.message)
    }else{
        await getData(data.idToken)
    }
}

loginBtn.addEventListener('click', login)

const create = async () => {
    const url = 'https://auth-79770-default-rtdb.asia-southeast1.firebasedatabase.app/'
    const response = await fetch(`${url}news.json`, {
        method: 'POST',
        body: JSON.stringify({
            title: 'Vue',
            des: 'learn components and props'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
}
const createbtn = loginContent.querySelector('#create')

createbtn.addEventListener('click', create)


getData()

