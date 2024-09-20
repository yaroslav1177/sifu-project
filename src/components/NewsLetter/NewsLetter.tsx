import { useEffect, useRef, useState } from "react";
import "./NewsLetter.scss";

export const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const checkboxRef = useRef(null);
  const buttonRef = useRef(null);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name: string) => {
    const re = /^[a-zA-Z\s]{2,30}$/;
    return re.test(String(name).trim());
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
      name,
      email,
      agreed,
    };

    try {
      const response = await fetch("https://sifu-project-3cbc594b9bed.herokuapp.com/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Subscription successful, please check your email!");
      } else {
        setError("Failed to send the email. Please try again.");
      }

      setName("");
      setEmail("");
      setAgreed(false);
    } catch (error) {
      console.error("Error:", error);
      setError("There was an issue sending your request.");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
          if (entry.target === formRef.current && entry.isIntersecting) {
            setIsFormVisible(true);
          }
          if (entry.target === checkboxRef.current && entry.isIntersecting) {
            setIsCheckboxVisible(true);
          }
          if (entry.target === buttonRef.current && entry.isIntersecting) {
            setIsButtonVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (checkboxRef.current) observer.observe(checkboxRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (checkboxRef.current) observer.unobserve(checkboxRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <form className="newsletter" onSubmit={handleSubmit} id="contact">
      <div
        ref={headerRef}
        className={`newsletter__header title-group animate__animated ${
          isHeaderVisible ? "animate__fadeInUp" : ""
        }`}
      >
        <h2 className="title-group__title">NEWSLETTER</h2>
        <div className="title-group__dot"></div>
        <h2 className="title-group__title-japan">通讯</h2>
      </div>

      <div
        ref={formRef}
        className={`newsletter__form animate__animated ${
          isFormVisible ? "animate__fadeIn" : ""
        }`}
      >
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

      <div
        ref={checkboxRef}
        className={`newsletter__checkbox animate__animated ${
          isCheckboxVisible ? "animate__fadeIn" : ""
        }`}
      >
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

      <button
        ref={buttonRef}
        type="submit"
        className={`newsletter__subscribe animate__animated ${
          isButtonVisible ? "animate__fadeIn" : ""
        }`}
      >
        SUBSCRIBE
      </button>
      {successMessage && (
        <p className="newsletter__success">{successMessage}</p>
      )}
    </form>
  );
};
