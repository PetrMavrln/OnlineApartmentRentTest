import React from 'react';

const getFormatedText = (text: string) => {
  return text?.split('\n').map((str, i) => <p key={`p_${i}`}>{str}</p>);
};

export default getFormatedText;
