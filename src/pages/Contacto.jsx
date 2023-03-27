import React from "react";

const Contacto = () => {
  return (
    <div className="contacto">
      <h1>Contacto</h1>
      <br />
      <br />
      <ul>
        <li>
          <a className="movil" href="tel:+34694468610">
            {" "}
            Móvil
          </a>
        </li>
        <br />
        <li>
          <a className="email" href="mailto:yudimeliansanchez@gmail">
            {" "}
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacto;
