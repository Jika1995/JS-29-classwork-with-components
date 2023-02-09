import React from 'react';
import Table from 'react-bootstrap/Table';

const Section = ({users}) => {
    return (
        <section className='py-4' style={{width: '90%', margin: 'auto'}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(item => {

                            return <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                    </tr>
                        })}
                    </tbody>
                </Table>
        </section>
    )
}

export default Section;