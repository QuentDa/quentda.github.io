import React, { useState } from 'react';
import './Projects.css';
import dataWork from './dataWork.json';
import Modal from '../Modal/Modal';

function groupDataIntoPairs(data) {
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }
  return groupedData;
}

function Projects() {
  /*MODAL*/
  const [isOpen, setIsOpen] = useState(false);
  /*Initialize clicked data*/
  const [activeData, setActiveData] = useState(null);

  const handleModal = (data) => {
    setActiveData(data);
    setIsOpen(!isOpen);
  }



  // Group data into pairs
  const groupedData = groupDataIntoPairs(dataWork);

  return (
    <div className="projects">
      <div className="page-width projects-wrapper">
        <div className="projects-header">
          <h2>PROJETS</h2>
          <button className="button-primary">GITHUB</button>
        </div>

        <div className="projects-content">
          {groupedData.map((row, rowIndex) => (
            <div
              className={`project-row ${rowIndex % 2 === 0 ? 'big-row' : 'small-row'}`}
              key={rowIndex}
            >
              {row.map((data, index) => (
                <div
                  className={`project ${index % 2 === 0 ? 'big' : 'small'}`}
                  key={data.id}
                  onClick={() => handleModal(data)}
                >
                  <div className="project-image">
                    <img src={data.img} alt={data.title} />
                  </div>
                  <div className='project-info-category'>
                    <span>{data.category}</span>
                  </div>
                  <div className="project-info">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <div>Voir plus</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {activeData ?
        <Modal isOpen={isOpen} handleModal={handleModal} title={activeData.title}>
          <div className='modal-wrapper'>
            <div className='modal-info'>
              <p>{activeData.fullContent}</p>
              <div className='modal-techno'>
                Technos utilisées : <br />
                <strong>{activeData.techno}</strong>
              </div>
              <div className='modal-link-wrapper'>
                <a href={activeData.live} target="_blank" rel="noreferrer"><InternetSVG /></a>
                <a href={activeData.github} target="_blank" rel="noreferrer"><GitHubSVG /></a>
              </div>
            </div>
            <img src={activeData.secondImg} alt={activeData.title} />
          </div>
        </Modal>
        : null}
    </div>
  );
}

export default Projects;
