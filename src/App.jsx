import PageLayout from './components/PageLayout'
import './App.css'
import { NewDatesProvider } from './contexts/Context'


function App() {


  return (
    <>

      <NewDatesProvider>
        <PageLayout />
      </NewDatesProvider>

    </>
  )
}

export default App
