import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/twitter-logo.svg", "Twitter")}
${Button("/github-logo.svg", "GitHub")}
${Button("/linkedin-logo.svg", "LinkedIn")}
</div>
`;