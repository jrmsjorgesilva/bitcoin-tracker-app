import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => {
    // console.log(props)
    return (
        <Layout>
            <h1>Cotação atualizada do Bitcoin</h1>
            <Prices bpi={props.bpi}/>
        
            <style jsx>
                {`
                    h1 {
                        font-size: 25px;
                        font-weight: 300;
                        text-align: center;
                    }
                `}
            </style>
        </Layout>

    )
}

Index.getInitialProps = async() => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()

    return {
        bpi: data
    };
}

export default Index
