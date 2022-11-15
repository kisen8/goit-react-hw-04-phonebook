import PropTypes from 'prop-types';
import {
  ItemContacts,
  ContactName,
  ContactNumber,
  BtnDelete,
  Delete,
} from './ContactItem.styled';
export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ItemContacts>
      <ContactName>{name}: </ContactName>
      <ContactNumber href={`tel:${number}`}>{number}</ContactNumber>
      <BtnDelete
        type="button"
        onClick={() => onDeleteContact(id)} // Метод на клике, принимает ID контакта
      >
        <Delete>Delete</Delete>
      </BtnDelete>
    </ItemContacts>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
