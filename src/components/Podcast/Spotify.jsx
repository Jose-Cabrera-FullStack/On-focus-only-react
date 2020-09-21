import React from "react";

import "../../assets/styles/components/Podcast.scss";

import SpotifyPlugin from "../../assets/static/images/img/spotify-plugin.png";

const Podcast = () => (
  <section className="podcast__spotify">
    <img src={SpotifyPlugin} alt="Posición donde estará Spotify" />
  </section>
);
export default Podcast;
