import React from 'react'
import './App.css'

export default function SportsBook({ book, bookKey }) {

    return (
        <div className="flex flex-col w-56 mr-2" key={bookKey}>
            <div className="h-12 pl-2 border-b-2 border-x-2 w-full flex flex-col justify-center">
                {book.title}
            </div>
            <div className="flex flex-row mr-1px w-full border">
                {book.markets.map((market) => {
                    return <div className="flex flex-col border-x w-1/3">
                        <div className="h-8 px-auto flex flex-row justify-center items-center text-xs">
                            {market.key === 'h2h' ? 'moneyline' :
                            market.key === 'spreads' ? 'spreads' :
                            market.key === 'totals' && 'over/under'}
                        </div>
                        <div className="justify-center">
                            {market.outcomes.map((outcome) => {
                                return <div className="h-8 flex flex-row justify-center items-center border-t-2 border-gray">
                                    {outcome.price > 2 ? `+${Math.trunc((outcome.price - 1)*100)}` : Math.trunc(-100/(outcome.price - 1))}
                                    </div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
