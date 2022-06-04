import renderWelcomePanel from './components/Welcome'
import './style.css'

const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if (token) {
  renderWelcomePanel(app)
} else {
  location.href = 'login.html'
}
