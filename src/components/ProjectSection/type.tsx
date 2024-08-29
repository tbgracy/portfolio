type Project = {
  name: string;
  image?: string;
  github: string;
  description: string;
  featured?: boolean;
  private?: boolean;
  stack: string[];
};

export default Project;
