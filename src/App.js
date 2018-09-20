import React from 'react';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Header from "./components/Header/Header";
import Won from "./components/GameOverText/Won";
import Lost from "./components/GameOverText/Lost";

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// const allImageSourceNames = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
const allImageSourceNames = ["30sMilkman", "BatBoy", "BurgahBoy", "Byeah", "DannyDevito", "FatElvis", 
                    "FrankPizza", "GlueMan", "Heavy", "Mbyeah", "MonopolyGuy", "Obama", "Sonic", "TheChicken", "TheEgg"];

class App extends React.Component {
  state = {
    allImages: allImageSourceNames.map(image => image),
    unclickedImages: allImageSourceNames.map(image => image),
    clickedImages: [],
    score: 0,
    gameOver: { status: false, didPlayerWin: "no" }
  };

  generateNewCards = () => {
    let ret = [], i = 0;
    const tempAllImages = this.state.allImages.map(image => image);
    // This will choose a random non-clicked image
    ret[0] = this.state.unclickedImages[Math.floor(Math.random() * this.state.unclickedImages.length)];

    // We will now make a temporary array that has every card except our first image
    tempAllImages.splice(tempAllImages.indexOf(ret[0]), 1);
    // Now we will shuffle our temporary array and add the first 2 images to our ret;

    ret = ret.concat(shuffle(tempAllImages).slice(0, 2));

    console.log(ret);
    return shuffle(ret.map(image => <Card image={image} key={i++} handleClickEvent={this.handleClickEvent} />))
  };

  handleClickEvent = event => {
    // To update state correctly we need temporary constants of the state's arrays
    const { unclickedImages, clickedImages } = this.state;
    // score and gameover needs to be able to be changed so we leave it at 'let'
    let { score, gameOver } = this.state;
    // A constant to get the image value of our Card
    // console.log(event.target.attributes);
    const imageName = event.target.attributes.getNamedItem('image').value;
    // An index constant in our unclicked images
    const indexOfImageName = unclickedImages.indexOf(imageName);
    // Splice updates the array it's on and we want
    // it to remove the image we clicked on
    unclickedImages.splice(indexOfImageName, 1);

    // Checking if the player has won

    if (typeof this.state.unclickedImages[0] === "undefined"){
      gameOver.status = true;
      gameOver.didPlayerWin = <Won reset={this.reset}/>;
    }

    // Just incase if the code above triggers at the same time the 
    // user guesses the wrong image
    if (!clickedImages.includes(imageName)) {
      score++;
    } else {
      gameOver.status = true;
      gameOver.didPlayerWin = <Lost reset={this.reset}/>;
    };

    clickedImages.push(imageName);
    this.setState({
      clickedImages: clickedImages,
      unclickedImages: unclickedImages,
      score: score,
      gameOver: gameOver
    });
    // We don't call generateNewCards because by updating App's state and by specifically calling 
    // the function in our render, it will call itself automatically

    // console.log(this.state.)
  };

  reset = () => {
    this.setState({
      allImages: allImageSourceNames.map(image => image),
      unclickedImages: allImageSourceNames.map(image => image),
      clickedImages: [],
      score: 0,
      gameOver: { status: false, didPlayerWin: "no" }
    })
  }
  render() {
    return (
      <div className="bg-faded">
        <Header score={this.state.score} reset={this.reset}/>
        <Wrapper>
          {this.state.gameOver.status ? this.state.gameOver.didPlayerWin : this.generateNewCards()}
          test submit please ignore
        </Wrapper>
      </div>
    );
  };
};






export default App;
