<template>
  <div class="meta-container">

    <!-- Header -->
    <header class="header">
      <img class="logo" alt="Logo design by Rosie Steffy" src="../assets/fz_logo_white.jpeg">
    </header>

    <!-- Band image -->
    <img class="full-width-img" alt="Photo by Jenette Sellin" src="../assets/fz-garden.jpg">

    <!-- Main text -->
    <div class="container-flavor">
      <h1 class="header-font-left">Bay Area Balkan Brass</h1>
      <p class="paragraph-font-left">
        Fanfare Zambaleta (roughly meaning crazy street party with brass)
        is an eight piece Balkan Brass band specializing in spirited music
        of the Serbian, Macedonian, Bulgarian, Greek and especially the Romani
        people. Combining a love of the classic brass bands of the past with
        the modern sounds coming out of the Balkans, Fanfare Zambaleta brings
        an irresistible blend of old and new to get you dancing! They've learned
        from some of the greats including Demiran Ćerimović, Džambo Aguševi
        Orkestar and Nizo Alimov (of Kočani Orkestar) and are now embarking on
        a new journey to write original tunes inspired by their deep love of the music.
      </p>
      <h1 class="header-font-right">Musicians</h1>
      <p class="paragraph-font-right">
        The band is directed by Gregory Masaki Jenkins (alto sax, clarinet)
        and features Joey Friedman (alto sax), Noah Levitt, Peter Bonos, and Max Miller-Loran
        (trumpets), Rachel MacFarlane, Adam Waite, and Brendan Mauro (mid horns), Evan Stuart (sousaphone)
        and Ivan Velev (percussion, vocals).
      </p>
    </div>

    <!-- Additional Image -->
    <img class="full-width-img" alt="Photo by Saban Redzic" src="../assets/fz-moraga.jpeg">

    <!-- Listen Section -->
    <div class="listen-section">
      <h2 class="header-font-center">Listen</h2>
      <div class="bandcamp-embed">
        <iframe style="border: 0; width: 350px; height: 588px;" src="https://bandcamp.com/EmbeddedPlayer/album=3396076375/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="https://fanfarezambaleta.bandcamp.com/album/fanfare-zambaleta">Fanfare Zambaleta by Fanfare Zambaleta</a></iframe>
      </div>
    </div>

    <!-- Additional Image -->
    <img class="full-width-img" alt="Photo by Tano Brock" src="../assets/FZangle.jpg">

    <!-- Contact Section -->
    <div class="booking-container">
      <h2 class="header-font-center">Contact</h2>
      <p class="paragraph-font-center">
        For booking, inquiries, and all other questions, please contact
        <br />
        Gregory Masaki Jenkins
        <br />
        <a class="email-link" href="mailto:fanfarezambaleta@gmail.com">fanfarezambaleta@gmail.com</a>
      </p>

      <!-- Social icon links -->
      <div class="icon-link-container">
        <a class="icon-anchor" href="https://www.facebook.com/FanfareZambaleta/">
          <img class="icon-link" alt="Link to FZ Facebook Page" src="../assets/FacebookIcon.png">
        </a>
        <a class="icon-anchor" href="https://www.youtube.com/user/FanfareZambaleta">
          <img class="icon-link" alt="Link to FZ Youtube Page" src="../assets/YouTubeIcon.png">
        </a>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      bandcampUrl: "https://bandcamp.com/EmbeddedPlayer/album=3396076375/bgcol=333333/linkcol=FFFFFF/artwork=small/tracklist=true"
    };
  },
  components: {},
};
</script>

<style scoped>
.meta-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: black;
}
.header {
  background-color: black;
  padding: 20px 0 15px;
  display: flex;
  justify-content: center;
}
.logo {
  width: 40%;
  height: auto;
  display: block;
}
.full-width-img {
  width: 100%;
  height: auto;
  display: block;
}
h1, h2 {
  letter-spacing: 0.04em;
}
.header-font-center {
  color: white;
  text-align: center;
  margin-top: 0;
  padding-bottom: 10px;
}
.header-font-right {
  color: white;
  text-align: right;
}
.header-font-left {
  color: white;
  text-align: left;
}
p {
  line-height: 1.7;
}
.paragraph-font-center {
  color: rgb(202, 202, 203);
  text-align: center;
  font-size: large;
}
.paragraph-font-right {
  color: rgb(202, 202, 203);
  text-align: right;
  font-size: large;
}
.paragraph-font-left {
  color: rgb(202, 202, 203);
  text-align: left;
  font-size: large;
}
.container-flavor {
  padding: 50px 5%;
  background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.listen-section {
  padding: 40px 5% 60px;
  background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.bandcamp-embed {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.booking-container {
  padding: 40px 8% 60px;
  background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.email-link {
  color: rgb(202, 202, 203);
  text-decoration: underline;
  transition: color 0.2s;
}
.email-link:hover {
  color: white;
}
.icon-link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
}
.icon-anchor {
  display: flex;
  transition: opacity 0.2s;
}
.icon-anchor:hover {
  opacity: 0.7;
}
.icon-link {
  width: 32px;
  height: auto;
  display: block;
}
</style>
