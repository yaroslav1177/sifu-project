import { useState } from "react";
import "./NewsLetter.scss";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

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
      email: email,
      agreed: agreed,
    };

    console.log("Form submitted:", formData);

    setEmail("");
    setAgreed(false);
  };

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <h1 className="available__title newsletter__title">NEWSLETTER · 通讯</h1>

      <div className="newsletter__form">
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
