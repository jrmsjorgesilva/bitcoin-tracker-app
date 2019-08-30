import React, { Component } from 'react'

class Prices extends Component {

    render() {
        
        const {bpi} = this.props.bpi

        return (
            <div className='container'>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='badge badge-primary'>{bpi.USD.code}</span>
                        <p>Cotação do Bitcoin para {bpi.USD.description}:</p>
                        <strong>{bpi.USD.rate}</strong>
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary'>{bpi.GBP.code}</span>
                        <p>Cotação do Bitcoin para {bpi.GBP.description}:</p>
                        <strong>{bpi.GBP.rate}</strong>
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary'>{bpi.EUR.code}</span>
                        <p>Cotação do Bitcoin para {bpi.EUR.description}:</p>
                        <strong>{bpi.EUR.rate}</strong>
                    </li>
                </ul>

                <style jsx>
                    {`
                        li {
                            display: flex;
                            justify-content: space-between;
                            background: #f1f1f1;
                        }

                        @media screen and (max-width: 768px) {
                            li span {
                                font-size: 0px;
                            }
                            li p {
                                font-size: 14px;
                            }
                        }
                            
                                                    
                    `}
                </style>
            </div>
        )
    }
}


export default Prices