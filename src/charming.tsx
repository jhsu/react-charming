import * as React from "react";
import runes from "runes";
const { useMemo } = React;

interface ICharmingProps {
  letters: string;
  className?: string;
}
export const Charming: React.FC<ICharmingProps> = props => {
  const { className, letters } = props;
  const charmed = useMemo(() => {
    const ltrs = runes(letters);
    return ltrs.map((ltr, idx) => {
      return (
        <span key={idx} className={`${className}-${idx}`} aria-hidden>
          {ltr}
        </span>
      );
    });
  }, [letters]);

  return (
    <div aria-label={letters} {...props}>
      {charmed}
    </div>
  );
};

export default Charming;
