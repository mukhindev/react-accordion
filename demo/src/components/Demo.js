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
  const [selectedAnimal, setSelectedAnimal] = useState('🤷‍♂️ None')

  return (
    <div className="demo">
      <main>
      <p className="demo__selected-animal">
        Selected animal: { selectedAnimal }
      </p>
        <Accordion
          className="accordion"
          Header={ (headerProps) => (
            <button
              className={'demo__accordion-button' + (headerProps.isOpen ? ' demo__accordion-button--opened' : '')}
              onClick={ headerProps.onToggle }
              type="button"
            >
              { headerProps.groupName }
              { headerProps.isOpen ? <span>&darr;</span> : <span>&rarr;</span> }
            </button>
          ) }
          Body={ (bodyProps) => (
            <ul className="demo__accordion-list">
              { bodyProps.groupData.map((el) => (
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
          onOpen={ (key) => { console.log(`onOpen -> ${key}`) }}
          onClose={ (key) => { console.log(`onClose -> ${key}`) }}
          // duration={ 0.25 }
          // single
        />
      </main>
      <footer className="demo__footer">
        <p className="demo__author">@mukhindev | 2021</p>
        <ul className="demo__link-list">
          <li className="demo__link-item">
            <a className="demo__link" href="https://mukhin.dev/" target="_blank">Website</a>
          </li>
          <li className="demo__link-item">
            <a className="demo__link" href="https://github.com/mukhindev/react-accordion" target="_blank">GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Demo;