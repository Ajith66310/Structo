import { Stage, Layer, Rect, Circle, Text } from "react-konva";
import { useState } from "react";

const Canvas = () => {
  const [shapes, setShapes] = useState([]);

  const addRect = () => {
    setShapes([
      ...shapes,
      {
        id: Date.now(),
        type: "rect",
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        fill: "red",
      },
    ]);
  };

  const addCircle = () => {
    setShapes([
      ...shapes,
      {
        id: Date.now(),
        type: "circle",
        x: 150,
        y: 150,
        radius: 50,
        fill: "green",
      },
    ]);
  };

  const addText = () => {
    setShapes([
      ...shapes,
      {
        id: Date.now(),
        type: "text",
        x: 100,
        y: 200,
        text: "Hello",
        fontSize: 20,
        fill: "black",
      },
    ]);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Canvas */}
      <Stage width={window.innerWidth} height={window.innerHeight - 100}>
        <Layer>
          {shapes.map((shape) => {
            if (shape.type === "rect") {
              return (
                <Rect
                  key={shape.id}
                  {...shape}
                  draggable
                />
              );
            }

            if (shape.type === "circle") {
              return (
                <Circle
                  key={shape.id}
                  {...shape}
                  draggable
                />
              );
            }

            if (shape.type === "text") {
              return (
                <Text
                  key={shape.id}
                  {...shape}
                  draggable
                />
              );
            }

            return null;
          })}
        </Layer>
      </Stage>

      {/* Shape Bar */}
      <div
        style={{
          height: "100px",
          background: "#111",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button onClick={addRect}>Rectangle</button>
        <button onClick={addCircle}>Circle</button>
        <button onClick={addText}>Text</button>
      </div>
    </div>
  );
};

export default Canvas;
