import THREELib from "three-js";
const THREE = THREELib();

let dl1 = new THREE.DirectionalLight();
dl1.setposition = new THREE.Vector3(1,1,1);

let al1 = new THREE.AmbientLight(0x404040,0.7);

export default [ dl1, al1 ];
