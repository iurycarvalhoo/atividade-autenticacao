import { getAuth } from 'firebase/auth'
import firebaseApp from './config/firebase'

const auth = getAuth(firebaseApp)
auth
  .signOut()
  .then(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userPhotoURL')
    localStorage.removeItem('user')
    location.href = 'login.html'
  })
  .catch((error) => console.log(error))