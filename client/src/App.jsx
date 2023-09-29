import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import React, { useState } from 'react';

const edges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

const nodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

// A custom component for the sticky note
const StickyNote = ({ data }) => {
  const [text, setText] = useState(data.text); // The state for the text input

  // A function to handle the text change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ backgroundColor: '#ffff88', padding: 10 }}>
      <textarea value={text} onChange={handleChange} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

function Flow() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ height: '100%' }}>
        <ReactFlow nodes={nodes} edges={edges}>
          <Background />
          <Controls />
          {/* Add a sticky note component with some initial text */}
          <StickyNote
            id="3"
            data={{ text: 'This is a sticky note' }}
            position={{ x: 200, y: 200 }}
          />
        </ReactFlow>
      </div>
    </div>
  );
}

export default Flow;
