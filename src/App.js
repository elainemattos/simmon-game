import './styles/main.scss';

import Board from './game/Board'
import Instructions from './game/Instructions'

const App = () => {
    const App = document.createElement("div")
   
    App.setAttribute("class", "App")
    App.append(Instructions())
    App.append(Board())
    
    return App
}
export default App