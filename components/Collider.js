AFRAME.registerComponent("flying-birds",{
    init: function(){
        for(var i = 1;i <= 20;i++){
            var id = `bird${i}`;
            var posx = (Math.random()*3000+(-1000));
            var posy = (Math.random()*2+(-1));
            var posz = (Math.random()*3000+(-1000));
            var position = {x:posx,y:posy,z:posz};
            this.createBirds(id,position);
        }
    },
    createBirds: (id,position)=>{
        var terrain = document.querySelector("#terrain");
        var bird = document.createElement("a-entity");
        bird.setAttribute("id",id);
        bird.setAttribute("position",position);
        bird.setAttribute("scale",{x:500,y:500,z:500});
        bird.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf");
        bird.setAttribute("animation-mixer",{});
        bird.setAttribute("static-body",{shape:"sphere",sphereRadius:3})
        terrain.appendChild(bird);
    }
})