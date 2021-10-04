import React, { useState } from "react";
import "./styles.css";

const movies = {
  conjuring: [
    {
      name: "The Conjuring: Enfield poltergeist case",
      description:
        "The film deals with the Enfield poltergeist case, which occurred in London from 1977 to 1979. It also depicts the Warrens' investigation of the Amityville haunting.",
      rating: "7.5/10"
    },
    {
      name: "The Conjuring 2: The Enfield Case",
      description:
        "Plot. In 1976, paranormal investigators Ed and Lorraine Warren investigate the Amityville murders at the Amityville house, to determine if a demonic presence was truly responsible for Ronald DeFeo Jr. killing his entire family on November 13, 1974, and the subsequent haunting incident involving the Lutz family.",
      rating: "7.3/10"
    },
    {
      name: "The Conjuring: The Devil Made Me Do It",
      description:
        "The Conjuring 3 dramatizes the real-life possession cases of David Glatzel and Arne Johnson, but manipulates the timeline of events. The Conjuring 3 dramatizes the real-life possession cases of David Glatzel and Arne Johnson, but in doing so manipulates their timeline.",
      rating: "6.3/10"
    }
  ],
  Insidious: [
    {
      name: "Insidious (2010)",
      description:
        "Parents (Patrick Wilson, Rose Byrne) take drastic measures when it seems their new home is haunted and their comatose son (Ty Simpkins) is possessed by a malevolent entity.",
      rating: "6.8/10"
    },
    {
      name: "Insidious: Chapter 2 (2013)",
      description:
        "Soon after their showdown with evil spirits that possessed their son, the Lamberts, Renai (Rose Byrne) and Josh (Patrick Wilson), are ready for their lives to return to normal. However, something still is seriously off, especially with Josh, who -- unbeknown to Renai -- is possessed too. In order to free Josh's soul and finally defeat the malevolent forces around them, Lorraine Lambert (Barbara Hershey) and her ghost-hunting friends investigate the past to save her family's future..",
      rating: "6.6/10"
    },
    {
      name: "Insidious: Chapter 3 (2015)",
      description:
        "A prequel set before the haunting of the Lambert family that reveals how gifted psychic Elise Rainier reluctantly agrees to use her ability to contact the dead in order to help a teenage girl who has been targeted by a dangerous supernatural entity.",
      rating: "6.1/10"
    },
    {
      name: "Insidious: The Last Key (2018)s",
      description:
        "Plot. In 1953, Elise Rainier lives in Five Keys, New Mexico with her parents Audrey and Gerald and younger brother Christian. Elise and Christian encounter a ghost in their bedroom. Frightened, Christian looks for a whistle their mother gave him to call for help, but cannot find it.",
      rating: "5.7/10"
    }
  ],
  Annabelle: [
    {
      name: "Annabelle (2014)",
      description:
        "John Form (Ward Horton) thinks he's found the perfect gift for his expectant wife, Mia (Annabelle Wallis) : a vintage doll in a beautiful white dress. However, the couple's delight doesn't last long: One terrible night, devil worshippers invade their home and launch a violent attack against the couple. When the cultists try to summon a demon, they smear a bloody rune on the nursery wall and drip blood on Mia's doll, thereby turning the former object of beauty into a conduit for ultimate evil.",
      rating: "5.4/10"
    },
    {
      name: "Annabelle creation",
      description:
        "Twelve years after the tragic death of their little girl, a doll-maker and his wife welcome a nun and several girls from a shuttered orphanage into their home, where they become the target of the doll-maker's possessed creation, Annabelle.",
      rating: "6.5/10"
    },
    {
      name: "Annabelle comes home ",
      description:
        "Annabelle is locked in a sacred glass case in the couple's artifacts room that is blessed by Father Gordon to ensure the evil is contained. Sometime later, the Warrens welcome Mary Ellen, who will be in charge of babysitting their daughter, Judy, at the house while they travel overnight to investigate another case.",
      rating: "5.9/10"
    }
  ]
};

var films = Object.keys(movies);

export default function App() {
  const [genre, setGenre] = useState("conjuring");

  function bookClickHandler(genre) {
    // processing
    console.log(genre);
    setGenre(genre); // react call to show output
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="movies">
          🎥
        </span>{" "}
        movies
      </h1>
      <p>explore your genre.</p>
      {/* Actual output set by React using useState */}

      {films.map((genre) => {
        return (
          <button
            onClick={() => bookClickHandler(genre)}
            key={genre}
            style={{
              cursor: "pointer",
              background: "rgb(229, 231, 235)",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul style={{ paddingInlineStart: "0px", textAlign: "left" }}>
        {movies[genre].map((film) => {
          return (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                fontSize: "larger"
              }}
              key={film.name}
            >
              <div>{film.name}</div>
              <div style={{ fontSize: "0.8rem", padding: "0.1rem" }}>
                description: {film.description}
              </div>
              <div style={{ fontSize: "1rem", padding: "0.1rem" }}>
                rating: {film.rating}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
