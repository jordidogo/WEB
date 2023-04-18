import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import portada from '../../Assets/30.jpg'
import bvckoff from '../../Assets/bvck1.jpg'
import wg from '../../Assets/wg.jpg'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portada}
                isBlog={false}
                title="TRAS EL VOLANTE"
                description="La serie donde podrás ver proyectos únicos a nivel Insular de Canarias."
                ghLink="https://www.youtube.com/watch?v=9-K5khSVneQ&list=PLne7EuJAkzrHUYrhvcg5LxFbDKwbK_6kW"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bvckoff}
                isBlog={false}
                title="BVCK OFF"
                description="THE REVERSE BRAND"
                ghLink="https://www.instagram.com/bvck.off/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={wg}
                isBlog={false}
                title="@Whiteglf7"
                description=""
                ghLink="https://www.instagram.com/whiteglf7/"
              />
            </Col>
            {/*}
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>*/}
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist