import React, {useState} from 'react'
import { Input, Button } from 'antd';

const styles = {
  table: {
    width: '400px'
  },
  form: {
    submitBtn: { marginTop: '15px' },
    input: { marginTop: '10px' }
  }
}

function ContactForm ({ addEntryToBook }) {
  const initialState = () => {
    return {
      userFirstName: 'Developer',
      userLastName: 'Coder',
      userPhone: '88759999'      
    }
  }

  const [userData, setUserData] = useState(initialState)

  const onChangeFormInput = (e) => {
    setUserData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const submitUserData = (e) => {
    addEntryToBook(userData)
    setUserData(initialState)
    e.preventDefault()
  }

  return (
    <form onSubmit={(e) => submitUserData(e)}>
      <Input
        placeholder="Firs Name"
        name="userFirstName"
        style={styles.form.input}
        value={userData.userFirstName}
        onChange={(e) => onChangeFormInput(e) }
      />
      <Input
        placeholder="Last Name"
        name="userLastName"
        style={styles.form.input}
        value={userData.userLastName}
        onChange={(e) => onChangeFormInput(e) }        
      />

      <Input
        placeholder="Prone"
        name="userPhone"
        style={styles.form.input}
        value={userData.userPhone}
        onChange={(e) => onChangeFormInput(e) }
      />

      <Button
        htmlType="submit"
        type="primary"
        style={styles.form.submitBtn}
      >
        Add User
      </Button>
    </form>
  )
}

function ContactList ({ contactList }) {
  console.log('EEEEEEEE', contactList)

  const list = contactList
    .sort((contact1, contact2) => {
      return contact1.userLastName > contact2.userLastName ? 1 : (contact1.userLastName < contact2.userLastName ? -1 : 0)
    })
    .map((contact, index) => {
      return <tr key={index}>
        <td>{contact.userFirstName}</td>
        <td>{contact.userLastName}</td>
        <td>{contact.userPhone}</td>
      </tr>
  })

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  )
}

export default function Contacts () {
  const [contactList, setContactList] = useState([])

  function addEntryToBook (entryData) {
    setContactList(prevContactList => ([...prevContactList, ...[entryData]]))
    console.log(contactList)
  }

  return (
    <div>
      <ContactForm addEntryToBook={addEntryToBook}></ContactForm>
      <ContactList contactList={contactList} />
    </div>
  )
}