export default {
    state: {
        slide: 1,
    },
    rightIncrease(){
        if(this.state.slide == 3){
            this.state.slide = 1
            console.log(this.state.slide)
        }
        else{
            this.state.slide+=1
            console.log(this.state.slide)
            
        }
    },
    leftIncrease(){
        if(this.state.slide == 1){
            this.state.slide = 3
        }
        else{
            this.state.slide-=1
        }
    }
}