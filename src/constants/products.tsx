import codeconvertor from "/public/images/codeconvertir.png";
import codeconvertor2 from "/public/images/codeconvertor2.png";
import presente1 from "/public/images/presente1.png";
import presente2 from "/public/images/presente2.png";
import riosgenuzio1 from "/public/images/riosgenuzio1.png";
import riosgenuzio2 from "/public/images/riosgenuzio2.png";

export const products = [
  {
    href: "https://www.riosgenuzio.com/",
    title: "Rios Genuzio",
    description:
        "A responsive page for a consulting company",
    thumbnail: riosgenuzio1,
    images: [riosgenuzio1, riosgenuzio2],
    stack: ["Astro", "Tailwindcss"],
    slug: "riosgenuzio",
    content: (
        <div>
          <p>
            Rios Genuzio is a professional and responsive website created for a consulting company. It is designed to provide detailed information about the companys services, values, and expertise, ensuring potential clients have an exceptional first impression.
          </p>
          <p>
            Developed with Astro and TailwindCSS, the site prioritizes speed and responsiveness. The modern design enhances user experience, making it easy for visitors to navigate and access the information they need. The clean layout reflects the companys professionalism and dedication to quality.
          </p>
        </div>
    ),
  },

  {
    href: "https://www.presentebolivia.com/",
    title: "Presente",
    description:
        "A page with a blog for a youth movement in Bolivia",
    thumbnail: presente1,
    images: [presente1, presente2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "presente",
    content: (
        <div>
          <p>
            Presente is a website developed for a youth movement in Bolivia,
            aiming to inspire and unite young individuals through meaningful content
            and impactful blogs. The platform serves as a hub for sharing ideas and
            fostering collaboration among youth.
          </p>
          <p>
            Built with modern technologies like Next.js and TailwindCSS, the site
            emphasizes performance and responsiveness while maintaining a visually
            appealing design. The clean UI ensures easy navigation and an
            exceptional user experience.
          </p>
        </div>
    ),
  },

  {
    href: "https://codeconverter.io/",
    title: "CodeConverter.io",
    description:
        "SaaS tool to convert code snippets between programming languages",
    thumbnail: codeconvertor,
    images: [codeconvertor, codeconvertor2],
    stack: ["Svelte", "Tailwindcss"],
    slug: "codeconverter",
    content: (
        <div>
          <p>
            CodeConverter.io is a SaaS platform designed to seamlessly convert code snippets between different programming languages. Whether youre transitioning between technologies or working in a multilingual codebase, this tool helps bridge the gap by offering reliable and accurate conversions.
          </p>
          <p>
            Built using Svelte and TailwindCSS, the platform is lightweight, fast, and visually appealing. It provides developers with an intuitive and efficient way to handle code translations, saving time and reducing the risk of errors. Its responsive design ensures accessibility across devices, making it an essential tool for developers working in dynamic environments.
          </p>
        </div>
    ),
  }
];
