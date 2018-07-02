import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-ex0-cube',
  template: `
  <p>ex0-cube works!</p>
  <div id="cube"></div>
  `,
  styleUrls: ['./ex0-cube.component.css']
})
export class Ex0CubeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var camera, scene, renderer;
    var geometry, material, mesh;
    var container = document.getElementById('cube');

    init();
    animate();

    function init() {

      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
      camera.position.z = 1;

      scene = new THREE.Scene();

      geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
      material = new THREE.MeshNormalMaterial();

      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setSize( window.innerWidth, window.innerHeight );
      container.appendChild( renderer.domElement );

    }

    function animate() {

      requestAnimationFrame( animate );

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render( scene, camera );

    }
  }

}
