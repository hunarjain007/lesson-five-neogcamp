import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🏁": "Chequered Flag"
};

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function onChangeHandler(emoji) {
    if (emoji in emojiDict) {
      console.log(emoji);
      setEmojiMeaning(emojiDict[emoji]);
    } else {
      console.log(emoji);
      setEmojiMeaning("Sorry the database doesn't have it.");
    }
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={(event) => onChangeHandler(event.target.value)}>
        {}
      </input>
      <h1>{emojiMeaning}</h1>
    </div>
  );
}
