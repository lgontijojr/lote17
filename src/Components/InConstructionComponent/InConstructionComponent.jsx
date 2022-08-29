import React from "react";
import "./inConstructionComponent.css";

const getTodayUTCstringDate = () => {
  return new Date().toISOString().split("T")[0];
};

function InConstructionComponent() {
  const today = getTodayUTCstringDate();

  return (
    <div className="in_construction_wrap">
      <h1 className="header_text">Faça Sua Reserva!</h1>
      <form className="submit_form">
        <span className="input">
          <label>Email</label>
          <input name="email" type="email" required={true} />
        </span>

        <span className="input_phone_date_row">
          <span className="input_phone">
            <label>Telefone</label>
            <input name="telefone" type="tel" required={true} />
          </span>

          <span className="iput_date">
            <label>Reserva</label>
            <input name="reserva" min={today} type="date" required={true} />
          </span>
        </span>

        <span className="input">
          <label>Mensagem</label>
          <input name="mensagem" className="input_textarea" type="textarea" />
        </span>

        <span className="submit_button">
          <button>Enviar</button>
        </span>
      </form>
    </div>
  );
}

export default InConstructionComponent;
