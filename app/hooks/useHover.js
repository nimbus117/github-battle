import React from 'react';

const useHover = () => {
  const [hovering, setHovering] = React.useState(false);

  return [
    hovering,
    {
      onMouseOver: () => setHovering(true),
      onMouseOut: () => setHovering(false),
    },
  ];
};

export default useHover;
