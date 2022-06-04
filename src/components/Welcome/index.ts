import './styles.css'

const renderWelcomePanel = (container: HTMLElement) => {
  const userName = localStorage.getItem('userName')
  const userPhotoURL=localStorage.getItem('userPhotoURL')
  const currentDate = new Date().toLocaleString()

  const htmlContent = `
        <div id="welcome">
            <img src="${userPhotoURL}">
            <h1>Olá, ${userName},</h1>
            <h1> Seja bem vindo!</h1>
            <h1>${currentDate}</h1>
            <a href="details.html"> Detalhes</a>
            <a href="logout.html">Sair</a>
            
        </div>
    `

  container.innerHTML = htmlContent
}

export default renderWelcomePanel
