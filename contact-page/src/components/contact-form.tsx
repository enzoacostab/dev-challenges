import { FormEvent, useState, ChangeEvent } from "react"
import FormInput from "./form-input"
import FormSelect from "./form-select"
import FormTextarea from "./form-textarea"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    companyEmail: '', 
    companySize: '50-100 employees', 
    subject: 'Building Landing pages', 
    message: '50-100 employees' 
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
  }

  const handleSelectChange = ({target}: ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = target
    setForm(prevState => ({...prevState,[name]:value}))
  }

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target
    setForm(prevState => ({...prevState,[name]:value}))
  }
  
  const handleTextareaChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = target
    setForm(prevState => ({...prevState, [name]:value}))
  }

  return (
    <div className="bg-opacity-30 w-full p-8 rounded-2xl bg-[#CDD5E0] lg:pb-8 pb-20">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <FormInput onChange={handleInputChange} />
        <FormSelect onChange={handleSelectChange} />
        <FormTextarea onChange={handleTextareaChange} value={form.message}/>
        <button className="bg-white active:ring-[#4036A9] active:ring-2 font-bold text-[#4036A9] mt-5 p-5 rounded-xl">Contact Sales</button>
      </form>
    </div>
  )
}