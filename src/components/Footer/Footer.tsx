import { useLanguage } from "../../translation/LanguageProvider";
import translations from "../../translation/translations";
import "./Footer.scss";

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <p className="footer__info">{translations[language].footer}</p>
    </footer>
  );
};
