"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import supabase from "@/lib/supabaseClient"; // Import Supabase
import "@/styles/ContactForm.css";

const ContactForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // Form status (success/error)

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // Send data to Supabase
      const { error } = await supabase.from("contact-form").insert([
        {
          first_name: formData.fname,
          last_name: formData.lname,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) {
        throw error;
      }

      setStatus("Form submitted successfully!");
      setFormData({ fname: "", lname: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatus("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="contct-form" id="contact">
      <div className="page-width">
        <div className="contact-form-wrap">
          <div className="img-text">
            <h2>Get in touch with us today</h2>
            <p>Fill out the form, and we’ll get back to you as soon as possible.</p>
            <div className="contact-img">
              <Image
                src="/images/customer-service-img14.png"
                alt="Customer Service"
                width={300}
                height={200}
                priority
              />
            </div>
          </div>

          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="form-heading">Send a Message</h2>
              <Link href="mailto:contact@adexlabs.com">
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                  <path d="M7.7476 7.35745L0.0246639 1.74039C0.00971651 1.74801 0.0149474 1.74534 0 1.75295V10.253C0 11.1918 0.761116 11.953 1.7 11.953H15.3C16.2389 11.953 17 11.1918 17 10.253V1.7326C16.9973 1.7312 16.9982 1.73169 16.9955 1.73029L9.25259 7.35771C8.80389 7.68382 8.19618 7.68371 7.7476 7.35745Z" fill="currentColor"></path>
                  <path d="M9.25275 5.25845L16.1116 0.270562C15.8713 0.139095 15.5948 0.0574951 15.3001 0.0574951H1.70014C1.40547 0.0574951 1.13347 0.139095 0.888672 0.270562L7.74753 5.25845C8.19622 5.58475 8.80406 5.58475 9.25275 5.25845Z" fill="currentColor"></path>
                </svg>
                <span>contact@adexlabs.com</span>
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="name-field field-block">
                <div className="user-name">
                  <label htmlFor="fname">First name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="user-last">
                  <label htmlFor="lname">Last name:</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="email-field field-block">
                <label htmlFor="email">Enter your email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="textarea-field field-block">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <input type="submit" value="Submit" className="submit-button" />
            </form>

            {status && <p className="form-status">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
