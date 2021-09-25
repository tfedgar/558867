import React, { useState } from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PageIntro = (props) =>  {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return(
    <>
      <Container className="pt-5">
        <Button color="danger" className="w-100 mb-4" onClick={toggle}>
          URGENT HELP HERE
        </Button>
        <div className="py-4">
          { documentToReactComponents( JSON.parse(props.text.raw) ) }
        </div>
      </Container>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
	)
}

export default PageIntro