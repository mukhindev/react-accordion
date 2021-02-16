# react-accordion

Minimalistic accordion for React. Without styles and unnecessary elements. Create what you need using любой JSX and returned data.

## Demo

https://github.com/mukhindev/react-accordion


## How to use

### Install

```bash
npm i @mukhindev/react-accordion
```


### Props

```JSX
<Accordion
  data={ data } // data array
  keyField="groupId" // unique key field in the data array
  Header={ (headerProps) => (
    // any JSX for header
  ) }
  Body={ (contentProps) => (
    // any JSX for body
  ) }
  duration={ 0.25 } // transition duration in s / optional (default: 0.25)
  single // automatic closing for other groups / optional (default: false)
/>
```

### Returned Props
```JSX
<Accordion
  Header={ (headerProps) => () }
  Body={ (contentProps) => () }
/>
```

`headerProps` and `contentProps` contain the same data:

```javascript
{
  ...data // data item from data array
  onToggle // function —> open/close
  isOpen // bool, сurrent open/close state
}
```


### Example-1

```JSX
import Accordion from '@mukhindev/react-accordion';

const data = [
  {
    id: '1',
    header: 'Card-1',
    body: 'Body-1'
  },
  {
    id: '2',
    header: 'Card-2',
    body: 'Body-2'
  }
];

const Example1 = () => {
  return {
    <Accordion
      data={ data }
      keyField="id"
      Header={ (headerProps) => (
        <button onClick={ headerProps.onToggle } >
          { headerProps.header }
        </button>
      ) }
      Body={ (contentProps) => (
        <div>
          { contentProps.body }
        </div>
      ) }
    />
  }
};

export default Example1;
```

```
----------
Card-1 ↓
----------
Body-1 
----------
Card-2 →
----------
```


### Example-2

```JSX
import Accordion from '@mukhindev/react-accordion';

const data = [
  {
    groupId: 'g1',
    groupName: 'Group-1',
    groupData: [
      {
        id: 'g1-1',
        value: 'Value-1'
      },
      {
        id: 'g1-2',
        value: 'Value-2'
      }
    ]
  },
  {
    groupId: 'g2',
    groupName: 'Group-2',
    groupData: [
      {
        id: 'g2-1',
        value: 'Value-3'
      }
    ]
  }
];

const Example2 = () => {
  return {
    <Accordion
      data={ data }
      keyField="groupId"
      Header={ (headerProps) => (
        <button onClick={ headerProps.onToggle } >
          { headerProps.groupName }
        </button>
      ) }
      Body={ (contentProps) => (
        <div>
          { contentProps.groupData.map((el) => (
            <div key={ el.id }>{ el.value }</div>
          )) }
        </div>
      ) }
    />
  }
};

export default Example2;
```

```
----------
Group-1 ↓
----------
Value-1 
Value-2
----------
Group-2 →
----------
```

### Todo:

- [x] v1
- [ ] Publish to npm
- [ ] return props onOpen()
- [ ] return props onClose()
- [ ] remove `overflow: hidden;` after transition
