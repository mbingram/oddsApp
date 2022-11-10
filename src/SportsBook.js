import React from 'react'
import './App.css'

export default function SportsBook({ book, bookKey }) {

    return (
        <div className="flex flex-col w-64 mr-2" key={bookKey}>
            <div className="h-12 pl-2 border-b-2 border-x-2 w-full flex flex-col justify-center">
                {book.title}
            </div>
            <div className="flex flex-row mr-1px w-full border">
                {book.markets.map((market) => {
                    return <div className="flex flex-col border-x w-1/3">
                        <div className="h-8 px-auto flex flex-row justify-center items-center text-xs">
                            {market.key === 'h2h' ? 'moneyline' :
                            market.key === 'h2h_lay' ? 'moneyline_lay' :
                            market.key === 'spreads' ? 'spread' :
                            market.key === 'totals' && 'over/under'}
                        </div>
                        <div className="justify-center">
                            {market.outcomes.map((outcome) => {
                                return <div className="h-10 flex flex-row justify-center items-center border-t-2 border-gray text-sm text-center">
                                    <div>
                                        <div>
                                            {outcome.price}
                                        </div>
                                        {outcome.point && 
                                            <div>
                                                {outcome.point}
                                            </div>
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
