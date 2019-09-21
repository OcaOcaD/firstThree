const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
//My cubes array;
var cubes = [];
var different = [];
createCube = (w, h, d, c) => {
    renderer.setSize( window.innerWidth, window.innerHeight )
    document.body.appendChild( renderer.domElement )
    //Creating the cube
    let geometry = new THREE.BoxGeometry( w, h, d);
    let material = new THREE.MeshBasicMaterial( {
        color: "#dadada", wireframe: true, transparent: true
       })
    let cube = new THREE.Mesh ( geometry, material )
    scene.add( cube );
    renderer.render( scene, camera );
    // camera.position.z = 5;
    // cube.position( 5,5,5 );
    different.push(cube);
    // camera.position.x = 3;
}

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )
//Creating the cube
var geometry = new THREE.BoxGeometry( 1, 1, 1)
//var material = new THREE.MeshBasicMaterial( { color: 0xb4fdff })  //Basic material
var material = new THREE.MeshStandardMaterial( { color: 0xb4fdff }) //Shadow interacting material
var cube = new THREE.Mesh ( geometry, material )

cubes.push(cube);
scene.add( cube );
renderer.render( scene, camera );
camera.position.z = 10
//Now the animation
// animate();
//Some light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )
//direction
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );
//More cubes
createCube(3,3,3, "#004f53");
createCube(6,6,6, "#004f53");
animate();
