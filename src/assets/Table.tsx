import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Data.module.css'; 

const Datos = () => {
  const [data, setData] = useState([]);
  const [Dataconsultada, setDato] = useState([]);

  useEffect(() => {
    axios.get('/api/blog')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error al Obtener datos ", error);
      });
  }, []);

  const Consultar= () => {setDato(data); };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.heading}>Consulta de Datos</h1>
      <div className={styles.formGroup}>
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={Consultar} className={styles.button}>Consultar</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {Dataconsultada.map(dato => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.title}</td>
              <td>{dato.author}</td>
              <td>{dato.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datos;