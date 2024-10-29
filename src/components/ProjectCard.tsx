import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-200">{project.category}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white mt-4 hover:text-coral-300"
            >
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;