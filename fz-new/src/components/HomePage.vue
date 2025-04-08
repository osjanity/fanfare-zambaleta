<template>
  <center>
  <div class="meta-container">

      <!-- Header -->
      <header class="header">
        <center>
          <img width='40%' alt="Logo design by Rosie Steffy" src="../assets/fz_logo_white.jpeg">
        </center>
      </header>
      
      <!-- Band image -->
        <center>
          <img width='100%' alt="Photo by Jenette Sellin" src="../assets/fz-garden.jpg">
        </center>
      
      <!-- Main text -->
      <div class="container-flavor">
        <h1 class="header-font-left" > Bay Area Balkan Brass</h1>
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

      
      <!-- Additional Images -->
        <center>
          <img width='100%' alt="Photo by Saban Redzic" src="../assets/fz-moraga.jpeg">
        </center>
      
      <!-- Bandcamp Player -->

          <h1 class="header-font-center">Listen</h1>
          <div class="bandcamp-container">
            <iframe style="border: 0; width: 350px; height: 588px;" src="https://bandcamp.com/EmbeddedPlayer/album=3396076375/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="https://fanfarezambaleta.bandcamp.com/album/fanfare-zambaleta">Fanfare Zambaleta by Fanfare Zambaleta</a></iframe>
          </div>

      
      <!-- Additional Images -->
        <center>
          <img width='100%' alt="Photo by Tano Brock" src="../assets/FZangle.jpg">
        </center>

      
      <!-- Booking Info -->
       <div class="booking-container">
        <h1 class="header-font-center">Contact</h1>
        <p class="paragraph-font-center">
          For booking, inquiries, and all other questions, please contact
          <br />
          Gregory Masaki Jenkins <br /> fanfarezambaleta@gmail.com
        </p>

      <!-- FB and Youtube icon links -->
            <a class="link-colors" href="https://www.facebook.com/FanfareZambaleta/">
              <img class="icon-link" width='25px' alt="Link to FZ Facebook Page" src="../assets/FacebookIcon.png">
            </a>
            <a class="link-colors" href="https://www.youtube.com/user/FanfareZambaleta">
              <img class='icon-link' width='25px'  alt="Link to FZ Youtube Page" src="../assets/YouTubeIcon.png">
            </a>
        </div>

      </div>
  </center>
</template>


<script>
export default {
  data() {
    return {
      bandcampUrl: "https://bandcamp.com/EmbeddedPlayer/album=3396076375/bgcol=333333/linkcol=FFFFFF/artwork=small/tracklist=true"
    };
  },
  components: {
  },
};
</script>

<style scoped>
.root {
}
.meta-container{ 
    justify-content: center;
    width: 800px;
    background-color: black;
}
.icon-link {
  width: 25px;
  margin: 10px;
}
.header {
  background-color: black;
  padding-top: 15px;
  padding-bottom: 10px;
}
.header-font-center {
  color: white;
  text-align: center;
}
.header-font-right {
    color: white;
  text-align: right;
}
.header-font-left{ 
  color: white;
  text-align: left;
}
.paragraph-font-center {
  color: rgb(202, 202, 203);
  text-align: center;
  font-size:large;
}
.paragraph-font-right {
  color: rgb(202, 202, 203);
  text-align: right;
  font-size: large;
}
.paragraph-font-left{ 
  color: rgb(202, 202, 203);
  text-align: left;
  font-size: large;
}
.container-flavor {
  padding: 50px 5% 50px;
  background-color: black;
}
.bandcamp-container {
  padding: 35px 5% 77px;
  background-color: black;
}
.booking-container {
  padding: 10px 5% 100px;
  background-color: black;
}
.link-colors {
  color: white;
}
</style>

