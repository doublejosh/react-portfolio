import React, { useState } from 'react'

import { Container, Row } from 'react-bootstrap'
import Carousel, { Modal, ModalGateway } from 'react-images'

import ProjectCard from './projectCard'
import TitleBox from '../titleBox'

import sampleImage from '../../img/sample.png'

export default props => {
    const [modalIsOpen, setModal] = useState(false)
    const [selectedId, setSelected] = useState(0)

    const toggleModal = selectedId => {
        setModal(!modalIsOpen)
        setSelected(selectedId)
    }

    let images = []

    return (
        <Container>
            <Row id={props.id} className="text-center">
                <TitleBox headline={props.headline} subhead={props.subhead} />
            </Row>
            <Row className="mb-4 pb-4">
                {props.projects.map((project, i) => {
                    const imagePath = project.image ? 'img/' + project.image : sampleImage
                    images.push({ source: imagePath })
                    return (
                        <React.Fragment key={project.title}>
                            <div className="col-xl-4 col-md-6 mb-4" onClick={() => toggleModal(i)}>
                                <ProjectCard {...project} project={project.id} />
                            </div>
                        </React.Fragment>
                    )
                })}
            </Row>
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={() => toggleModal()}>
                        <Carousel views={images} currentIndex={selectedId} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Container>
    )
}