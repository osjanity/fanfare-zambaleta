<template>
  <div class="meta-container">

    <!-- Main text -->
    <div class="container-flavor">
      <h1 class="header-font-left">Gregory Masaki Jenkins</h1>
      <p class="paragraph-font-left">
        is clarinetist, saxophonist, vocalist, and bouzouki player based in Oakland, CA, with a focus in Greek and Balkan styles. He gigs regularly throughout the San Francisco Bay Area with the groups Fanfare Zambaleta, Helios, Istanbul Connection, Dodona, Disciples of Markos, Agapi Mou, and more; and is a regular host of Balkan Sundays events in SF and Berkeley.
      </p>
    </div>

    <!-- Greg Cover image -->
    <img class="full-width-img" alt="" src="../assets/gmj.jpg">

    <!-- Teaching info -->
    <div class="container-flavor">
      <h2 class="header-font-left">Teaching</h2>
      <p class="paragraph-font-left">
        Greg teaches private lessons in-person and online. Greg also teaches at the <a class="link-colors" href="https://www.eefc.org">Eastern European Folklife Center</a>'s Balkan Music and Dance Workshops in Mendocino, CA and at Lark Traditional Arts' <a class="link-colors" href="https://www.larkcamp.org">Lark in the Morning Music and Dance Camp</a>.
      </p>
    </div>

    <!-- Greg side image -->
    <img class="full-width-img" alt="" src="../assets/gmjside.jpg">

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
    </div>

  </div>
</template>


<script>
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
  line-height: 1.2;
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
.booking-container {
  padding: 40px 8% 60px;
  background-color: black;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link-colors {
  color: white;
  transition: opacity 0.2s;
}
.link-colors:hover {
  opacity: 0.75;
}
.email-link {
  color: rgb(202, 202, 203);
  text-decoration: underline;
  transition: color 0.2s;
}
.email-link:hover {
  color: white;
}
</style>
