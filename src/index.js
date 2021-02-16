import React, { useState, useEffect, useRef } from 'react';

const Accordion = (props) => {
  const {
    className = 'accordion',
    Header,
    Body,
    data = [],
    keyField,
    duration = 0.25,
    single = false
  } = props

  const [ openedGroups, setOpenedGroups ] = useState([]);
  const bodiesRef = useRef([]);

  useEffect(() => {
    bodiesRef.current = bodiesRef.current.slice(0, data.length);
  }, [data]);

  const findGroupIndex = (key) => openedGroups
  .findIndex((el) => el === key);

const hasOpen = (key) => findGroupIndex(key) > -1;

const toggleOpenState = (key) => {
  if (single) {
    setOpenedGroups([key]);
    return;
  }

  const groupIndex = findGroupIndex(key);

  if (groupIndex === -1) {
    const updatedOpenedGroups = [...openedGroups];
    updatedOpenedGroups.push(key);
    setOpenedGroups(updatedOpenedGroups);
  } else {
    const updatedOpenedGroups = [...openedGroups];
    updatedOpenedGroups.splice(groupIndex, 1);
    setOpenedGroups(updatedOpenedGroups);
  }
};

  const handleHeaderClick = (key) => {
    toggleOpenState(key);
  };

  return (
    <div className={ className }>
      { data.map((group, index) => {
        const key = group[keyField];

        return (
          <div className={ `${className}-group` } key={ key } >
            <div className={ `${className}-header` }>
              <Header
                { ...group }
                onToggle={ () => handleHeaderClick(key) }
                isOpen={ hasOpen(key) }
              />
            </div>
            <div
              className={ `${className}-body-wrapper` }
              style={
                {
                  transition: `height ${duration}s`,
                  overflow: 'hidden',
                  height: hasOpen(key) ? bodiesRef.current[index]?.clientHeight : 0
                }
              }
            >
              <div
                className={ `${className}-body` }
                ref={ (el) => { bodiesRef.current[index] = el; } }
              >
                <Body
                  { ...group }
                  isOpen={ hasOpen(key) }
                />
              </div>
            </div>
          </div>
        );
      }) }
    </div>
  );
};

export default Accordion
