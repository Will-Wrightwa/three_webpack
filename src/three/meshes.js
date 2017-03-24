import THREELib from "three-js";
const THREE = THREELib();


let geometry = new THREE.BoxGeometry( 200, 200, 200 );
let material = new THREE.MeshLambertMaterial( { color: 0x0066ff } );

let box1 = new THREE.Mesh( geometry, material );



export default [ box1 ];
