import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import contactImg from 'contacts.png';
import {
  Forma,
  ImgWrap,
  Images,
  LableWrap,
  Label,
  Input,
  Btn,
  BtnText,
} from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    onSubmit(contact);

    reset();
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <ImgWrap>
        <Images src={contactImg} alt="phone"></Images>
      </ImgWrap>
      <LableWrap>
        <Label htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>

        <Btn type="submit">
          <BtnText>Add contact</BtnText>
        </Btn>
      </LableWrap>
    </Forma>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
