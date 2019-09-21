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
animate_d = () => {
    console.log(different);

}