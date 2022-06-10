import { ReactNode, useRef } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

export interface ITooltippy {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  tooltipProps?: any;
  tooltipText: ReactNode;
  triggerText: string;
}

const Tooltippy = ({ placement, tooltipText, triggerText, tooltipProps }) => {
  const target = useRef(null);

  return (
    <OverlayTrigger
      placement={placement ?? 'top'}
      overlay={
        <Tooltip id={`opensft-tooltip`} {...tooltipProps}>
          {tooltipText}
        </Tooltip>
      }
    >
      <a ref={target} className={'tooltippy'}>
        {triggerText}
        <sup>&#9432;</sup>
      </a>
    </OverlayTrigger>
  );
};

export default Tooltippy;
