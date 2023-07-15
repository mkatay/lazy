import React,{useState} from "react";
import {Button,Popover,PopoverBody,PopoverHeader} from 'reactstrap'

export const Question = ({id,title,info}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  
  return (
    <div className="row m-1">
      <Button id={'Popover'+id} type="button">{title}</Button>
      <Popover flip 
          target={'Popover'+id}
          placement="bottom" 
          isOpen={popoverOpen}
          toggle={() => { setPopoverOpen(!popoverOpen) }}
        >
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{info}</PopoverBody>
      </Popover>
    </div>
  );
};
