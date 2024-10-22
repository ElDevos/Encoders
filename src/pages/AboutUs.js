import './AboutUs.css'; // Importaremos estilos personalizados

function AboutUs() {
  const authors = [
    {
      name: 'Juan Pérez',
      career: 'Ingeniero en Sistemas',
      age: 25,
      hobby: 'Desarrollar videojuegos',
      image: 'https://via.placeholder.com/150', // Imagen de ejemplo
    },
    {
      name: 'Ana Gómez',
      career: 'Diseñadora UX/UI',
      age: 24,
      hobby: 'Fotografía y arte digital',
      image: 'https://via.placeholder.com/150', // Imagen de ejemplo
    },
    {
      name: 'Carlos López',
      career: 'Ingeniero en Software',
      age: 26,
      hobby: 'Ciclismo y leer libros de ciencia ficción',
      image: 'https://via.placeholder.com/150', // Imagen de ejemplo
    },
  ];

  return (
    <div className="about-us-container">
      <h2>Sobre Nosotros</h2>
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
