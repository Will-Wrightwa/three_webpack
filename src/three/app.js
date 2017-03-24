import THREELib from "three-js";
const THREE = THREELib();

import meshes from './meshes';
import lights from './lights';
var scene, renderer, camera;
var mesh = meshes[0];


init();
animate();

function init() {
  const canvas = document.getElementById('three-canvas');

	scene = new THREE.Scene();

  // createcamera
	camera = new THREE.PerspectiveCamera( 75, canvas.width / canvas.height, 1, 10000 );
	camera.position.z = 1000;

  //add lights
  lights.forEach((m)=>{ scene.add(m) });
  //add meshes
  meshes.forEach((m)=>{ scene.add(m) });


	renderer = new THREE.WebGLRenderer({ canvas:canvas });
  renderer.render( scene, camera );

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render( scene, camera );

}
