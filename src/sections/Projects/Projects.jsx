import styles from './ProjectsStyles.module.css';
import ecommerce from '../../assets/ecommerce.png';
import movie from '../../assets/moviee.png';
import reservation from '../../assets/reservation.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ecommerce}
          link="https://github.com/Subinzodiac/Ecommerce-Mern.git"
          h3="Ecommerce"
          p="Ecommerce Application "
        />
        <ProjectCard
          src={movie}
          link="https://subin-appv3-subin-zodiacs-projects.vercel.app/"
          h3="Movie Review & Rating"
          p="Movie Review Website "
        />
        <ProjectCard
          src={reservation}
          link="https://github.com/Subinzodiac/KK-Cafe-.git"
          h3="K K Cafe"
          p="Restaurant Reservation Website"
        />
      </div>
    </section>
  );
}

export default Projects;
