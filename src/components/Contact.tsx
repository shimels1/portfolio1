
import React from "react";
import { Phone, Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title text-center">Contact Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-center mt-4">
            Feel free to reach out if you have any questions or want to work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-navy-800 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-500/20 mr-4">
                    <Phone className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>+251918375305</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-500/20 mr-4">
                    <Mail className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>shimelsalem@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-500/20 mr-4">
                    <MapPin className="text-purple-500" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-800 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/shimels1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-navy-700 hover:bg-purple-500 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-navy-700 hover:bg-purple-500 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-navy-800 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
