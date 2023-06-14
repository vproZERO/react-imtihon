import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../../../../style/style.css"
 

export const Carousel2 = () => {
    return (
      <div className="container slide_container">
        <div className="slide__icons">
          <div>
            <a className='slide__icon' target='blank' href="https://www.mercedes-benz.com/en/">
              <img style={{ objectFit:"contain"}} src="https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-0.png" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.bmw.ru/ru/index.html">
              <img style={{ objectFit:"contain"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.ford.com/cars/mustang/">
              <img style={{ objectFit:"contain"}} src="https://logos-world.net/wp-content/uploads/2023/02/Ford-Mustang-Logo.png" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.dodge.com/challenger.html">
              <img style={{ objectFit:"contain"}} src="https://1000logos.net/wp-content/uploads/2022/12/Dodge-Challenger-Logo.png" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.porsche.com/">
              <img style={{ objectFit:"contain"}} src="https://logohistory.net/wp-content/uploads/2023/01/Porsche-Logo.svg" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.bugatti.com/">
              <img style={{ objectFit:"contain"}} src="https://www.carlogos.org/logo/Bugatti-logo-1024x768.png" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://uzautomotors.com/">
              <img style={{ objectFit:"contain"}} src="https://uzautomotors.com/images/uploads/349f3d62c9f3e88727b97507991a7fe3.jpg" alt="img" />
            </a>
          </div>
        </div>
      </div>
    )
}

