import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const sphereGeometry = new THREE.SphereGeometry( 1, 1, 1 );
const coneGeometry = new THREE.ConeGeometry( 1, 1, 1 );

const boxMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const boxCube = new THREE.Mesh( boxGeometry, boxMaterial );

scene.add( boxCube );

camera.position.z = 5;

function animate() {

  boxCube.rotation.x += 0.01;
  boxCube.rotation.y += 0.01;

  renderer.render( scene, camera );
}