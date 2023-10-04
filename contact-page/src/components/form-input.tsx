import { ChangeEventHandler } from "react"

export default function FormInput(props: {onChange: ChangeEventHandler<HTMLInputElement>}) {
  return (
    <div className="lg:flex-row justify-between gap-5 flex-col flex">
      <div className="flex w-full flex-col">
        <label className="text-white text-sm mb-1" htmlFor="">Name</label>
        <input onChange={props.onChange} className="p-4 mb-4 rounded-xl font-bold text-sm" type="text" placeholder="Ethan Johnson" name="name"/>
      </div>
      <div className="flex w-full flex-col">
        <label className="text-white text-sm mb-1" htmlFor="">Company Email</label>
        <input onChange={props.onChange} className="p-4 mb-4 font-bold text-sm rounded-xl" type="email" placeholder="ethan@johnson.com" name="companyEmail"/>
      </div>
    </div>
  )
}