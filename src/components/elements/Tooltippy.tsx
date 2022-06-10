import { ReactNode } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export interface ITooltippy {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  tooltipProps?: any;
  tooltipText: ReactNode;
  triggerText: string;
}

const Tooltippy = ({ placement, tooltipText, triggerText, tooltipProps }: ITooltippy) => {
  return (
    <OverlayTrigger
      placement={placement ?? 'top'}
      overlay={
        <Tooltip id={`opensft-tooltip`} {...tooltipProps}>
          {tooltipText}
        </Tooltip>
      }
    >
      <a className={'tooltippy'}>
        {triggerText}
        <sup>&#9432;</sup>
      </a>
    </OverlayTrigger>
  );
};

export default Tooltippy;
