import React from 'react';
import Reset from "./Reset";

export default ({reset}) => {
return (
   <p>You have guessed all the images correctly! You can click <Reset reset={reset}>here</Reset> to restart!</p>
   );
};