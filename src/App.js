import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🏁": "Chequered Flag"
};

const emojiArray = Object.keys(emojiDict);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function onChangeHandler(emoji) {
    if (emoji in emojiDict) {
      // console.log(emoji);
      setEmojiMeaning(emojiDict[emoji]);
    } else {
      // console.log(emoji);
      setEmojiMeaning("Sorry the database doesn't have it.");
    }
  }
  function onClickHandler(emoji) {
    emoji = emoji.target.textContent;
    setEmojiMeaning(emojiDict[emoji]);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={(event) => onChangeHandler(event.target.value)}></input>
      <div>
        {emojiArray.map((emoji) => {
          return (
            <span key={emoji} onClick={onClickHandler}>
              {emoji}
            </span>
          );
        })}
      </div>
      <h1>{emojiMeaning}</h1>
    </div>
  );
}
