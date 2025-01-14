import { createRoot } from "react-dom/client";

const root = document.getElementById("root")

const element = createRoot(root);

element.render(
  <div>
    <h1>دوره جامع فرانت اند</h1>
    <p>دوره جامع ری اکت</p>
    <ul>
      <li>html</li>
      <li>css</li>
      <li>js</li>
    </ul>
  </div>
);