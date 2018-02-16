import * as React from 'react';

interface RenderFunction {
  (letters: any[]): any
}

export interface CharmingProps {
  className: string;
  letters: string;
  render: RenderFunction;
}

class Charming extends React.Component<CharmingProps, {}> {
  static defaultProps = {
    className: 'Charming',
    letters: '',
  };

  render() {
    const { className, letters, render } = this.props;
    const ltrs = letters.split('');
    const letterViews: any[] = ltrs.map((ltr: string, idx: number) => {
      return (<span className={`${className}-${idx}`} aria-hidden>{ltr}</span>);
    });
    return <div aria-label={letters} className={className}>
      {render(letterViews)}
    </div>;
  }
}

export default Charming;
