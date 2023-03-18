import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import DeveloperContent from "../components/DeveloperContent";
import Hero from "../components/Hero";
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
            <div className={s["socials"]}>
              <a
                href="https://github.com/serengia"
                target="_blank"
                rel="noreferrer"
                className={s["icon-wrapper"]}
              >
                <BsGithub className={s["icon"]} />
              </a>
              <a
                href="https://linkedin.com/in/james-serengia"
                target="_blank"
                rel="noreferrer"
                className={s["icon-wrapper"]}
              >
                <BsLinkedin className={s["icon"]} />
              </a>
              <a
                href="https://twitter.com/jamesserengia"
                target="_blank"
                rel="noreferrer"
                className={s["icon-wrapper"]}
              >
                <BsTwitter className={s["icon"]} />
              </a>
            </div>
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
