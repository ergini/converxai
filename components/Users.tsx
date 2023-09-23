"use client"
import axios from 'axios';
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Button } from './ui/button';

const Table = styled.table`
    display: table;
    align-items: center;
    justify-content: center;
    border-collapse: collapse;
    margin-top: 2rem;
    margin-left: 20px;
    border-radius: 20px;
    th {
        background-color: #1e1e1e;
        color: white;
        padding: 1rem;
        text-align: left;
    }
    td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    tr{
        margin-bottom: 10px;
    }

    tr:nth-of-type(even) {
        border-radius: 0;
        background-color: #f3f3f3;
    }
`;

export default function Users() {
    const [users, setUsers] = useState([]);
    const [yourPassword, setYourPassword] = useState('' as any);


    useEffect(() => {
        const password = "fO>+Er!IM|8f/y~3,r=t+y:DTm1nG{3`ukS`3V$}La29JDY";

        if (yourPassword === password) {
            const getUsers = async () => {
                try {
                    const response = await axios('/api/formSubmit', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    setUsers(response.data.data);
                } catch (error) {
                    console.log(error);
                }
            };
            getUsers();
        }
    }, [yourPassword]);


    return (
        <>
            {yourPassword === 'fO>+Er!IM|8f/y~3,r=t+y:DTm1nG{3`ukS`3V$}La29JDY'
                ? <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Meeting Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.Date.split('T')[0]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                : <form>
                    <label>Enter the password</label>
                    <br />
                    <input style={{
                        padding: '10px',
                        backgroundColor: 'rgba(132, 94, 194, 1)',
                        color: '#1e1e1e',
                        border: 'none',
                        outline: 'none',
                        marginTop: '10px',
                        marginLeft: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px'
                    }} type="password" onChange={(e) => setYourPassword(e.target.value)} />
                </form>
            }
        </>
    )
}