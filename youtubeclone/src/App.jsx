
import './App.css'

function App() {

  return (
    <>
     <header>
      <div className="header-container">
      <div className="nav-left">
        <button>nav</button>
        <span>logo</span>
      </div>
      <div className="nav-middle">
    <form>

          <input placeholder="Search"/>

         <button className="search-button">S</button>  
               </form>
               
                 </div>

      <div className="nav-right">right</div>
      </div>
      <div className="header-categories">
        <button>All</button>
        <button>Mixes</button>
        <button>Gaming</button>
        <button>Music</button>
        <button>Psychology</button>
        <button>Podcasts</button>
        <button>Soundtracks</button>
        <button>Japanese Music</button>
        <button>Live</button>
        <button>Manga</button>
        <button>Jazz</button>
        <button>Computer Science</button>

      </div>
     </header>
    </>
  )
}

export default App
