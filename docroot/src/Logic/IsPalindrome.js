import React from 'react';

const IsPalindrome = ({ inputString }) => {
  const checkPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
      if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  const isPalindrome = checkPalindrome(inputString);

  return (
    <div>
      <h2>Check Palindrome</h2>
      {isPalindrome ? <p>{inputString} is a Palindrome</p> : <p>{inputString} is not a Palindrome</p>}
    </div>
  );
};

export default IsPalindrome;