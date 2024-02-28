document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('whiteboard');
    const context = canvas.getContext('2d');
    const strokeColor = document.getElementById('strokeColor').value;

    // Set canvas size to fill the entire window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(window)
    canvas.backgroundColor = window;

    let painting = false;

    function startPosition(e) {
      painting = true;
      draw(e);
    }

    function endPosition() {
      painting = false;
      context.beginPath();
    }

    function draw(e) {
      if (!painting) return;

      context.lineWidth = 5;
      context.lineCap = 'round';
      console.log(strokeColor)
      
      context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--color');

      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }

    // Event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    // Resize canvas when window is resized
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  });