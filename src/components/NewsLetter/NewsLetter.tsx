import { useState } from "react";
import "./NewsLetter.scss";

export const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name: string) => {
    const re = /^[a-zA-Z\s]{2,30}$/;
    return re.test(String(name).trim());
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateName(name)) {
      setError("Please enter a valid name (only letters, 2-30 characters).");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!agreed) {
      setError("You must agree to the privacy policy.");
      return;
    }

    setError("");

    const formData = {
      name: name,
      email: email,
      agreed: agreed,
    };

    console.log("Form submitted:", formData);

    setName("");
    setEmail("");
    setAgreed(false);
  };

  return (
    <form className="newsletter" onSubmit={handleSubmit} id="contact">
      <div className="newsletter__header title-group">
        <h2 className="title-group__title">NEWSLETTER</h2>
        <div className="title-group__dot"></div>
        <h2 className="title-group__title-japan">通讯</h2>
      </div>

      <div className="newsletter__form">
        <input
          type="text"
          placeholder="Enter your name"
          className="newsletter__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter e-mail address"
          className="newsletter__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="newsletter__checkbox">
        <input
          type="checkbox"
          id="agree"
          className="newsletter__checkbox-input"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
        />
        <label htmlFor="agree" className="newsletter__checkbox-label">
          I agree to the{" "}
          <a href="#" className="newsletter__privacy">
            privacy policy
          </a>{" "}
          and agree to receive occasional news from Kepler and its studios.
        </label>
      </div>

      {error && <p className="newsletter__error">{error}</p>}

      <button type="submit" className="newsletter__subscribe">
        SUBSCRIBE
      </button>
    </form>
  );
};
