import React, { useState } from "react";
import emailjs from "emailjs-com";


export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]:
      e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      "service_rlm6lco",
      "template_n634rrg",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "0eNYjvKi1ErVWmSL7"
    ).then((response)=>{
        console.log('Email sent successfully!',response)
    }).catch((error) =>{
        console.error('Error sending mail:',error)
    })
  };

  return (
    <section className="py-10 " id="contact">
      <h1 className="text-2xl p-2 my-3 font-bold text-center">Contact Me</h1>
      <form
        onSubmit={sendEmail}
        className="flex flex-col w-fit gap-2 m-auto md:mx-20"
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          className="border border-black p-5 rounded"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          className="border border-black p-5 rounded"
        />
        <label>Message:</label>
        <textarea
          name="message"
          placeholder="your message"
          value={form.message}
          onChange={handleInputChange}
          className="border border-black p-5 rounded"
        />
        <div className="">
          <input
            type="submit"
            value="Send"
            className="cursor-pointer items-start p-3 border border-[#094B72] bg-[#094B72] text-white rounded"
          />
        </div>
      </form>
    </section>
  );
};
