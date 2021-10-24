interface ILinesProps {
  lineLength: number;
  hSpace: number;
}

export const Lines = (props: { config: ILinesProps }) => {
  const { config } = props;
  const lineGirth = 4;
  const numLines = 12;
  return (
    <div className="staffLine">
      <svg
        width={config.lineLength}
        height={config.hSpace * numLines}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace}
          y2={config.hSpace}
          stroke="gray"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 2}
          y2={config.hSpace * 2}
          stroke="gray"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 3}
          y2={config.hSpace * 3}
          stroke="gray"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 4}
          y2={config.hSpace * 4}
          stroke="black"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 5}
          y2={config.hSpace * 5}
          stroke="black"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 6}
          y2={config.hSpace * 6}
          stroke="black"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 7}
          y2={config.hSpace * 7}
          stroke="black"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 8}
          y2={config.hSpace * 8}
          stroke="black"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 9}
          y2={config.hSpace * 9}
          stroke="gray"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 10}
          y2={config.hSpace * 10}
          stroke="gray"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
        <line
          x1="0"
          x2={config.lineLength}
          y1={config.hSpace * 11}
          y2={config.hSpace * 11}
          stroke="gray"
          strokeWidth={lineGirth}
          strokeLinecap="butt"
        />
      </svg>
    </div>
  );
};
