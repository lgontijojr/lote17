// TODO: Replace these icons with custom built
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1>Lote 17</h1>
      <h4>Segunda - Sábado | 20:00 / 23:30</h4>
      <h4>Goiânia - Goiás</h4>

      <hr className="footer_horizontal_line" />

      <button className="reserve_button">Reservar</button>

      <div>
        <IconButton
          aria-label="Instagram Button"
          target="_blank"
          href="https://www.instagram.com/lote17/"
        >
          <InstagramIcon className="social_media_icons" />
        </IconButton>

        <IconButton
          aria-label="WhatsApp Button"
          target="_blank"
          href="https://wa.me/message/4ST3OGJ3C45SN1"
        >
          <WhatsAppIcon className="social_media_icons" />
        </IconButton>

        <IconButton
          aria-label="Email Button"
          target="_blank"
          href="mailto:contatolucasgyn@gmail.com"
        >
          <EmailIcon className="social_media_icons" />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
