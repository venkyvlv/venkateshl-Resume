import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

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
  const gridSize = 20;
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

      if (newHead.x === food.x && newHead.y === food.y) {
        setSnake([food, ...snake]);
        setFood({
          x:
            Math.floor(Math.random() * (canvasSize.width / gridSize)) *
            gridSize,
          y:
            Math.floor(Math.random() * (canvasSize.height / gridSize)) *
            gridSize,
        });
      }

      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

      // Draw the snake
      newSnake.forEach((segment, index) => {
        ctx.beginPath();
        if (index === 0) {
          // Draw the head as a white circle
          ctx.arc(
            segment.x + gridSize / 2,
            segment.y + gridSize / 2,
            gridSize / 2,
            0,
            2 * Math.PI
          );
          ctx.fillStyle = "white";
          ctx.fill();
        } else {
          // Draw the body as red squares
          ctx.fillStyle = "#FFB800";
          ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        }
      });

      // Draw the food
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

    window.addEventListener("keydown", handleKeyDown);

    const gameLoop = () => {
      setDirection(nextDirection);
      drawGame();
    };

    const intervalId = setInterval(gameLoop, speed);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction, nextDirection, snake, food, gameOver, isPlaying, canvasSize]);

  const handleControl = (dir) => {
    switch (dir) {
      case "UP":
        if (direction !== "DOWN") setNextDirection("UP");
        break;
      case "DOWN":
        if (direction !== "UP") setNextDirection("DOWN");
        break;
      case "LEFT":
        if (direction !== "RIGHT") setNextDirection("LEFT");
        break;
      case "RIGHT":
        if (direction !== "LEFT") setNextDirection("RIGHT");
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}>
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
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <div
            style={{
              borderRadius: "50%",
              cursor: "pointer",
              left: "35%",
              position: "relative",
            }}>
            <FaArrowUp
              size={30}
              onClick={() => handleControl("UP")}
              style={{
                color: "#1C9F8C",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}>
            <div
              style={{
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
              }}>
              <FaArrowLeft
                size={30}
                onClick={() => handleControl("LEFT")}
                style={{
                  color: "#1C9F8C",
                }}
              />
            </div>
            <div
              style={{
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
              }}>
              <FaArrowRight
                size={30}
                onClick={() => handleControl("RIGHT")}
                style={{
                  color: "#1C9F8C",
                }}
              />
            </div>
          </div>
          <div
            style={{
              borderRadius: "50%",
              left: "35%",
              position: "relative",
              cursor: "pointer",
              textAlign: "center",
            }}>
            <FaArrowDown
              size={30}
              onClick={() => handleControl("DOWN")}
              style={{
                color: "#1C9F8C",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
