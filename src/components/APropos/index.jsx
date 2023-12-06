import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import classnames from 'classnames';
import '../../styles/Apropos.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function About() {
  const items = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: 'Service',
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: 'Sécurité',
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const getIconRotationClass = (index) => {
    return classnames('rotate-icon', {
      'rotated': expanded === index,
    });
  };

  return (
    <section id='collapse_Container'>
      <div className='banner'></div>

      <div id='aboutUs_container'>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div
                className='listCollapse_title'
                data-toggle='collapse'
                data-target={`#collapse-${index}`}
                aria-expanded={expanded === index}
                onClick={() => handleToggle(index)}
              >
                <h3>{item.title}</h3>
                <FontAwesomeIcon icon={faChevronDown} className={getIconRotationClass(index)} />
              </div>
              <Collapse id={`collapse-${index}`} in={expanded === index}>
                <div className='listCollapse_content'>
                  <p>{item.content}</p>
                </div>
              </Collapse>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;