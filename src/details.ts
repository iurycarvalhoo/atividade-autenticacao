import renderDetailsPanel from './components/details'
import './style.css'

const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if (token) {
  renderDetailsPanel(app)
} else {
  location.href = 'login.html'
}