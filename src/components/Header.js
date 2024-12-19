import React from 'react'

const Header = () => {
    const goTo = (url) =>{
        window.location.href = url;
      }

  return (<><header data-bs-theme="dark">
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand" onProgress={() => goTo('https://www.irvingrunningclub.com')}>Irving Running Club</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="col">&nbsp;</div>
        <ul className="d-flex navbar-nav me-auto mb-2 mb-md-0">
          {/* <li className="nav-item">
            <span className="nav-link active" aria-current="page" onProgress={() => goTo('https://www.irvingrunningclub.com')}>Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" ><a style={{textDecoration: 'none'}} href="https://www.facebook.com/groups/irvingrunningclub"
            target="_blank"
            rel="noopener noreferrer">Facebook</a></span>
          </li> */}
          <li>
          <span className="nav-link"><a style={{textDecoration: 'none'}} href="https://www.buymeacoffee.com/javivilchis"
            target="_blank"
            rel="noopener noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-black.png" alt="Buy Me A Coffee" style={{height: 40, width: "100%", backgroundColor: 'black'}} /></a></span>
          </li>
          {/* <li className="nav-item">
            <span className="nav-link">Location</span>
          </li> */}
        </ul>
       
      </div>
    </div>
  </nav>
</header></>)
}

export default Header;
