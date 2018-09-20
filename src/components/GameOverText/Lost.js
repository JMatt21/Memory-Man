import React from 'react';
import Reset from "./Reset";

export default ({reset}) => {
return (
   <p>Woops! Looks like you have already clicked that image! You can click <Reset reset={reset}>here</Reset> to restart!</p>
   );
};