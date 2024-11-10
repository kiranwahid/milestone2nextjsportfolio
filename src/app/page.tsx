
import About from "./about/page";
import Contact from "./contact/page";

import Herosection from "./herosection/page";
import Projectshow from "./projectshoow/page";
import Skill from "./skill/page";




export default function Home() {
  return (
<div>
<Herosection/>
<About/>
<Skill/>
<Projectshow/>
<Contact/>
</div>
  );
}
