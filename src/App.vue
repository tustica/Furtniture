<template>
  <div id="app">
    <Header/>
    <Scroll/>
    <Slide1 v-if="slide==1"/>
    <Slide2 v-if="slide==2"/>
    <Slide3 v-if="slide==3"/>
    <BottomSection/>
  </div>
</template>

<script>
import BottomSection from './components/BottomSection.vue'
import Header from './components/Header.vue'
import Slide1 from './components/Slide1.vue'
import Scroll from './components/Scroll.vue'
import Slide2 from './components/Slide2.vue'
import Slide3 from './components/Slide3.vue'
import store from '@/store.js'

export default {
  name: 'App',
  components: {
    BottomSection,
    Header,
    Slide1,
    Slide2,
    Slide3,
    Scroll
  },
  data(){
    return store.state
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: hidden;
}
body, html{
    margin: 0px;
}
</style>
