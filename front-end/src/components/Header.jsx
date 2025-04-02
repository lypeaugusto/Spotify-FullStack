import'react'
import logo from '../assets/logo/spotify-logo.png'


const header = () => {
  return (
    <div className="header">
        <a href="/ "><img src={logo} alt="Spotify Logo" /></a>
        <a href="/" className="header_link"><h1>Spotify</h1></a>
      

    </div>
  )
}

export default header