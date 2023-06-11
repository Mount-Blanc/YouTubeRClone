import sloth from './sloth.jpg';
import './App.css';

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

      <div className="nav-right">
        <span>create</span>
        <span>notifications</span>
        <span>Sign in</span>

      </div>
      </div>

     </header>
    < div class="side-bar">
    <a href="#" class="links active">home</a>
    <a href="#" class="links">explore</a>
    <a href="#" class="links">subscription</a>
    <a href="#" class="links">library</a>
    <a href="#" class="links">history</a>
    <a href="#" class="links">your watch leater</a>
    <a href="#" class="links">like video</a>
    <a href="#" class="links">show more</a>
</div>
<div class="filters">
    <button class="filter-options active">all</button>
    <button class="filter-options">CSS</button>
    <button class="filter-options">web development</button>
    <button class="filter-options">python</button>
    <button class="filter-options">entertainment</button>
    <button class="filter-options">marvel</button>
    <button class="filter-options">javascript</button>
    <button class="filter-options">artificial intelligence</button>
    <button class="filter-options">machine learning</button>
    <button class="filter-options">trending</button>
</div>
<div class="video-container">
    <div class="video">
        <img src={sloth} class="thumbnail" alt="Thumbnail"/>
        <div class="content">
            <img src={sloth} class="channel-icon" alt="ChannelIcon"/>
            <div class="info">
                <h4 class="title">Title</h4>
                <p class="channel-name">Channel Name</p>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default App
