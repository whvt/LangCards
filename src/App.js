import logo from './logo.svg'
import './App.css'
import App from './App'
import Card from './Card/Card'
import DrawButton from './DrawButton/DrawButton'

function Render() {
  fetch(
    'https://raw.githubusercontent.com/whvt/LangCards/main/public/language_samples/English/nouns/nature.json',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)))

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='Header-app-name'>LangCards</h1>
      </header>

      <div className='App'>
        <div className='cardRow'>
          <Card
            eng={this.state.currentCard.eng}
            han={this.state.currentCard.han}
            pin={this.state.currentCard.pin}
          />
        </div>
        <div className='buttonRow'>
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    </div>
  )
}

export default Render
