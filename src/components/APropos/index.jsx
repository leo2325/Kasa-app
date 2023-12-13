import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import classnames from 'classnames';
import '../../styles/Apropos.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function About() {
  // Tableau contenant les éléments de liste 'titre' et 'contenu', récupérés sur les commentaires de la maquette figma.
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

  // Le hook useState est utilisé pour déclarer un état local expanded qui stocke l'index de l'élément de liste actuellement étendu.
  const [expanded, setExpanded] = useState(null);

  // Fonction flêchée pour dérouler les listes.
  // Une fonction handleToggle est définie pour basculer l'élément de liste actuellement étendu en fonction de l'index passé en paramètre.
  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  // Une fonction getIconRotationClass génère une classe CSS conditionnelle pour faire pivoter l'icône de la flèche vers le haut en fonction de l'index.
  const getIconRotationClass = (index) => {
    return classnames('rotate-icon', {
      'rotated': expanded === index,
    });
  };
  // Le rendu du composant consiste en une section contenant :
  //  une bannière (<div className='banner'></div>) 
  //  et une liste (<ul>) d'éléments (<li>) définis par le tableau items.
  // Chaque élément de la liste est composé d'un titre cliquable et d'une zone rétractable (collapse) contenant du contenu textuel. 
  // L'état de l'expansion est géré par l'état local expanded.
  // L'icône de la flèche vers le haut est également incluse et elle pivote en fonction de l'état d'expansion.
  // Note : Le code utilise des fonctionnalités de React Bootstrap et FontAwesome pour styliser et animer certains éléments.
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
                <FontAwesomeIcon icon={faChevronUp} className={getIconRotationClass(index)} />
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