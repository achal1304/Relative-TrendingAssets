import React, { Component } from 'react'
import Card from '../components/Card'
import '../assets/styles/Home.css'
import binanceImage from '../assets/images/Binance Coin (BNB).png'
import bitcoinImage from '../assets/images/Bitcoin SV (BSV).png'
import ethereumImage from '../assets/images/Ethereum (ETH).png'
import solanaImage from '../assets/images/Solana (SOL).png'
import shibaImage from '../assets/images/SHIBA INU (SHIB).png'

export default class Home extends Component {

    constructor(props) {
        super(props);

    }
    
    trendingassets = [
        {
            currency: "Bitcoin (BTC)",
            price: '$31,812.80',
            percentage: 10,
            tvl: '$60,000',
            imageIcon: bitcoinImage,
            pupularPairs: [solanaImage, ethereumImage, binanceImage]
        },
        {
            currency: "Solaba (SOL)",
            price: '$32.83',
            percentage: -12,
            tvl: '$60,000',
            imageIcon: solanaImage,
            pupularPairs: [bitcoinImage, ethereumImage, binanceImage]
        },
        {
            currency: "Ethereum (ETH)",
            price: '$1,466',
            percentage: -11.93,
            tvl: '$60,000',
            imageIcon: ethereumImage,
            pupularPairs: [solanaImage, bitcoinImage, binanceImage]
        },
        {
            currency: "Binance USD (BUSD)",
            price: '$1.00',
            percentage: -0.26,
            tvl: '$60,000',
            imageIcon: binanceImage,
            pupularPairs: [solanaImage, ethereumImage, binanceImage]
        }
    ]

    render() {
        return (
            <div>
                <div className='cards_container'>
                    {this.trendingassets.map((asset, index) => {
                        return (
                            <Card currency={asset.currency}
                                price={asset.price}
                                percentage={asset.percentage}
                                tvl={asset.tvl}
                                imageIcon={asset.imageIcon}
                                pupularPairs={asset.pupularPairs} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
