import React, { useEffect, useRef, useState } from "react";

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 20, y: 20 }]);
  const [food, setFood] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState("RIGHT");
  const [nextDirection, setNextDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight * 0.75,
  });
  const [score, setScore] = useState(0);
  const gridSize = 15;
  const speed = 150;

  const startGame = () => {
    setSnake([{ x: 20, y: 20 }]);
    setFood({
      x: Math.floor(Math.random() * (canvasSize.width / gridSize)) * gridSize,
      y: Math.floor(Math.random() * (canvasSize.height / gridSize)) * gridSize,
    });
    setDirection("RIGHT");
    setNextDirection("RIGHT");
    setGameOver(false);
    setIsPlaying(true);
    setScore(0);
  };

  useEffect(() => {
    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = Math.min(window.innerHeight * 0.75, window.innerHeight);
      setCanvasSize({ width, height });
    };

    updateCanvasSize();

    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawGame = () => {
      if (gameOver) return;

      const newHead = { ...snake[0] };
      switch (direction) {
        case "UP":
          newHead.y -= gridSize;
          break;
        case "DOWN":
          newHead.y += gridSize;
          break;
        case "LEFT":
          newHead.x -= gridSize;
          break;
        case "RIGHT":
          newHead.x += gridSize;
          break;
        default:
          break;
      }

      const newSnake = [newHead, ...snake.slice(0, -1)];

      if (
        newHead.x < 0 ||
        newHead.x >= canvasSize.width ||
        newHead.y < 0 ||
        newHead.y >= canvasSize.height ||
        newSnake
          .slice(1)
          .some((segment) => segment.x === newHead.x && segment.y === newHead.y)
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return;
      }

      setSnake(newSnake);

      if (
        Math.abs(newHead.x - food.x) < gridSize &&
        Math.abs(newHead.y - food.y) < gridSize
      ) {
        setSnake([food, ...snake]);
        setFood({
          x:
            Math.floor(Math.random() * (canvasSize.width / gridSize)) *
            gridSize,
          y:
            Math.floor(Math.random() * (canvasSize.height / gridSize)) *
            gridSize,
        });
        setScore((prevScore) => prevScore + 10);
      }

      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

      ctx.fillStyle = "white";
      newSnake.forEach((segment, index) => {
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        if (index === 0) {
          ctx.fillStyle = "yellow";
          ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.moveTo(segment.x + gridSize / 2, segment.y + gridSize / 2);
          if (direction === "UP") {
            ctx.lineTo(
              segment.x + gridSize / 4,
              segment.y + gridSize / 2 - gridSize / 4
            );
          } else if (direction === "DOWN") {
            ctx.lineTo(
              segment.x + gridSize / 4,
              segment.y + gridSize / 2 + gridSize / 4
            );
          } else if (direction === "LEFT") {
            ctx.lineTo(
              segment.x + gridSize / 2 - gridSize / 4,
              segment.y + gridSize / 4
            );
          } else if (direction === "RIGHT") {
            ctx.lineTo(
              segment.x + gridSize / 2 + gridSize / 4,
              segment.y + gridSize / 4
            );
          }
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = "white";
        }
      });

      ctx.fillStyle = "#FFB800";
      ctx.beginPath();
      ctx.arc(
        food.x + gridSize / 2,
        food.y + gridSize / 2,
        gridSize / 2,
        0,
        2 * Math.PI
      );
      ctx.fill();
    };

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setNextDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setNextDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setNextDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setNextDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    const handleTouchStart = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;

      const canvasRect = canvas.getBoundingClientRect();
      const canvasX = touchX - canvasRect.left;
      const canvasY = touchY - canvasRect.top;

      const width = canvasSize.width;
      const height = canvasSize.height;

      if (canvasX < width / 3) {
        setNextDirection(direction !== "RIGHT" ? "LEFT" : direction);
      } else if (canvasX > (2 * width) / 3) {
        setNextDirection(direction !== "LEFT" ? "RIGHT" : direction);
      } else if (canvasY < height / 3) {
        setNextDirection(direction !== "DOWN" ? "UP" : direction);
      } else if (canvasY > (2 * height) / 3) {
        setNextDirection(direction !== "UP" ? "DOWN" : direction);
      }
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      // Optionally handle touch end events if needed
    };

    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);

    const gameLoop = () => {
      setDirection(nextDirection);
      drawGame();
    };

    const intervalId = setInterval(gameLoop, speed);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    direction,
    nextDirection,
    snake,
    food,
    gameOver,
    isPlaying,
    canvasSize,
    score,
  ]);

  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "24px",
          zIndex: 1,
        }}>
        Score: {score}
      </div>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        style={{
          border: "1px solid black",
          backgroundColor: "#1C9F8C",
          width: "100%",
          height: "auto",
        }}
      />
      {(gameOver || !isPlaying) && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
            padding: "0 10px",
            boxSizing: "border-box",
            zIndex: 1,
          }}>
          {gameOver && !isPlaying && (
            <div
              className="game-over"
              style={{
                color: "red",
                fontSize: "24px",
                marginBottom: "20px",
              }}>
              Game Over
            </div>
          )}
          {!isPlaying && (
            <button
              onClick={startGame}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#1C9F8C",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}>
              Start Game
            </button>
          )}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          maxWidth: "300px",
          zIndex: 1,
        }}>
        <button
          onTouchStart={() =>
            setNextDirection(direction !== "RIGHT" ? "LEFT" : direction)
          }
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#1C9F8C",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            flex: 1,
            marginRight: "5px",
          }}>
          Left
        </button>
        <button
          onTouchStart={() =>
            setNextDirection(direction !== "LEFT" ? "RIGHT" : direction)
          }
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#1C9F8C",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            flex: 1,
            marginRight: "5px",
          }}>
          Right
        </button>
        <button
          onTouchStart={() =>
            setNextDirection(direction !== "DOWN" ? "UP" : direction)
          }
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#1C9F8C",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            flex: 1,
            marginRight: "5px",
          }}>
          Up
        </button>
        <button
          onTouchStart={() =>
            setNextDirection(direction !== "UP" ? "DOWN" : direction)
          }
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#1C9F8C",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            flex: 1,
          }}>
          Down
        </button>
      </div>
    </div>
  );
};

export default SnakeGame;
