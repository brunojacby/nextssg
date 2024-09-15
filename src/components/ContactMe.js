import { useForm } from "react-hook-form"

import contactImg from '../../public/images/contactImg.png'
import Image from "next/image"



const ContactMe = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  };

  return (     
    <section id="connect" className="contact">      
        <div className="flex flex-col">
            <div className="flex justify-center items-center gap-10 px-[200px] xl:px-[150px] lg:flex-col lg:px-10 sm:px-0">                               
                <div className="self-start lg:self-center w-1/3 lg:w-full lg:px-[100px] md:px-10">
                    <Image src={contactImg} alt="Contact Me" className="rounded-2xl" />
                </div>
                <div className="w-2/3 lg:w-full">                        
                    <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/6430cb150f06017f94107d7c4242a1ef"
                    method="POST"
                    >
                    <input                       
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                        required: true,
                        maxLength: 100,
                        })}
                    />
                    {errors.name && (
                        <p>
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" &&
                            "Max length is 100 char."}
                        </p>
                    )}

                    <input                            
                        type="text"
                        placeholder="EMAIL"
                        {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p>
                        {errors.email.type === "required" &&
                            "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}

                    <textarea    
                        className="resize-none"              
                        placeholder="MESSAGE"
                        rows={4}
                        cols={50}
                        {...register("message", {
                        required: true,
                        maxLength: 2000,
                        })}
                    />
                    {errors.message && (
                        <p>
                        {errors.message.type === "required" &&
                            "This field is required."}
                        {errors.message.type === "maxLength" &&
                            "Max length is 2000 char."}
                        </p>
                    )}

                    <button
                    type="submit"                        
                    >
                        <span>SUBMIT</span>
                    </button>
                    </form>
                </div>
            </div>                
        </div>      
    </section>
  )
}

export default ContactMe