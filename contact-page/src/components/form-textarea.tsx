import { ChangeEventHandler } from "react";

export default function FormTextarea(props: {onChange: ChangeEventHandler<HTMLTextAreaElement>, value: string}) {
  return (
    <>
      <label className="text-white text-sm mb-1" htmlFor="">Message</label>
      <textarea onChange={props.onChange} className="p-4 resize-none font-bold text-sm rounded-xl" name="message" rows={8} value={props.value}></textarea>
    </>
  )
}