import React from 'react'
import './App.css'

export default function SportsBook({ book, bookKey }) {

    return (
        <div className="flex flex-col w-72 border-black border-l-4" key={bookKey}>
            <div className="h-12 pl-2 border-cyan-800 border-r w-full flex flex-col justify-center font-medium bg-cyan-50 text-cyan-900">
                {book.title}
            </div>
            <div className="flex flex-row mr-1px w-full bg-cyan-800">
                {book.markets.map((market) => {
                    return <div className="flex flex-col border-cyan-800 border-r border-t w-1/3">
                        <div className="h-8 px-auto flex flex-row justify-center items-center text-xs font-medium bg-cyan-600 text-white">
                            {market.key === 'h2h' ? 'moneyline' :
                                market.key === 'h2h_lay' ? 'moneyline lay' :
                                    market.key === 'spreads' ? 'spread' :
                                        market.key === 'totals' && 'over/under'}
                        </div>
                        <div className="justify-center bg-white">
                            {market.outcomes.map((outcome) => {
                                let price = outcome.price.toString()
                                // let point = outcome.point.toString()
                                let overUnder = outcome.name.toString()
                                return <div className="h-10 flex flex-row justify-center items-center border-t border-cyan-800 text-sm text-center">
                                    <div>
                                        <div>
                                            {price.charAt(0) === '-' ? price : `+${price}`}
                                        </div>
                                        {outcome.point && market.key === 'totals' ?
                                            <div className="flex flex-row text-cyan-600 font-medium">
                                                <div className="mr-1">
                                                    {overUnder.charAt(0)}
                                                </div>
                                                <div>
                                                    {outcome.point}
                                                </div>
                                            </div>
                                        : outcome.point &&
                                            <div className="text-cyan-600 font-medium">{outcome.point.toString().charAt(0) === '-' ? outcome.point : `+${outcome.point}`}</div>
                                        }
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
