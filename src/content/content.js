import React from "react";

export const WHO_AM_I = `
  Hi! I'm Mark Fang. I am currently a student living in St. Louis in middle school. 
  If you don't see me coding, napping, or writing, you can usually see me shooting 
  some hoops in the driveway. If you happen to see me in St. Louis, say hi to me. Don't worry, I don't bite!
`;

export const PROJECTS_INTRO = `
  I am an avid coder. I love to create websites, command line interfaces, and other awesome 
  sh*t. I'm not always a couch potato, here are some of my projects I created. 
`;

export const PROJECT_1 = `
  I go to mandarin language school on Sundays. I noticed that their COVID check-in system is super slow.
  So I created a website that helps our school check-in faster with custom QR codes. 
`;

export const PROJECT_2 = `
  The website you are viewing right now is one of my projects! My personal website is created with 
  React, Tailwind CSS, and Framer Motion.
`;

export const PROJECT_3 = `
  I created a CRUD website sort of like linktr.ee, where you can introduce yourself with a link. Disclaimer: 
  The Project is not in production yet. 
`;

export const SERVICES_INTRO = () => {
  return (
    <p>
      I am a passionate developer always ready to find some work. I'm always
      ready to tackle any web project that would help elevate your business to
      the next level. You can contact me at my work email{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-teal-800">
        mfangcoding@gmail.com
      </span>
      .
    </p>
  );
};

export const SERVICES_HELPYOU = `
  With my flexible schedules and coding expertise, I can help develop websites or 
  applications that can help reach your audience online 🌎. Let me help you create
  and manage your websites. 
`;

export const SERVICES_WHY = () => {
  return (
    <ol className="text-sm flex flex-col space-y-3 max-w-lg">
      <li>
        1. Your website will help establish your brand as it conveys
        professionalism.
      </li>
      <li>
        2. Reach potential customers from the internet, and build a strong
        community.
      </li>
      <li>
        3. Showcase and get people actually <strong>EXCITED</strong> about your
        product.
      </li>
      <li>
        4. With a website, customer service and announcements have never been
        easier.
      </li>
      <li>5. Generate leads and sales while your asleep 💤.</li>
    </ol>
  );
};

export const SERVICES_SKILLS = [
  { skill: "HTML + CSS", level: 100, color: 'red', duration: 1 },
  { skill: "React", level: 90, color: 'indigo', duration: 1.5},
  { skill: "Server Development", level: 70, color: 'pink', duration: 2 },
  { skill: "Python", level: 40, color: 'green' , duration: 2.5},
];
