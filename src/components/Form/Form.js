import { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [zodiac, setZodiac] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Cześć ${name}, twój znak zodiaku to: ${zodiac}`;
    props.sendMessageToParentComponent(message);
  };

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'zodiac') {
      setZodiac(event.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Znak zodiaku:
        <input
          type="text"
          name="zodiac"
          value={zodiac}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Wyślij" />
    </form>
  );
}

export default Form;
