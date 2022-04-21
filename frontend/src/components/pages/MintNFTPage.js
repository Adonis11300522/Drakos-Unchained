import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { DivContainer, Layout, Section, SectionTitle } from '../tags/Tags'
import { useState } from "react";
import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";

export default function MintNFTPage() {
    const [files, setFiles] = useState([]);
    const [imageSrc, setImageSrc] = useState(undefined);
    const updateFiles = (incommingFiles) => {
        console.log("incomming files", incommingFiles);
        setFiles(incommingFiles);
    };
    const onDelete = (id) => {
        setFiles(files.filter((x) => x.id !== id));
    };
    const handleSee = (imageSource) => {
        setImageSrc(imageSource);
    };
    const handleClean = (files) => {
        console.log("list cleaned", files);
    };
    return (
        <DivContainer className="MintNFTPage">
            <Layout>
                <Container>
                    <Section>
                        <SectionTitle>Mint your own NFT</SectionTitle>
                        <DivContainer className="opacity-panel mt-5">
                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <Dropzone
                                        style={{ minWidth: "550px" }}
                                        //view={"list"}
                                        onChange={updateFiles}
                                        minHeight="195px"
                                        onClean={handleClean}
                                        value={files}
                                        maxFiles={5}
                                        //header={false}
                                        // footer={false}
                                        maxFileSize={2998000}
                                        //label="Drag'n drop files here or click to browse"
                                        //label="Suleta tus archivos aquí"
                                        accept=".png,image/*"
                                        // uploadingMessage={"Uploading..."}
                                        url="https://my-awsome-server/upload-my-file"
                                        //of course this url doens´t work, is only to make upload button visible
                                        //uploadOnDrop
                                        //clickable={false}
                                        fakeUploading
                                        //localization={"FR-fr"}
                                        disableScroll
                                        >
                                        {files.map((file) => (
                                            <FileItem
                                            {...file}
                                            key={file.id}
                                            onDelete={onDelete}
                                            onSee={handleSee}
                                            //localization={"ES-es"}
                                            resultOnTooltip
                                            preview
                                            info
                                            hd
                                            />
                                        ))}
                                        <FullScreenPreview
                                            imgSource={imageSrc}
                                            openImage={imageSrc}
                                            onClose={(e) => handleSee(undefined)}
                                        />
                                    </Dropzone>
                                </Col>
                                <Col lg="6" md="6" sm="12" className='p-5'>
                                    <Form >
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                defaultValue="Mark"
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>                                            
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                defaultValue="Mark"
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>                                            
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                defaultValue="Mark"
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>                                            
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>                                          
                                        </Row>
                                        <Row className="mb-3 align-items-end">
                                            <Form.Group as={Col} md="5" controlId="validationCustom03">
                                            <Form.Label>Attributes</Form.Label>
                                            <Form.Control type="text" placeholder="Attributes" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid city.
                                            </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="5" controlId="validationCustom04">
                                            <Form.Control type="text" placeholder="Attributes" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid state.
                                            </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="2" controlId="validationCustom05">
                                                <Button className='BtnSkyOpen add-attribute'>+</Button>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3 align-items-end">
                                            <Form.Group as={Col} md="8" controlId="validationCustom05">
                                                <Button className='BtnSkyOpen'>Mint</Button>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                            <Form.Label>Attributes</Form.Label>
                                            <Form.Control type="text" placeholder="Attributes" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid city.
                                            </Form.Control.Feedback>
                                            </Form.Group>                                            
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </DivContainer>
                    </Section>
                </Container>
            </Layout>
        </DivContainer>
    )
}
