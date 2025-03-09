import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p id:"hide">Hey, I'm</p>
    <h1>Yassin El Bouzrouti</h1>
    <p>I'm currently specialiced in the front-end development, just give me a designe and I will bring it to the real life!!
    And I say "currently" because I'm a student of the art of softwer development, I'm very ambicious, constantly evolving and aspiring to become one of the best software engineers out there.</p>
    <p>I'm open for new opportunities, especially ambitious or large projects. However, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
    <a href="mailto:yassinelbouzrouti.004@gmail.com">Say hi👈🏽</a>
    </section>`;
};