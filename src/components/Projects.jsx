import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-mono" 
        style={{ color: '#fffce1' }}
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Image Section */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <ImageCarousel images={project.image} />
            </motion.div>
            {/* Details Section */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold font-mono text-2xl" style={{ color: '#fffce1' }}>
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400 font-mono">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium font-mono" 
                  style={{ color: '#9CFF00' }}
                >
                  {tech}
                </span>
              ))}<br/>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block font-mono text-sm font-semibold underline transition-colors duration-300"
                style={{ color: '#40A4FF' }}
                onMouseEnter={(e) => e.target.style.color = '#9CFF00'}
                onMouseLeave={(e) => e.target.style.color = '#40A4FF'}
              >
                View Source Code
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 1/2 second (500 milliseconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <img
      src={images[currentImageIndex]} 
      width={400}
      height={400}
      alt="Project"
      className="mb-6 rounded"
      style={{ borderColor: '#9CFF00', borderWidth: '2px', borderStyle: 'solid' }}
    />
  );
}

export default Projects;
