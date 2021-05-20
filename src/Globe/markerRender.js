import * as THREE from "three";
import card from "../assets/models/credit_card.fbx";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const MARKER_COLOR = "#fcffbe";

export default function markerRenderer(marker) {
  const size = Math.max(marker.value / 20, 1);
  const geometry = new THREE.SphereGeometry(size, 10, 10);
  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(MARKER_COLOR),
  });

  // add light
  const mesh = new THREE.Mesh(geometry, material);
  const light = new THREE.PointLight(MARKER_COLOR, 1, 0, 0);

  mesh.add(light);

  const scene = new THREE.Scene();
  const totalGroup = new THREE.Group();
  // scene.add(totalGroup);
  let mymesh;
  new FBXLoader().load(
    card,
    (object) => {
      object.scale.set(0.5, 0.5, 0.5);
      object.rotateX(-Math.PI / 2);
      object.rotateZ(Math.PI);

      object.traverse(function (child) {
        console.log("child");
        console.log(child);
        if (child.name.indexOf("Box") > -1) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xce8824,
          });
        }
      });
      scene.add(object);
    },
    undefined,
    function (error) {}
  );

  return scene;
}
