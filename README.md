# three_webpack
Simple boilerplate for modular three.js projects using webpack webpack-dev-server 

## Usage

```
git clone https://github.com/Will-Wrightwa/three_webpack.git
cd three_webpack
npm install
npm start
```

All three.js files can found in src/three/

* three/meshes.js -- is where all of the meshes are created. 
* three/lights.js -- is where all of the lights are created.
* three/app.js 
  * creates the scene
  * creates the camera
  * adds all the meshes and lights to the scene 
  * creates the renderer
  * renders ths scene
  * animates
  
  
note: animation should be broken out into another file.
