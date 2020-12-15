import React, { useState } from "react";

export default function Takenotes() {
  const [title, settitle] = useState(undefined);
  const [note, setnote] = useState(undefined);
  return (
    <div className="containerColumn">
      <div className="bigTextcolumn">
        <div className="searchfield">
          {" "}
          <span>🔍 </span>Search
        </div>
        <div className="titlecontainer">
          <div className="de del">❎</div>
          <textarea
            className="title"
            autoFocus
            type="text"
            placeholder={title === undefined ? "title..." : undefined}
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />

          <div className="de der">✅</div>
        </div>
        <div className="title">{title === undefined ? undefined : "☆☆☆☆☆"}</div>
        <textarea
          className="notes"
          type="text"
          placeholder={note === undefined ? "write here..." : undefined}
          value={note}
          onChange={(e) => setnote(e.target.value)}
          required
        />
        <div className="categories">⇦ categories ⇨</div>
      </div>
    </div>
  );
}
