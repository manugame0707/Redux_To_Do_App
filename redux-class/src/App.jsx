import { Provider } from 'react-redux'
import './App.css'
import Todo from './components/Todo'
import { store } from './app/store'

function App() {


  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  )
}

export default App
