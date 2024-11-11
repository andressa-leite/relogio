const allDigits = {
    "0": [
      " _ ",
      "| |",
      "|_|"
    ],
    "1": [
      "   ",
      "  |",
      "  |"
    ],
    "2": [
      " _ ",
      " _|",
      "|_ "
    ],
    "3": [
      " _ ",
      " _|",
      " _|"
    ],
    "4": [
      "   ",
      "|_|",
      "  |"
    ],
    "5": [
      " _ ",
      "|_ ",
      " _|"
    ],
    "6": [
      " _ ",
      "|_ ",
      "|_|"
    ],
    "7": [
      " _ ",
      "  |",
      "  |"
    ],
    "8": [
      " _ ",
      "|_|",
      "|_|"
    ],
    "9": [
      " _ ",
      "|_|",
      " _|"
    ],
    ":": [
      "   ",
      " . ",
      " . "
    ]
  };

const sevenSegmentify = timeStr => {
  if(!/^\d\d:\d\d$/.test(timeStr)){
    console.error("Ivalid format. Expected 'hh:mm'");
    return;
  };
  
  if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(timeStr)) {
    console.error("Invalid format. Expected 'hh:mm'");
    return;
  };
  
  let outputLines = ["", "", ""];
  
  for (let i = 0; i < timeStr.length; i++){
    let eachDigit = timeStr[i];
    for(let j = 0; j < 3; j++){
      outputLines[j] += allDigits[eachDigit][j] + " ";
    }
  };
  
  for (let i = 0; i < outputLines.length; i++){
    console.log(outputLines[i]);
  };
};
sevenSegmentify("10:00");
module.exports = sevenSegmentify;