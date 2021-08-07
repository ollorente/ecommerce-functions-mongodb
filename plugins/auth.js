module.exports = async (next) => {
  const TOKEN = localStorage.getItem('token')
  const CURRENT_USER = localStorage.getItem('currentuser')

  return {
    TOKEN,
    CURRENT_USER
  }
}

// export default ({ app }, inject) => {
//     const nuxtApi = async function(path){
//         return  await fetch('https://api.nuxtjs.dev/' + path).then(res => res.json())
//     }
//     inject('nuxtApi', nuxtApi)
// }
