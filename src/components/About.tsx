"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
  ];

  return (
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
          {images.map((image, index) => (
              <motion.div
                  key={image}
                  initial={{
                    opacity: 0,
                    y: -50,
                    rotate: 0,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: index % 2 === 0 ? 3 : -3,
                  }}
                  transition={{duration: 0.2, delay: index * 0.1}}
              >
                <Image
                    src={image}
                    width={200}
                    height={400}
                    alt="about"
                    className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                />
              </motion.div>
          ))}
          {/*
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
        </div>

        <div className="max-w-4xl">
          <Paragraph className="mt-4">
            Hey there, I&apos;m Sergio Rios—a passionate full-stack developer and an enthusiast of awesome design.
            Welcome to my corner of the digital world!
          </Paragraph>
          <Paragraph className="mt-4">
            Since the early days of my journey, I&apos;ve been captivated by the art of crafting exceptional digital
            experiences. As a developer, I thrive on turning lines of code into functional and elegant solutions. My
            goal is not just to create software, but to build digital marvels that seamlessly merge form and function.
          </Paragraph>
          <Paragraph className="mt-4">
            With 3 years of experience, I specialize in building scalable web applications that are both
            performance-optimized and visually appealing. I believe that aesthetics and usability go hand in hand,
            ensuring every project not only works flawlessly under the hood but also looks stunning on the surface.
          </Paragraph>
          <Paragraph className="mt-4">
            Through this website, I aim to share my insights, experiences, and creations with you. Whether you&apos;re a
            fellow developer seeking solutions or someone who appreciates the finer aspects of design, there&apos;s
            something here for you.
          </Paragraph>
          <Paragraph className="mt-4">
            Join me on this journey of code and creativity. Together, we can explore the boundless possibilities of
            technology while reveling in the beauty of thoughtful design.
          </Paragraph>
          <Paragraph className="mt-4">
            Thank you for being here, and I can&apos;t wait to embark on this adventure with you.
          </Paragraph>
        </div>

      </div>
  );
}
