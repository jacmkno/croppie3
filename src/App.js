import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import "croppie/croppie.css";
var Croppie = require("croppie");

export default function App() {
  const [loaded, setLoaded] = useState(null);
  const el = useRef(null);
  // SRC: https://foliotek.github.io/Croppie/

  useEffect(
    e => {
      if (loaded) return;
      setLoaded(true);
      console.log("XXXXYYYGG:", el.current);
      var c = new Croppie(el.current, {
        viewport: {
          width: 150,
          height: 200
        }
      });
      c.bind({
        url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cumulus_Clouds_over_Yellow_Prairie2.jpg/1280px-Cumulus_Clouds_over_Yellow_Prairie2.jpg",
        points: [77, 469, 280, 739]
      })
        .catch(e => {
          console.log("TTTT1:", e);
        })
        .then(d => {
          console.log("TTTT2:", d);
        });
    },
    [loaded]
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbo</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        style={{ width: "500px", height: "500px", border: "Solid 4px red" }}
        ref={el}
      />
    </div>
  );
}
