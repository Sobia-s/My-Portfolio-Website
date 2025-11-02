import img0 from "../Assets/projects/0.webp";
import img1 from "../Assets/projects/1.webp";
import img2 from "../Assets/projects/2.webp";
import img3 from "../Assets/projects/3.webp";
import img4 from "../Assets/projects/4.webp";
import img5 from "../Assets/projects/5.webp";
import img6 from "../Assets/projects/6.webp";
import img7 from "../Assets/projects/7.webp";
import img8 from "../Assets/projects/8.webp";
import img9 from "../Assets/projects/9.webp";
import wpBlogImg from "../Assets/projects/10.webp";
import wpPhotoImg from "../Assets/projects/11.webp";

export const projects = [
  {
    title: "Lumina - Your Personal Portfolio Website",
    image: img0,
    description: (
      <>
        <h3>Lumina - Your Storytelling Portfolio</h3>
        <div className="first-card-description">
          No visual UI. No story. No personality. No presence.
          <br />
          Just GitHub code, often missed opportunities.
          <br />
          Lumina solves all these problems for developers:
          <br />
          1. Build a strong digital presence
          <br />
          2. Stand out in a crowded space
          <br />
          3. Unlock real opportunities
          <br />
          Because your skills deserve to be seen and remembered.
          <br />
          Ready to build your identity & shine online? ✨
        </div>
      </>
    ),
    live: "https://sobia.gumroad.com/l/lumina-reactjs-portfolio-template",
    linkText: "Let's go!",
  },
  {
    title: "E-Commerce Platform",
    image: img1,
    technologies: ["React", "React Router", "JSX", "CSS", "UI Design"],
    description: (
      <>
        Built an e-commerce platform for a garden firm to simplify online
        shopping.
        <br />
        Implemented a dynamic product catalog, smooth cart management, and an
        integrated checkout with a clean, responsive UI.
        <br />
        The result is a fast, user-friendly shopping experience.
      </>
    ),
    code: "https://github.com/Sobia-s/Garden-firm-project",
    live: "https://lucky-shrub-garden-firm.netlify.app/",
  },
  {
    title: "Restaurant Website",
    image: img2,
    technologies: ["React", "JSX", "CSS", "UX Design", "Responsive Design"],
    description: (
      <>
        Developed a restaurant site for Little Lemon to simplify the reservation
        process.
        <br />
        Implemented dynamic booking functionality with a fully operational
        reservation form and visually appealing UI.
        <br />
        The result is a responsive platform that makes table reservations quick
        and easy.
      </>
    ),
    code: "https://github.com/Sobia-s/my-capstone-project",
    live: "https://my-capstone.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: img3,
    technologies: ["React", "Chakra UI", "UI Components", "JSX"],
    description: (
      <>
        Created a modern-style portfolio for React developers to simplify
        navigation.
        <br />
        Implemented a unique, responsive design with functional form submission
        (including form validation), featured projects, and intuitive
        navigation.
        <br />
        The result is a responsive, modern portfolio that effectively showcases
        personality and work.
      </>
    ),
    code: "https://github.com/Sobia-s/React-Project",
    live: "https://myreact-projects.netlify.app/",
  },
  {
    title: "Blog landing page",
    image: img4,
    technologies: ["HTML", "CSS", "Responsive design"],
    description: (
      <>
        Created a landing page for Little Lemon to showcase their recipes in an
        engaging way.
        <br />
        Implemented a clean, responsive design with easy navigation through the
        recipe collection and a subscription email input for user engagement.
        <br />
        The result is a modern, user-friendly platform that highlights recipes
        and improves browsing.
      </>
    ),
    code: "https://github.com/Sobia-s/Food-Blog",
    live: "https://little-lemon-blog.netlify.app/",
  },
  {
    title: "Tic-Tac-Toe Project",
    image: img5,
    technologies: ["JavaScript", "HTML", "CSS", "UI Design"],
    description: (
      <>
        Built an interactive Tic-Tac-Toe game to provide an engaging, fun
        experience while enhancing problem solving skills.
        <br />
        Developed with HTML, CSS, and JavaScript, featuring responsive design
        and visually appealing UI.
        <br />
        The result is a simple, interactive game that’s enjoyable to play across
        devices.
      </>
    ),
    code: "https://github.com/Sobia-s/Tic-Tac-Toe",
    live: "https://my-first-tictactoe-game.netlify.app/",
  },
  {
    title: "To-Do App Project",
    image: img6,
    technologies: ["React", "UX design", "JSX", "CSS", "UI Design"],
    description: (
      <>
        Built a task manager app to help users organize and track their tasks
        efficiently.
        <br />
        Developed with an interactive UI and local storage for task management,
        allowing tasks to be added and removed easily.
        <br />
        The result is a sleek, user-friendly app for simple and efficient task
        management.
      </>
    ),
    code: "https://github.com/Sobia-s/To-Do-App",
    live: "https://my-1st-todo.netlify.app/",
  },
  {
    title: "Calculator App Project",
    image: img7,
    technologies: ["React", "JSX", "CSS", "UI Design"],
    description: (
      <>
        Built a functional calculator to simplify basic arithmetic operations.
        <br />
        Developed with a clean, intuitive interface that allows users to perform
        calculations easily and accurately, providing a smooth experience.
        <br />
        The result is a responsive, user-friendly calculator that’s simple and
        reliable across devices.
      </>
    ),
    code: "https://github.com/Sobia-s/Calculator-App",
    live: "https://my-react-first-calculator.netlify.app/",
  },
  {
    title: "Blog Website",
    image: img8,
    technologies: ["WordPress", "Elementor", "WPForms", "UI Design"],
    description: (
      <>
        Built a blog website to provide an easy-to-manage platform for content
        creation.
        <br />
        Developed with a visually appealing, clean layout, integrated contact
        form, and post features for smooth navigation and enjoyable reading.
        <br />
        The result is a user-friendly blog that makes creating, managing, and
        reading content simple and engaging.
      </>
    ),
    canvaImage: wpBlogImg,
  },
  {
    title: "Photography Website",
    image: img9,
    technologies: ["WordPress", "Elementor", "WPForms", "ElementsKit Lite"],
    description: (
      <>
        Built a photography website to showcase work and manage client bookings
        easily.
        <br />
        Developed with a visually appealing design, interactive gallery, and
        working contact form.
        <br />
        The result is an easy-to-use site that shows photography and makes
        contacting clients simple.
      </>
    ),
    canvaImage: wpPhotoImg,
  },
];
