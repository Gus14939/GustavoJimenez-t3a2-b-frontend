import React from "react";

const FAQPage = () => {
  return (
    <div className="noHomeContainer">
      <h1>Frequently Asked Questions</h1>
      <ul>
        <li>
          <h5>Will this always be free?</h5>
          <h5>– Yes.</h5>
        </li>
        <li>
          <h5>Do you accept monetary donations?</h5>
          <h5>
            – We do:{" "}
            <a href="https://donorbox.org/plantswap">
              Click Here To Donate Securely Through Donorbox
            </a>
          </h5>
        </li>
        <li>
          <h5>Can I post plants for sale?</h5>
          <h5>
            – No. This website is intended only for users to trade or donate
            plants.
          </h5>
        </li>
        <li>
          <h5>How do I set up an account?</h5>
          <h5>
            – Go to our{" "}
            <a href="https://plantswap.org/register/">REGISTRATION</a> page and
            fill out your name and email.
          </h5>
        </li>
        <li>
          <h5>
            How do I get help if nothing on this page answers my questions?
          </h5>
          <h5>
            – Send us a message via our{" "}
            <a href="https://plantswap.org/contact-us/">CONTACT PAGE</a>
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default FAQPage;
