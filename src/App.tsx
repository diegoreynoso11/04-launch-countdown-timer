import Icons from './components/Icons'
import NewCountDown from './pages/newCountDown'

function App() {
  
  return (
    <body className='bg-[url(./images/bg-stars.svg)] flex flex-col items-center min-h-screen'>
      <NewCountDown></NewCountDown>
      <footer className="absolute bottom-0 w-full flex justify-center items-center">
        <img src="./images/pattern-hills.svg" className='w-full object-cover' alt="patron de montañas" />
        <Icons></Icons>
      </footer>
    </body>
  )
}

export default App
