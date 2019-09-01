import React from 'react'
import Layout from '../components/Layout'
import CryptoCard from '../components/CryptoCard'

class cryptocurrency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'bitcoin',
            symbol: 'BTC',
        }
    }

    render() {
        
        const bitcoin = () => {
            this.setState({name: 'bitcoin', symbol: 'BTC'})
        }

        const ethereum = () => {
            this.setState({name: 'ethereum', symbol: 'ETH'})
        }
        
        const whatever = () => {
            this.setState({name: 'bitcoin', symbol: 'BTC'})
        }

        const {name, symbol} = this.state
        return (
            <Layout>
            <h1>Crypto Currency Live Update: </h1>
            <div className='container'>
                <button className='btn btn-primary' onClick={this.bitcoin}>Bitcoin</button>
                <button className='btn btn-primary' onClick={this.ethereum}>Ethereum</button>
                <button className='btn btn-primary' onClick={this.whatever}>Outra Moeda</button>
            </div>
            
            <CryptoCard 
                name={name}
                symbol={symbol}
            />
            <style jsx>
                {`
                    h1 {
                        text-align: center;
                        padding:25px;
                    }
                    .container {
                        padding: 30px;
                        margin: 10px 10px 10px 10px;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }
                    .btn {
                        padding: 20px;
                        margin: 1px 1px 1px 1px;
                        min-width: 200px;
                        transition: all .6s ease 0s;
                    }
                    .btn:hover {
                        font-weight: bold;
                        letter-spacing: 0.4px;
                    }
                `}
            </style>
        </Layout>
        )
    }
}

export default cryptocurrency
