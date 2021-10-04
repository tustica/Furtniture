<template>
    <div class="slide1">
        <div class="leftside fade-in">
            <img id="leftpic" src="../assets/desktop-image-hero-1.jpg" alt="chair">
        </div>
        <div class="rightside">
            <h1 class="fade-in">Discover innovative ways to decorate</h1>
            <p class="fade-in" id="righttext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic, fuga, eum sapiente voluptas aut veniam dolorum odit maxime deleniti temporibus repellat magnam unde facere dolore expedita id mollitia recusandae.</p>
            <p id="shopnow">SHOP NOW <svg id="rightarrow" width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Slide1',
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;400&display=swap');
    .slide1{
        display: flex;
        width: 100vw;
        height: 410px;

    }
    .leftside{
        width: 55%;
        transform: translateX(-20%);
    }
    #leftpic{
        height: 100%;
        width: 100%;
    }
    .rightside{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
        font-family: 'Spartan', sans-serif;
        margin-top: 30px;
    }
    .rightside h1{
        width: 60%;
        text-align: left;
        transform: translateX(30%);
    }
    #righttext{
        width: 60%;
        line-height: 20px;
        color: hsl(0, 0%, 63%);
        font-size: 12px;
        text-align: left;
        transform: translateX(30%);
    }
    #shopnow{
        letter-spacing: 5px;
        width: 60%;
        text-align: left;
        color: black;
        font-size: 12px;
    }
    #shopnow:hover{
        cursor: pointer;
        color: hsl(0, 0%, 63%);
        transition: all .3s ease-in-out;
    }
    #rightarrow{
        margin-left: 50px;
    }
    .fade-in{
        opacity: 0;
        transition: 1s ease-in-out;
        animation: fade .4s ease-in-out, slide .4s ease-in-out;
        animation-fill-mode: forwards;
    }
    @keyframes fade{
        100%{
            opacity: 1;
            
        }
    }
    @keyframes slide{
        100%{
            transform: translateX(0);
        }
    }
</style>
