import './App.css';
import React, { useState } from 'react';
import one from './images/1313186.jpeg';
import two from './images/beauty-and-the-beast-disney-castle-rainbow-hd-wallpaper-preview.jpeg';
import three from './images/cinderella-disney-cinderella-entertainment-other-hd-art-wallpaper-preview.jpeg';
import four from './images/ddm5sqe-c7776925-e778-40f3-9e5f-ab83013ed63e.jpeg';
import five from './images/del7dz1-a838bdc7-636d-40c8-bc43-76fbc24840a6.jpeg';
import six from './images/del7e29-c10a9569-5d2f-4a8f-89f1-e327c3bbc54d.jpeg';
import seven from './images/74fce6a8769d0a78c2d9140c2a1cdd35.jpeg'

function App() {
  
  const [image, setImage] = useState(one);

  const images = [one, two, three, four, five, six, seven];

  const toggleImageLeft = () => {
    setImage((prev) => {
      const newIndex = images.indexOf(prev) - 1;
      if (newIndex >= 0) {
        return images[newIndex];
      } else {
        return images[images.length - 1];
      }
    })
  }

  const toggleImageRight = () => {
    setImage((prev) => {
      const newIndex = images.indexOf(prev) + 1;
      if (newIndex <= images.length - 1) {
        return images[newIndex];
      } else {
        return images[0];
      }
    })
  }
  
  return (
    <div className="App">
      <div className="obrazekContainer">
        <button className="larr arr" onClick={toggleImageLeft}>&larr;</button>
        <img className="obrazek" src={image} width="900" height="600"></img>
        <button className="rarr arr" onClick={toggleImageRight}>&rarr;</button>
      </div>
      <div className="dotButtonsContainer">
          {images.map(element => {
            let classArr = ["dotButton"];
            if (element === image) {
              classArr.push("activeButton")
            }
            return <button key={element} className={classArr.join(' ')} onClick={() => {
              setImage(element);
            }}></button>
          })}
        </div>
    </div>
  );
}

export default App;
