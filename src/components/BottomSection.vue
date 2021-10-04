<template>
  <div class="bottom-section">
    <img src="../assets/image-about-dark.jpg" alt="aboutdark">
    <div class="about">
      <h1>ABOUT OUR FURTNITURE</h1>
      <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique or pick a cohesive them that best expresses your insterests and what inspires you. Find the furtniture pieces you need, from traditional to contemporary styles or anything in-between. Product specialists are available to help you create your dream space.</p>
    </div>
    <img src="../assets/image-about-light.jpg" alt="aboutlight">
  </div>
</template>

<script>

export default {
  name: 'BottomSection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;400&display=swap');
  .bottom-section{
    display: flex;
  }
  .bottom-section img{
    width: 29%;
  }
  .about{
    text-align: left;
    margin: 40px 40px 0px 40px;
    font-family: 'Spartan', sans-serif;
    
  }
  .about h1{
    letter-spacing: 4px;
    font-weight: 900;
    font-size: 14px;
  }
  .about p{
    line-height: 20px;
    color: hsl(0, 0%, 63%);
    font-size: 12px;
  }
</style>
