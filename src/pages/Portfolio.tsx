import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import FilterButton from '../components/FilterButton';
import type { Project } from '../components/ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: "Eco-Friendly Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Tech Startup Website",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Product Packaging",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "Restaurant Menu Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "Corporate Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  }
];

const categories = ["All", "Branding", "UI/UX", "Graphic Design"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Our Portfolio"
          subtitle="Explore our diverse collection of creative works"
        />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;