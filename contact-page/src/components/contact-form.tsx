import { FormEvent } from "react"

export default function ContactForm() {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="bg-opacity-30 w-full p-8 rounded-2xl bg-[#CDD5E0] lg:pb-8 pb-20">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="lg:flex-row justify-between gap-5 flex-col flex">
          <div className="flex w-full flex-col">
            <label className="text-white text-sm mb-1" htmlFor="">Name</label>
            <input className="p-4 mb-4 rounded-xl font-bold text-sm" type="text" placeholder="Ethan Johnson" name="name"/>
          </div>
          <div className="flex w-full flex-col">
            <label className="text-white text-sm mb-1" htmlFor="">Company Email</label>
            <input className="p-4 mb-4 font-bold text-sm rounded-xl" type="email" placeholder="ethan@johnson.com" name="company-email"/>
          </div>
        </div>
        <div className="lg:flex-row justify-between gap-5 flex-col flex">
          <div className="flex w-full flex-col">
            <label className="text-white text-sm mb-1" htmlFor="">Company Size</label>
            <select className="p-4 mb-4 font-bold text-sm rounded-xl border-transparent border-r-[16px] border-solid" name="company-size">
              <option value="50-100">50-100 employees</option>
            </select>
          </div>
          <div className="flex w-full flex-col">
            <label className="text-white text-sm mb-1" htmlFor="">Subject</label>
            <select className="p-4 mb-4 font-bold text-sm rounded-xl border-transparent border-r-[16px] border-solid" name="subject">
              <option value="landing-pages">Building Landing pages</option>
            </select>
          </div>
        </div>
        <label className="text-white text-sm mb-1" htmlFor="">Message</label>
        <textarea className="p-4 resize-none font-bold text-sm rounded-xl" name="message" rows={8}>50-100 employees</textarea>
        <button className="bg-white active:ring-[#4036A9] active:ring-2 font-bold text-[#4036A9] mt-5 p-5 rounded-xl">Contact Sales</button>
      </form>
    </div>
  )
}