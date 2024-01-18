import React from "react";
function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} width="300" height="200" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831-e1645400234347.jpg",
  },
  {
    id: 2,
    name: "Samgyupsal",
    image:
      "https://i.namu.wiki/i/-XLXqPWn5KO-fa2e11kPGiSpgxNbWUWh-DHHDZ0wejerKqypeeK8VS4mZL6DpDQRbNe9y1-gTxRb3VA4ElWsQkBCsPGFwfa67i9kK3biRnR86G5r7jjHMXfxd6ruMKUe_4KL82ilcvJqnUvFc7L1UA.webp",
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://i.namu.wiki/i/8XH1rGxN9eCQcz9wXNQSGeFKjRAr26tURQp5jxOTbe4I7OfltUiSPzC0Ei9g14qc9btHWrix8d89NRxQeBdN2qITt_FKNCE6lpbaC5zukOfXfqhgTfkC_dE9zY6hHUBUom8xxVRigGjx4sk9VuOEig.jpg",
  },
  {
    id: 4,
    name: "Kimbop",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/242/110/78cf4cbedd6ea82034eaa80850bca420.jpg",
  },
  {
    id: 5,
    name: "Dongas",
    image:
      "https://i.namu.wiki/i/lbuWOW8aqfenSAcMg5DsIzA-GA6nK6kuvgpKnwSOIEAjerUJ1uyYPRrggp4_2WkT5HDJKYYIZjUq8hOSEDRVHQJ0TyVajmG_JPzws23k34stHZ9cN_iNaG2NH13WdM_8cwddTBJUTTu2wZ3FKLCK_g.webp",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
