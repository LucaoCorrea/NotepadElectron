import { DeleteNoteButton } from "./DeleteNoteButton";
import { NewNoteButton } from "./NewNoteButton";
import { ComponentProps } from "react";

export const ActionButtonsRow = ({...props}: ComponentProps<'div'>) =>{
  return(
    <div {...props}>
      <NewNoteButton/>
      <DeleteNoteButton/>
    </div>
  )
}