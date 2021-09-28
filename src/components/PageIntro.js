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
          <a href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer">Samaritans</a> – for everyone<br/>
          Call 116 123<br/>
          Email <a href="mailto:jo@samaritans.org">jo@samaritans.org</a> <br/><br/>

          <a href="https://www.papyrus-uk.org/help-advice/about-hopelineuk" target="_blank" rel="noopener noreferrer">Papyrus</a>  – for people under 35<br/>
          Call 0800 068 41 41 – 9am to midnight every day<br/>
          Text 07860 039967<br/>
          Email <a href="mailto:pat@papyrus-uk.org">pat@papyrus-uk.org</a>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
	)
}

export default PageIntro