import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar el correo con los datos del formulario
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-purple-800">
      <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center">CONTACTA CON NOSOTROS</h1>
        <p className="mb-6 text-center text-gray-700">
        ¿Tiene alguna pregunta o comentario sobre nuestros productos o servicios Web3? 
        Contacta con nosotros 
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Tu nombre</label>
            <input
              type="text"
              name="nobre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-full form-input"
              placeholder="Introduce tu nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Tu direccion email </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full form-input"
              placeholder="Introduce tu email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Tu mensaje</label>
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg form-input"
              placeholder="Escribe tu mensaje..."
              rows="6"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-300 focus:outline-none focus:shadow-outline-blue"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;