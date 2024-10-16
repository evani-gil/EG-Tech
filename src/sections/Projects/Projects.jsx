import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/AlbedoBase_XL_Logo_for_a_bakery_named_Glorious_Butter_1.jpg';
import freshBurger from '../../assets/AlbedoBase_XL_Logo_for_a_coffee_shop_named_Celestial_coffee_us_0.jpg';
import hipsster from '../../assets/AlbedoBase_XL_Logo_for_a_make_up_agency_called_Cat_use_makeup_2.jpg';
import fitLift from '../../assets/AlbedoBase_XL_Logo_for_a_software_company_name_EG_Tech_use_com_1.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Glorious Butter"
          p="Bakery"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/bethel-school-of-technology/team-the-celestials-backend"
          h3="Celestial Coffee"
          p="Coffee House"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Beauty By Cat"
          p="Make Up artist"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="EG Tech"
          p="Software Solutions"
        />
      </div>
    </section>
  );
}

export default Projects;
