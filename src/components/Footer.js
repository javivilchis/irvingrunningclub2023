import React from 'react'

 const Footer =() => {

    const goTo = (url) =>{
        window.location.href = url;
      }

  return (
    <footer className="bg-dark">
        <div className="container py-4">
    
    <p className="text-center text-white">&copy; 2025 Irving Running Club &middot; :) <a href="https://www.facebook.com/groups/irvingrunningclub" target="_blank" rel="noopener noreferrer" onPress={() => goTo(`https://www.facebook.com/groups/irvingrunningclub`)}>IRC on Facebook</a> &middot;  
    <a href="https://www.javivilchis.com" target="_blank" rel="noopener noreferrer" onPress={() => goTo(`https://www.javivilchis.com`)}>web master</a> v.1.0.4 build 20241219.1</p>
    <a href="https://www.buymeacoffee.com/javivilchis"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=javivilchis&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" alt="buyme coffee" /></a>
    </div>
  </footer>
  )
}

export default Footer;