// 3D Hover Effect
const gui = document.getElementById("gui");

document.addEventListener("mousemove", (e) => {
    const { innerWidth: width, innerHeight: height } = window;
    const mouseX = (e.clientX / width) * 2 - 1;
    const mouseY = (e.clientY / height) * 2 - 1;

    const rotateX = mouseY * 15; // Tilt up/down
    const rotateY = mouseX * 15; // Tilt left/right

    gui.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
