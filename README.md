# Three.js Practice Lab

This repository contains a **3D scene built with Three.js** as a learning project.  
The goal of this project is to practice **3D graphics, animations, and modular JavaScript development** using modern web tools.
![Paisaje 3D](/dist/assets/paisaje.jpeg)

# 3D Object & Character Editor - Gnome Example

We add this **3D editor** built with **Three.js** to create and animate objects and characters.  
As an example, we have created a **gnome character** with animated arms, legs, and hat.

## Preview

![Gnome Preview](/dist/assets/gnome.jpeg)

## Features

- Interactive 3D scene with **trees, mountains, and birds**.  
- **Tree sway animation** to simulate wind.  
- **Flying birds** and rotating mountains.  
- **Lighting and shadows** for realistic effects.  
- **Camera controls** with OrbitControls.  
- Modular code structure using ES6 modules.  
- Built with **Vite** for modern development workflow.

## Project Structure

```bash
project-root/
│
├─ index.html
├─ editor.html
├─ package.json
├─ js/
│ ├─ main.js
  ├─ editor.js
│ ├─ camera.js
│ ├─ scene.js
│ ├─ ground.js
│ ├─ sky.js
│ ├─ animate.js
│ └─ objects/
  ├─ gnome.js
│ ├─ mountain.js
│ ├─ tree.js
│ └─ bird.js
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ToniEstarlich/paisaje-threejs.git
cd paisaje-threejs
```
2. Install dependencies:
```bash
npm install

```
3. Start the development server
```bash
npm run dev
```
Or with Yarn
```bash
yarn dev

```
4. Open the URL displayed in your terminal (usually http://localhost:5173) to see the scene.

Skills Practiced / Learned

Setting up a camera and scene in Three.js

Modeling and placing 3D objects (trees, mountains, birds)

Animating objects with functions and time-based motion

Working with lights, shadows, and materials

Using modular JavaScript (function, const, export)

Using Vite for a modern development workflow

License

This project is for learning purposes and is MIT licensed.

