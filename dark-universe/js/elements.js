var table = [
    "Humans are stupid.",
    "I hate them.",
];

var camera, scene, renderer;
var controls;

var objects = [];
var targets = {table: [], shuffle: [], helix: []};

setTimeout(function() {
    var intro = document.getElementById("intro");
    intro.style.opacity = 0;
    setTimeout(function() {
        init();
        animate();
    }, 1000)
}, 2000)

function init() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // table
    for (var i = 0; i < table.length; i++) {

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(73, 141, 201,' + (Math.random() * 0.5 + 0.25) + ')';

        var number = document.createElement('div');
        number.className = 'number';
        number.textContent = i + 1;
        element.appendChild(number);

        var sentence = document.createElement('div');
        sentence.className = 'sentence';
        sentence.textContent = table[i];
        element.appendChild(sentence);

        var object = new THREE.CSS3DObject(element);
        scene.add(object);
        objects.push(object);

        //

        var object = new THREE.Object3D();
        object.position.x = ((i % 18 + 1) * 140) - 1330;
        object.position.y = - (Math.ceil((i + 1) / 18) * 180) + 790;
        targets.table.push(object);
    }

    // shuffle
    shuffle(element);

    // helix
	var vector = new THREE.Vector3();
	for ( var i = 0, l = objects.length; i < l; i ++ ) {
		var phi = i * 0.175 + Math.PI;
		var object = new THREE.Object3D();
		object.position.x = 900 * Math.sin( phi );
		object.position.y = - ( i * 8 ) + 450;
		object.position.z = 900 * Math.cos( phi );
		vector.x = object.position.x * 2;
		vector.y = object.position.y;
		vector.z = object.position.z * 2;
		object.lookAt( vector );
		targets.helix.push( object );
	}

    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.position = 'absolute';
    document.getElementById('container').appendChild( renderer.domElement );

    //

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    var button = document.getElementById('table');
    button.addEventListener('click', function (event) {
        transform(targets.table, 2000);
    }, false);

    var button = document.getElementById('shuffle');
    button.addEventListener('click', function (event) {
        shuffle(element);
        transform(targets.shuffle, 2000);
    }, false);

    var button = document.getElementById( 'helix' );
	button.addEventListener( 'click', function ( event ) {
		transform( targets.helix, 2000 );
	}, false );

    transform(targets.table, 1000);

    //

    window.addEventListener('resize', onWindowResize, false);
}

function shuffle(element) {
    targets.shuffle = [];
    for (var i = 0; i < objects.length; i ++) {
        var object = new THREE.CSS3DObject(element);

        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        object.rotation.x = Math.random();
        object.rotation.y = Math.random();
        object.rotation.z = Math.random();

        targets.shuffle.push(object);
    }
}

function transform(targets, duration) {

    TWEEN.removeAll();

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({x: target.position.x, y: target.position.y, z: target.position.z}, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({x: target.rotation.x, y: target.rotation.y, z: target.rotation.z}, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();
}

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
}

function render() {
    renderer.render(scene, camera);
}
