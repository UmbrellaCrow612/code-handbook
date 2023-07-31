import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 500, y: 300 }, data: { label: "1" } },
  { id: "2", position: { x: 100, y: 100 }, data: { label: "2" } },
  { id: "3", position: { x: 200, y: 300 }, data: { label: "3" } },
  { id: "4", position: { x: 300, y: 400 }, data: { label: "4" } },
];

// Main folder source 1
// all files to target 1
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-2", source: "2", target: "2" },
  { id: "e2-3", source: "3", target: "2" },
  { id: "e2-4", source: "4", target: "2" },
];

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div
      style={{
        width: "80vw",
        height: "80vh",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
