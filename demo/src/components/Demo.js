import React, { useState } from 'react';
import Accordion from '../../../src'
import './Demo.css'

const sampleData = [
  {
    groupId: 'g1',
    groupName: 'Land',
    groupData: [
      {
        id: 'g1v1',
        value: '🐢 Turtle',
        wiki: 'https://en.wikipedia.org/wiki/Turtle'
      },
      {
        id: 'g1v2',
        value: '🐄 Cow',
        wiki: 'https://en.wikipedia.org/wiki/Cattle'
      },
      {
        id: 'g1v3',
        value: '🦔 Hedgehog',
        wiki: 'https://en.wikipedia.org/wiki/Hedgehog'
      },
    ]    
  },
  {
    groupId: 'g2',
    groupName: 'Sea',
    groupData: [
      {
        id: 'g2v1',
        value: '🐋 Whale',
        wiki: 'https://en.wikipedia.org/wiki/Whale'
      },
      {
        id: 'g2v2',
        value: '🦀 Crab',
        wiki: 'https://en.wikipedia.org/wiki/Crab'
      },
    ]    
  }
]

const Demo = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('None')

  return (
    <div className="demo">
      <p className="demo__selected-animal">
        Selected animal: { selectedAnimal }
      </p>
      <Accordion
        className="accordion"
        Header={ (headerProps) => (
          <button
            className={'demo__accordion-button' + (headerProps.isOpen ? ' demo__accordion-button--opened' : '')}
            onClick={ headerProps.onToggle }
          >
            { headerProps.groupName }
            { headerProps.isOpen ? <span>&darr;</span> : <span>&rarr;</span> }
          </button>
        ) }
        Body={ (contentProps) => (
          <ul className="demo__accordion-list">
            { contentProps.groupData.map((el) => (
              <li 
                className="demo__accordion-item"
                key={ el.id }
                onClick={ () => setSelectedAnimal(el.value)}
              >
                <span className="demo__accordion-item-value">{ el.value }</span>
                <a
                  className="demo__accordion-item-link"
                  href={ el.wiki }
                  target="_blank"
                >
                  wiki
                </a>
              </li>
            )) }
          </ul>
        ) }
        data={ sampleData }
        keyField="groupId"
        // duration={ 0.25 }
        // single
      />
    </div>
  );
};

export default Demo;