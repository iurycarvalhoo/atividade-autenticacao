import './styles.css'

const renderDetailsPanel = (container: HTMLElement) => {
  const userName = localStorage.getItem('userName')
  const userPhotoURL=localStorage.getItem('userPhotoURL')
  const userEmail=localStorage.getItem('userEmail')

  const htmlContent = `
        <div id="details">
            <img src="${userPhotoURL}">
            <h1>${userName}!</h1>
            <h1>${userEmail}</h1>
            <a href="index.html"> Home</a>
            <a href="logout.html">Sair</a>
        </div>
    `

  container.innerHTML = htmlContent
}

export default renderDetailsPanel