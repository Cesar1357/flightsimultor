AFRAME.registerComponent("gameplay",{
    schema:{
        elementId:{type:"string",default:"#ring1"}
    },
    init:function(){
        var duration = 120;
        var timer = document.querySelector("#timer");
        this.startTimer(duration,timer);
    },
    update:function(){
        this.isCollider(this.data.elementId);
    },
    startTimer:function(duration,timer){
        var minutes;
        var seconds;
        setInterval(()=>{
            if(duration  >= 0){
                minutes = parseInt(duration/60)
                seconds = parseInt(duration%60)
                if(minutes < 10){
                    minutes = "0"+minutes;
                }
                if(seconds < 10){
                    seconds = "0"+seconds;
                }
                timer.setAttribute("text",{value:minutes+":"+seconds})
                duration -= 1;
            }else{
                this.gameOver();
            }
        },1000)
    },
    isCollider:function(elementId){
        const element = document.querySelector(elementId);
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#ring")){
                element.setAttribute("visible",false);
                this.updateTargets();
                this.updateScore();
            }else if(elementId.includes("#bird")){
                this.gameOver();
            }
        })
    },
    gameOver:function(){
        var plane = document.querySelector("#plane_model");
        var element = document.querySelector("#gameover");
        element.setAttribute("visible",true);
        plane.setAttribute("dynamic-body",{mass:1})
    },
    updateTargets:function(){
        var element = document.querySelector("#targets");
        var count = element.getAttribute("text").value;
        var currentTargets = parseInt(count);
        currentTargets -= 1;
        element.setAttribute("text",{value:currentTargets});
    },
    updateScore:function(){
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text",{value:currentScore});
    },

})