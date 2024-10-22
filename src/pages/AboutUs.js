import './AboutUs.css'; // Estilos personalizados

function AboutUs() {
  const authors = [
    {
      name: 'David Zhang',
      career: 'Ingeniero en Software',
      age: 21,
      hobby: 'Ver eSport',
      image: process.env.PUBLIC_URL + '/images/David.jpeg', // Imagen local
    },
    {
      name: 'José Herazo',
      career: 'Ingeniero de Software',
      age: 22,
      hobby: 'Fotografía y arte digital',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Eduardo Maestre',
      career: 'Ingeniero en Software',
      age: 23,
      hobby: 'Ciclismo y leer libros de ciencia ficción',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="about-us-container">
      <h2>Conócenos</h2>
      <p className="intro-text">
        Somos un equipo apasionado por el desarrollo de software. Nos dedicamos a crear soluciones tecnológicas 
        innovadoras para impulsar el crecimiento de empresas agrícolas.
      </p>
      <div className="authors">
        {authors.map((author, index) => (
          <div key={index} className="author-card">
            <img src={author.image} alt={`Foto de ${author.name}`} />
            <div className="author-info">
              <h3>{author.name}</h3>
              <p><strong>Carrera:</strong> {author.career}</p>
              <p><strong>Edad:</strong> {author.age}</p>
              <p><strong>Hobby:</strong> {author.hobby}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
