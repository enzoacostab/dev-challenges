import { ChangeEventHandler } from "react";

export default function FormSelect(props: {onChange: ChangeEventHandler<HTMLSelectElement>}) {
  return (
    <div className="lg:flex-row justify-between gap-5 flex-col flex">
      <div className="flex w-full flex-col">
        <label className="text-white text-sm mb-1" htmlFor="">Company Size</label>
        <select onChange={props.onChange} className="p-4 mb-4 font-bold text-sm rounded-xl border-transparent border-r-[16px] border-solid" name="companySize">
          <option value="50-100 employees">50-100 employees</option>
        </select>
      </div>
      <div className="flex w-full flex-col">
        <label className="text-white text-sm mb-1" htmlFor="">Subject</label>
        <select onChange={props.onChange} className="p-4 mb-4 font-bold text-sm rounded-xl border-transparent border-r-[16px] border-solid" name="subject">
          <option value="Building Landing pages">Building Landing pages</option>
        </select>
      </div>
    </div>
  )
}