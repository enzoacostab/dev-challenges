import './App.css'
import ContactForm from './components/contact-form'

function App() {
  return (
    <div className="h-full w-full bg-[url('assets/bg-image.svg')] bg-cover">
      <header className='p-5 xl:px-14'>
        <img width={90} src={'/assets/contact-form-icon.svg'} />
      </header>
      <main>
        <div className='py-5 w-full flex justify-center flex-col items-center gap-4'>
          <h1 className='text-4xl xl:text-6xl xl:w-[550px] xl:leading-tight w-[400px] leading-tight tracking-wide font-bold text-center text-white'>Interested in our business pricing?</h1>
          <h2 className='text-center w-[320px] xl:text-3xl xl:leading-snug xl:w-[650px] text-white'>Fill out the form to view details and we’ll contact you as soon as possible.</h2>
        </div>
        <section id="contact" className="flex items-center xl:px-72 justify-center w-full h-full px-7 py-8 pb-20">
          <ContactForm/>
        </section>
      </main>
    </div>
  )
}

export default App
