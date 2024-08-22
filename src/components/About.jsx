import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <h2 className="title">
          Sobre <span>nós</span>
        </h2>
        <div className="row">
          <div className="container-image">
            <img src="../src/img/about-img.jpg" alt="sobre-nos" />
          </div>
          <div className="content">
            <h3>O que fazemos de especial</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus tempora fugit cupiditate. Ab illo officia numquam
              incidunt magni ipsum eum esse labore voluptates sequi, error minus
              natus quia earum culpa!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              commodi alias neque dolor reiciendis vitae ipsa tempore omnis
              laudantium molestias nulla corporis deserunt, est blanditiis hic
              unde dolorum voluptatibus quasi.
            </p>

            <a href="#" className="btn">Saiba mais</a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
