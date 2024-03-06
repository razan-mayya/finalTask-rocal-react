import React from 'react'
import bg from 'C://Users//Razan//Desktop//finaltask1//ReactApp//application//src//Components//imgs//bg.png'
import './AddJob.css'
import arrowicon from 'C://Users//Razan//Desktop//finaltask1//ReactApp//application//src//Components//imgs//arrowicon.png'
import { AddJobCard } from '../AddJobCard/AddJobCard'
import { ColoredCard } from '../ColoredCard/ColoredCard'
import { BlackButton } from '../BlackButton/BlackButton'
import { Col, Container, Row } from 'react-bootstrap'

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
export const AddJob = () => {
    const data1 =
        [
            { title: 'Job Title:', type: 'Example: art director' },
            { title: 'Job Level:', type: 'Sensor Graphic Designer' },
            { title: 'Education Level:', type: 'College degree' },
            { title: 'Job Role:', type: '25-30 years' },
            { title: 'Job Role:', type: 'Example: art director' },
            { title: 'Languages:', type: 'Arabic' },
            { title: 'Experiecne:', type: '3 years' },
            { title: 'Gender:', type: 'Male' }
        ]
    const data2 =
        [
            { title: 'Job Type:', type: 'volunteering' },
            { title: 'Address:', type: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { title: 'Work Hours:', type: 'Full time' },
            { title: 'City:', type: 'Lattakia' },
            { title: 'Salary Rabge:', type: '200,000 SYP - 300,000 SYP' }
        ]
    function button2(btntitle) {
        return (<button className='button2'><p className='button2para'>{btntitle}</p></button>
        )
    }
    return (

        <div className='con'>
            <img className='bg' src={bg} alt='..' />
            <img className='bg' src={bg} alt='..' />
            <img className='bg' src={bg} alt='..' />
            <img className='arrowicon' src={arrowicon} />
            <div className='cardcontainer'>
                <AddJobCard title='Job Name' greenpar='Active' para='03:30 pm 2022-02-22'
                    lasetsection={
                        <Container>
                            <Row>
                                <Col lg={4} md={4} sm={12} >
                                    <ColoredCard cardtitle='views' number='155' bordercolor='green' but={<BlackButton titlebutton='Close Post' width='90%' />} />
                                </Col>
                                <Col lg={4} md={4} sm={12} >
                                    <ColoredCard cardtitle='candidates' number='44' bordercolor='#FF8500' but={<BlackButton titlebutton='View candidates' width='90%' />} />
                                </Col>
                                <Col lg={4} md={4} sm={12} >
                                    <ColoredCard cardtitle='Interviews' number='9' bordercolor='blue' but={<BlackButton titlebutton='View Interviews' width='90%' />} />
                                </Col>
                            </Row>
                            <div className='lastsec'>
                                <button type="button" class="btn btn-outline-dark">Add Complaint</button>
                                <p className='redpar'>Delete Post</p>
                            </div>
                        </Container>

                    }
                />
                <AddJobCard title='Employee Specification' para='Select the employee information you are looking for.'
                    lasetsection={
                        <div className='textcon textcon1'>
                            {
                                data1.map(e => {
                                    return (
                                        <div className='group1'>
                                            <p className='titletext'>{e.title}</p>
                                            <p className='description'>{e.type}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                />
                <AddJobCard title='Company business details' para='Select vacancy information.' lasetsection={
                    <div className='cont'>
                        <div className='textcon textcon2'>
                            {data2.map(e => {
                                return (
                                    <div className={(e.type.length > 25) ? "group2" : "group1"}>
                                        <p className='titletext'>{e.title}</p>
                                        <p className='description'>{e.type}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='line'></div>
                        <div className='card3footer'>
                            <p className='description'>A human resources employee was appointed to provide advice during the interview.</p>
                        </div>
                    </div>

                } />
                <AddJobCard title='Job information' para='Additional information about the job vacancy.'
                    lasetsection={
                        <div className='lastcontainer'>
                            <p className='titletext'>Job Description:</p>
                            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
                            <p className='titletext'>Job Requirements :</p>
                            {button2('UI Designer')}
                            {button2('figma')}
                            {button2('Adobe XD')}
                            <div className='lastine'></div>
                            <div className='texts'>
                                <p className='titletext'>Questions for applicants</p>
                                <p className='titletext'> <div className='circle'></div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                                <p className='titletext'> <div className='circle'></div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                                <p className='titletext'> <div className='circle'></div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                            </div>
                            <BlackButton titlebutton='View Answers' width='fit-content' />
                        </div>

                    }
                />

            </div>
        </div>
    )
}
