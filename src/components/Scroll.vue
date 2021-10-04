<template>
    <div class="scroll">
        <div @click="arrowLeft()" class="arrowright">
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
        </div>
        <div @click="arrowRight()" class="arrowleft">
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
        </div>
    
    </div>
</template>
<script>
import store from '@/store.js'
export default {
    name: 'Scroll',
    methods: {
        arrowRight(){
            store.rightIncrease()
        },
        arrowLeft(){
            store.leftIncrease()
        }
    }
    
}
</script>
<style scoped>
    .scroll{
        display: flex;
        width: 130px;
        height: 65px;
        position: absolute;
        top: 345px;
        left: 751px;
    }
    .arrowright, .arrowleft{
        width: 50%;
        padding: 20px;
        background-color: black;
    }
    .arrowright:hover, .arrowleft:hover{
        opacity: 50%;
        transition: .2s ease-in-out 0s;
        cursor: pointer;
    }

</style>
