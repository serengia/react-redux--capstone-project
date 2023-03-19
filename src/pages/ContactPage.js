import React from "react";
import DeveloperContent from "../components/DeveloperContent";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import s from "./ContactPage.module.scss";

function ContactPage() {
  const extraComps = (
    <div className={s["contact-header"]}>
      <h1>Contact the Developer.</h1>
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
        <div className={s["author-wrapper"]}>
          <div className={s["image-wrapper"]}>
            <img
              src="/img/james-serecode.png"
              alt="James Serengia"
              className={s["author-img"]}
            />
          </div>

          <div className={s["details"]}>
            <h3>James Serengia</h3>
            <h4>Software Engineer</h4>
            <Socials />
          </div>
        </div>
        <div className={s["content"]}>
          <DeveloperContent />
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
