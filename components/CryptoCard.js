import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

class CryptoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            symbol: props.symbol,
            USDPrice: null,
            JPYPrice: null,
            EURPrice: null,
            USDLastPrice: null,
            JPYLastPrice: null,
            EURLastPrice: null,
        }

        this.pollPrice = this.pollPrice.bind(this)
    }

    componentDidMount() {
        this.pollPrice()
        setInterval(this.pollPrice, 10000)
    }

    pollPrice() {
        const { symbol } = this.state
        fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR`
        )
        .then((res) => res.json())
        .then(json => {
            console.log(json)
            this.setState((prevState) => ({
                USDPrice: json.USD,
                EURPrice: json.EUR,
                JPYPrice: json.JPY,
                USDLastPrice: prevState.USDPrice !== json.USD ? prevState.USDPrice : prevState.USDLastPrice,
                JPYLastPrice: prevState.JPYPrice !== json.JPY ? prevState.JPYPrice : prevState.JPYLastPrice,
                EURLastPrice: prevState.EURPrice !== json.EUR ? prevState.EURPrice : prevState.EURLastPrice,
            }))
        })
    }

    priceChange(lastPrice, price) {
        if (!lastPrice) {
            return 'processing'
        }
        const diff = lastPrice - price
        const change = diff / lastPrice
        // console.log('Valores:', lastPrice, price, diff, change)
        return (change * 100).toFixed(3) + '%'
    }

    render() {
        //DESTRUCTURING
        const {
            name, 
            symbol, 
            USDPrice, 
            JPYPrice, 
            EURPrice, 
            USDLastPrice, 
            JPYLastPrice, 
            EURLastPrice
        } = this.state

        //VERIFICA A COR A SER APLICADA NO SPAN:
        const displayColor = USDLastPrice < USDPrice ? 'loss' : 'gain'

        // console.log(name, symbol)
        return (
            <div className='card'>
                <div className='card-name'>
                    {name}
                    <span className='badge badge-primary'>{symbol}</span>
                </div>
                
                <div className='logo'>

                </div>

                <div className='price'>
                    <div className='card division'>
                        <p>Dólar: {USDPrice}</p>
                        <p>Última mudança: 
                        <span className={displayColor}>
                            {this.priceChange(USDLastPrice, USDPrice)}
                        </span></p>
                    </div>
                    <div className='card division'>
                        <p>Euro: {EURPrice}</p>
                        <p>Última mudança: 
                        <span className={displayColor}>
                            {this.priceChange(EURLastPrice, EURPrice)}
                        </span></p>
                    </div>
                    <div className='card division'>
                        <p>Yen Japonês: {JPYPrice}</p>
                        <p>Última mudança: 
                        <span className={displayColor}>
                            {this.priceChange(JPYLastPrice, JPYPrice)}
                        </span></p>
                    </div>
                </div>

                {/* STYLING */}
                
                <style jsx>
                    {`
                        .card {
                            text-align: center;
                            padding: 15px;
                            border-radius: 20px;
                            border-color: darkorange;
                            background: #f1f1f6;
                        }
                        .card-name {
                            padding: 12px 16px;
                            font-weight: bold;
                            background: #f1f1f6;;
                        }
                        .card .card-name span {
                            margin: 0px 0px 0px 4px;
                            font-weight: normal;
                        }
                        .loss {
                            color: white;
                            background: red;
                            border-radius: 30px;
                            padding: 6px;
                            margin: 8px 8px 8px 8px;
                            font-weight: bold;
                        }
                        .gain {
                            color: white;
                            background: green;
                            border-radius: 30px;
                            padding: 6px;
                            margin: 8px 8px 8px 8px;
                            font-weight: bold;
                        }
                        .card .division {
                            border-color: orange;
                            margin: 10px 10px 10px 10px;

                        }
                    `}
                </style>
            </div>
        )
    }
}

export default CryptoCard