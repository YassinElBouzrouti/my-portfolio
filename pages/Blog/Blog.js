import "./Blog.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const Blog = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="blog">
    <h2>How it all started?</h2>
    ${Divider()}
    <article>
    <p>I was in High School, and one day in the tech class we went to the IT room, and the teacher introduced us our new Unit. That was programmation, althought we just touch and practice a little bit with CSS and HTML, that was the start of something. That become my new hobby, I started creating webs of my class notes.</p>
    <p>When I finished High School i had no doubts that that's what I wanted to inmers my self in a become a software engineer. But I made a break in my life and I wanted to have some new experiences and to save some money, so with 18 years old I traveled to Germany alone and I started working and saving  money and learning a new language.</p>
    <p>I came back to Spain in August after 8 months in Germany and now I am focused in my first goal that I had when I finished High School, to become one of the best software engineers of the world</p>
    </article>
    </section>`;
}