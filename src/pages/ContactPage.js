import React from "react";
import Hero from "../components/Hero";
import s from "./ContactPage.module.scss";

function ContactPage() {
  const extraComps = (
    <div className={s["contact-header"]}>
      <h1>Contact the Developer for your next project.</h1>
    </div>
  );
  return (
    <main className={s["contact-page"]}>
      <Hero
        title="Contact the developer"
        showFilters={false}
        opacity={0.5}
        showHeader={false}
        extraComps={extraComps}
      />
      <div className={`${s["body-content"]} row`}>
        <hr className="divider-2" />
        Hello
      </div>
    </main>
  );
}

export default ContactPage;
