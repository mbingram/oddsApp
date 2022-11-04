import React from 'react'
import './App.css'

export default function SportsBook({ book, bookKey }) {
    return (
        <div className="flex flex-col border border-gray" key={bookKey}>
            <div className="h-8 pl-2 border-b-2">
                {book.title}
            </div>
            <div className="flex flex-row mr-1px">
                {book.markets.map((market) => {
                    return <div className="flex flex-col border-r-2 border-gray">
                        <div className="h-8 w-16 ml-2">
                            {market.key}
                        </div>
                        <div className="">
                            {market.outcomes.map((outcome) => {
                                return <div className="flex flex-col h-8 justify-center pl-2 border-t-2 border-gray">
                                    {outcome.price > 2 ? Math.trunc((outcome.price - 1)*100) : Math.trunc(-100/(outcome.price - 1))}
                                    </div>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
