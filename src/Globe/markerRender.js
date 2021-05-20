import * as THREE from "three";
import card from "../assets/models/credit_card.fbx";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const MARKER_COLOR = "#fcffbe";

export default function markerRenderer(marker) {
  const scene = new THREE.Scene();
  // scene.add(totalGroup);
  new FBXLoader().load(
    card,
    (object) => {
      object.scale.set(0.3, 0.3, 0.3);
      object.rotateX(-Math.PI / 2);
      object.rotateZ(Math.PI);
      object.translateZ(-5);

      object.traverse(function (child) {
        if (child.name.indexOf("Box") > -1) {
          if (marker.send) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0x6185f2,
              // 0xce8824
            });
          } else {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
            });
          }
        } else {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x000000,
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
