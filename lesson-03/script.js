console.log(THREE.PerspectiveCamera.rotate)

/*Scene*/
const scene = new THREE.Scene();
/*Geometry*/
const geometry = new THREE.BoxGeometry;
const material = new THREE.MeshBasicMaterial({color:0xff0000});
const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh)

/*Camera*/
const sizes ={
	width:800,
	height:600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
scene.add(camera)

/*Renderer*/
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
	canvas
})

renderer.setSize(sizes.width,sizes.height);

renderer.render(scene,camera);
