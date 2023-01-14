AFRAME.registerComponent("target",{
    init: function(){
        for(var i = 1;i <= 20;i++){
            var id = `ring${i}`;
            var posx = (Math.random()*3000+(-1000));
            var posy = (Math.random()*2+(-1));
            var posz = (Math.random()*3000+(-1000));
            var position = {x:posx,y:posy,z:posz};
            this.createRings(id,position);
        }
    },
    createRings: function(id,position){
        var terrain = document.querySelector("#terrain");
        var ring = document.createElement("a-entity");
        ring.setAttribute("id",id);
        ring.setAttribute("position",position);
        ring.setAttribute("material","color","gold");
        ring.setAttribute("geometry",{primitive:"torus",radius:8})
        ring.setAttribute("static-body",{shape:"sphere",sphereRadius:1.5})
        terrain.appendChild(ring);
    }
})