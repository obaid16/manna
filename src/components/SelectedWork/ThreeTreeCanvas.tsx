"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/data/projects";

interface ThreeTreeCanvasProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onHoverProject: (title: string | null) => void;
}

export default function ThreeTreeCanvas({
  projects,
  onSelectProject,
  onHoverProject,
}: ThreeTreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Scene, Camera, Renderer Setup
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FBF7F4");
    scene.fog = new THREE.FogExp2("#FBF7F4", 0.025);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 2, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Warm Luxury Palette)
    const ambientLight = new THREE.AmbientLight("#FBF7F4", 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight("#E8D8CE", 2.5);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight("#B98F88", 3, 20);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    // 3. Digital Tree Sculpture & Branch Curves
    const treeGroup = new THREE.Group();
    scene.add(treeGroup);

    // Material for Tree Structure
    const trunkMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b2f2a,
      roughness: 0.6,
      metalness: 0.2,
      wireframe: false,
    });

    const branchMaterial = new THREE.MeshStandardMaterial({
      color: 0x7a6258,
      roughness: 0.5,
      metalness: 0.3,
    });

    // Main Trunk Curve
    const trunkPoints = [
      new THREE.Vector3(0, -6, 0),
      new THREE.Vector3(0.2, -2, 0.1),
      new THREE.Vector3(-0.1, 1, -0.2),
      new THREE.Vector3(0.3, 4, 0),
      new THREE.Vector3(0, 7, 0.1),
    ];
    const trunkCurve = new THREE.CatmullRomCurve3(trunkPoints);
    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 64, 0.45, 12, false);
    const trunkMesh = new THREE.Mesh(trunkGeo, trunkMaterial);
    treeGroup.add(trunkMesh);

    // Branch Points where project surfaces anchor
    const nodePositions: THREE.Vector3[] = [];
    const projectMeshes: THREE.Mesh[] = [];

    projects.forEach((_, idx) => {
      const angle = (idx / projects.length) * Math.PI * 2.2;
      const heightLevel = -3 + idx * 1.6;
      const radius = 2.8 + (idx % 2 === 0 ? 0.6 : -0.3);

      const start = trunkCurve.getPointAt(Math.min(0.1 + idx * 0.12, 0.95));
      const end = new THREE.Vector3(
        start.x + Math.cos(angle) * radius,
        heightLevel,
        start.z + Math.sin(angle) * radius
      );

      nodePositions.push(end);

      // Branch Tube Geometry
      const mid = new THREE.Vector3(
        (start.x + end.x) / 2 + (Math.random() - 0.5) * 0.8,
        (start.y + end.y) / 2 + 0.5,
        (start.z + end.z) / 2 + (Math.random() - 0.5) * 0.8
      );
      const branchCurve = new THREE.CatmullRomCurve3([start, mid, end]);
      const branchGeo = new THREE.TubeGeometry(branchCurve, 32, 0.12, 8, false);
      const branchMesh = new THREE.Mesh(branchGeo, branchMaterial);
      treeGroup.add(branchMesh);

      // Glowing Node Sphere
      const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xb98f88 });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(end);
      treeGroup.add(nodeMesh);

      // Project Panel Mesh (3D Plane Surface)
      const cardWidth = 2.2;
      const cardHeight = 1.4;
      const planeGeo = new THREE.PlaneGeometry(cardWidth, cardHeight);

      // Create dynamic texture canvas for Project Card
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 320;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, 512, 320);

        ctx.fillStyle = "#B98F88";
        ctx.font = "bold 20px sans-serif";
        ctx.fillText(`0${idx + 1} — ${projects[idx].category}`, 30, 50);

        ctx.fillStyle = "#3B2F2A";
        ctx.font = "bold 32px serif";
        ctx.fillText(projects[idx].title.toUpperCase(), 30, 110);

        ctx.fillStyle = "#7A6258";
        ctx.font = "18px sans-serif";
        ctx.fillText(projects[idx].technologies.slice(0, 3).join(" • "), 30, 160);

        ctx.fillStyle = "#3B2F2A";
        ctx.fillRect(30, 200, 452, 2);

        ctx.fillStyle = "#B98F88";
        ctx.font = "bold 20px sans-serif";
        ctx.fillText("CLICK TO EXPLORE ↗", 30, 260);
      }

      const texture = new THREE.CanvasTexture(canvas);
      const planeMat = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
        roughness: 0.3,
        metalness: 0.1,
      });

      const cardMesh = new THREE.Mesh(planeGeo, planeMat);
      // Position card slightly offset from branch tip facing outward
      const offsetDir = end.clone().sub(start).normalize();
      cardMesh.position.copy(end.clone().add(offsetDir.multiplyScalar(0.4)));
      cardMesh.lookAt(camera.position.x, cardMesh.position.y, camera.position.z + 5);
      cardMesh.userData = { projectIndex: idx, projectData: projects[idx] };

      treeGroup.add(cardMesh);
      projectMeshes.push(cardMesh);
    });

    // 4. Ambient Warm Particle Cloud
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 16;
      particleScales[i] = Math.random() * 0.08 + 0.02;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xb98f88,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. ScrollTrigger Camera Path Animation
    const cameraTargets = [
      { camPos: new THREE.Vector3(0, 4, 12), lookAt: new THREE.Vector3(0, 2, 0) },
      ...nodePositions.map((pos, i) => ({
        camPos: new THREE.Vector3(pos.x * 1.5, pos.y + 0.5, pos.z + 4.5),
        lookAt: pos,
      })),
      { camPos: new THREE.Vector3(0, -2, 10), lookAt: new THREE.Vector3(0, 0, 0) },
    ];

    let currentScrollProgress = 0;

    const scrollTriggerObj = ScrollTrigger.create({
      trigger: container.parentElement,
      start: "top top",
      end: "+=3500",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        currentScrollProgress = self.progress;

        const totalSegments = cameraTargets.length - 1;
        const rawIndex = currentScrollProgress * totalSegments;
        const index = Math.floor(rawIndex);
        const factor = rawIndex - index;

        if (index < totalSegments) {
          const startTarget = cameraTargets[index];
          const endTarget = cameraTargets[index + 1];

          camera.position.lerpVectors(startTarget.camPos, endTarget.camPos, factor);
          const currentLookAt = new THREE.Vector3().lerpVectors(
            startTarget.lookAt,
            endTarget.lookAt,
            factor
          );
          camera.lookAt(currentLookAt);
        }

        // Rotate tree subtly on scroll
        treeGroup.rotation.y = currentScrollProgress * Math.PI * 1.5;
      },
    });

    // 6. Raycaster & Mouse Interaction Setup
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredMesh: THREE.Mesh | null = null;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Gentle camera mouse parallax
      gsap.to(camera.position, {
        x: camera.position.x + mouse.x * 0.3,
        y: camera.position.y + mouse.y * 0.3,
        duration: 0.8,
        ease: "power2.out",
      });

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(projectMeshes);

      if (intersects.length > 0) {
        const mesh = intersects[0].object as THREE.Mesh;
        if (hoveredMesh !== mesh) {
          if (hoveredMesh) {
            gsap.to(hoveredMesh.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
          }
          hoveredMesh = mesh;
          gsap.to(mesh.scale, { x: 1.12, y: 1.12, z: 1.12, duration: 0.3 });
          onHoverProject(mesh.userData.projectData.title);
        }
      } else {
        if (hoveredMesh) {
          gsap.to(hoveredMesh.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
          hoveredMesh = null;
          onHoverProject(null);
        }
      }
    };

    const handleClick = () => {
      if (hoveredMesh) {
        const project = hoveredMesh.userData.projectData as Project;
        onSelectProject(project);
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousemove", handlePointerMove);
    domElement.addEventListener("click", handleClick);

    // 7. Animation Frame Render Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate particle cloud gently
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;

      renderer.render(scene, camera);
    };
    animate();

    // 8. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener("mousemove", handlePointerMove);
      domElement.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      scrollTriggerObj.kill();

      // Dispose Three.js scene geometries & materials
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [projects, onSelectProject, onHoverProject]);

  return <div ref={mountRef} className="w-full h-full relative cursor-grab active:cursor-grabbing" />;
}
