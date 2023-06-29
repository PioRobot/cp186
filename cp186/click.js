AFRAME.registerComponent("d",{
tick:function(){
    window.addEventListener("click",(e)=>{
        var price = document.createElement("a-entity");
        price.setAttribute("position",{x:0,y:1,z:0})
        price.setAttribute("spe-particles",{color:white,blue,black,red; distribution:sphere;randomize-velocity:true;radius:1;particle-count:800;velocity:1;velocity-spread:15;drag:1;max-age:2;duration:-1;blending:additive;active-multiplier:1000;size:1,1,1,0})
        <a-entity position="0 1 0" spe-particles="color:white,blue,black,red; distribution:sphere;randomize-velocity:true;radius:1;particle-count:800;velocity:1;velocity-spread:15;drag:1;max-age:2;duration:-1;blending:additive;active-multiplier:1000;size:1,1,1,0"></a-entity>
    })
}})