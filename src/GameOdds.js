import React from 'react'
import './App.css'
import SportsBook from './SportsBook'

export default function GameOdds({ game, gameKey }) {
    return (
        <div className="flex flex-row m-2 h-32 border border-black rounded-sm w-fit" key={gameKey}>
            <div className="flex flex-col justify-center mt-auto">
                <div className="flex flex-col justify-center w-44 h-8 border border-black">
                    {game.home_team}
                </div>
                <div className="flex flex-col justify-center w-44 h-8 border border-black">
                    {game.away_team}
                </div>
            </div>
            <div className="flex flex-row flex-nowrap">
                {game.bookmakers.map((book) => {
                    return <SportsBook key={book.key} bookKey={book.key} book={book} />
                })}
            </div>
        </div>
    )
}
