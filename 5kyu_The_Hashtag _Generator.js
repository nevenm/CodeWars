//The marketing team is spending way too much time typing in hashtags.
//Let's help them with out own Hashtag Generator!

//Here's the deal:

//It must start with a hashtag (#).
//All words must have their first letter capitalized.
//If the final result is longer than 140 chars it must return false.
//If the input or the result is an empty string it must return false.
//Examples
//" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
//"    Hello     World   "                  =>  "#HelloWorld"
//""                                        =>  false



function generateHashtag (str) {
  let cleanedStr = str.replace(/\s\s+/g, ' ').trim();
  if (cleanedStr.length >= 140 || cleanedStr.length < 1 ) {
    return false;
  } else {
    return '#' + cleanedStr.split(' ').map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join('');
  };  
}