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
animate = () => {

    for (const qbe of cubes) {
        requestAnimationFrame( animate )
        qbe.rotation.x += 0.02;
        qbe.rotation.y += 0.02;
        for (const qbe of different) {
            qbe.rotation.x -= 0.01;
            qbe.rotation.y -= 0.01;
        }
        renderer.render( scene, camera )        
    }

}