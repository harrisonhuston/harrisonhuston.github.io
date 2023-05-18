// import three js and orbit controls
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// set scene, camera, background color, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 15, window.innerWidth / 
window.innerHeight, 0.1, 1000 );

var backgroundColor = new THREE.Color(0xF5F5F5); // Replace with your desired color
scene.background = backgroundColor;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// resize withod with resize
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

// set orbit controls
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 10, 20, 100 );
controls.update();

// animate function for orbit controls
function animate() {

	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}

// set camera position
camera.position.z = 55;
camera.position.y = 5;
camera.position.x = 0;

// call animate funtcion
animate();

// define texture to load jpg enter image
const texture = new THREE.TextureLoader().load('images/Enter.jpg'); 

// create geometry H letters
const geometry = new THREE.BoxGeometry( 1, 3, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.x = -3;
cube.position.y = 4;

const geometry2 = new THREE.BoxGeometry( 1, .5, 1 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );
cube2.position.x = -2;
cube2.position.y = 4;

const geometry3 = new THREE.BoxGeometry( 1, 3, 1 );
const material3 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );
cube3.position.x = -1;
cube3.position.y = 4;

const geometry4 = new THREE.BoxGeometry( 1, 3, 1 );
const material4 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const cube4 = new THREE.Mesh( geometry4, material4 );
scene.add (cube4);
cube4.position.x = 3;
cube4.position.y = 4;

const geometry5 = new THREE.BoxGeometry( 1, .5, 1 );
const material5 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const cube5 = new THREE.Mesh( geometry5, material5 );
scene.add( cube5 );
cube5.position.x = 2;
cube5.position.y = 4;

const geometry6 = new THREE.BoxGeometry( 1, 3, 1 );
const material6 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.x = 1;
cube6.position.y = 4;

// create geometry rings
const geometry8 = new THREE.TorusGeometry(3, .05);
const material8 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring = new THREE.Mesh( geometry8, material8);
scene.add(ring);
ring.position.y = -1;

const geometry9 = new THREE.TorusGeometry(3, .05);
const material9 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring2 = new THREE.Mesh( geometry9, material9);
scene.add(ring2);
ring2.position.y = -1;

const geometry10 = new THREE.TorusGeometry(3, .05);
const material10 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring3 = new THREE.Mesh( geometry10, material10);
scene.add(ring3);
ring3.position.y = -1;

const geometry11 = new THREE.TorusGeometry(3, .05);
const material11 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring4 = new THREE.Mesh( geometry11, material11);
scene.add(ring4);
ring4.position.y = -1;

const geometry12 = new THREE.TorusGeometry(3, .05);
const material12 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring5 = new THREE.Mesh( geometry12, material12);
scene.add(ring5);
ring5.position.y = -1;

const geometry13 = new THREE.TorusGeometry(3, .05);
const material13 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring6 = new THREE.Mesh( geometry13, material13);
scene.add(ring6);
ring6.position.y = -1;

const geometry14 = new THREE.TorusGeometry(3, .05);
const material14 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring7 = new THREE.Mesh( geometry14, material14);
scene.add(ring7);
ring7.position.y = -1;

const geometry15 = new THREE.TorusGeometry(3, .05);
const material15 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring8 = new THREE.Mesh( geometry15, material15);
scene.add(ring8);
ring8.position.y = -1;

const geometry16 = new THREE.TorusGeometry(3, .05);
const material16 = new THREE.MeshBasicMaterial( { color: 0x375268 } );
const ring9 = new THREE.Mesh( geometry16, material16);
scene.add(ring9);
ring9.position.y = -1;

// create geometry entre cube
const geometry7 = new THREE.BoxGeometry(2.5,2.5,2.5);
const material7 = new THREE.MeshBasicMaterial( { map:texture} );
const cube7 = new THREE.Mesh( geometry7, material7 );
scene.add( cube7 );
cube7.position.y = -1;

// raycaster and mouse
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Event listener for mouse down
document.addEventListener('mousedown', onDocumentMouseDown, false);

// function for mouse down "click", take to url if y position matches
function onDocumentMouseDown(event) {
	event.preventDefault();
  
	// Calculate mouse position relative to the container element
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
	// Raycasting
	raycaster.setFromCamera(mouse, camera);
	var intersects = raycaster.intersectObjects(scene.children);
  
	if (intersects.length > 0) {
		var clickedObject = intersects[0].object;
		var clickedObjectPosition = clickedObject.position;
	
		// Check the position of the clicked object
		if (clickedObjectPosition.x === 0 && clickedObjectPosition.y === -1 && 
			clickedObjectPosition.z === 0) {
		  // Go to URL
		  window.location.href = 'https://harrisonhuston.github.io/home.html';
		} 
	}
  }


// anymate geometries by defining rotations
function rotate() {
    requestAnimationFrame (rotate);

    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;
	cube2.rotation.x += 0.01;
	cube2.rotation.y += 0.01;
	cube2.rotation.z += 0.01;
	cube3.rotation.x += 0.01;
	cube3.rotation.y += 0.01;
	cube3.rotation.z += 0.01;

	cube4.rotation.x -= 0.01;
	cube4.rotation.y -= 0.01;
	cube4.rotation.z -= 0.01;
	cube5.rotation.x -= 0.01;
	cube5.rotation.y -= 0.01;
	cube5.rotation.z -= 0.01;
	cube6.rotation.x -= 0.01;
	cube6.rotation.y -= 0.01;
	cube6.rotation.z -= 0.01;

	cube7.rotation.y += .01;
	cube7.rotation.x -= .01;
	cube7.rotation.z += .01;

	ring.rotation.y += .015;
	ring.rotation.x += .015;
	ring.rotation.z += .015;

	ring2.rotation.y -= .015;
	ring2.rotation.x -= .015;
	ring2.rotation.z -= .015;

	ring3.rotation.y -= .01;
	ring3.rotation.x -= .01;
	ring3.rotation.z -= .01;

	ring4.rotation.y += .01;
	ring4.rotation.x += .01;
	ring4.rotation.z += .01;

	ring5.rotation.y -= .025;
	ring5.rotation.x -= .025;
	ring5.rotation.z -= .025;

	ring6.rotation.y += .025;
	ring6.rotation.x += .025;
	ring6.rotation.z += .025;

	ring7.rotation.y -= .035;
	ring7.rotation.x -= .035;
	ring7.rotation.z -= .035;

	ring8.rotation.y += .035;
	ring8.rotation.x += .035;
	ring8.rotation.z += .035;

	

renderer.render(scene, camera);
}

// call rotate function to animate geometries
rotate();
