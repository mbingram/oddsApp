import React from 'react'
import SportsBook from './SportsBook'

export default function UpcomingGameOdds({ game, gameKey, setLoading }) {
    var moment = require('moment');

    let startTime = moment(game.commence_time).format("ddd, MMM Do, hA")

    let [sortedBooksByAlpha, setSortedBooksByAlpha] = React.useState()

    const sortBooksByAlphabetical = (game) => {
        let books = game.bookmakers
        let sortedBooks = books.sort(function(a, b){
            if(a.key > b.key){
                return 1
            }
            if(a.key < b.key){
                return -1
            }
            return 0
        })
        setSortedBooksByAlpha(sortedBooks)
        // setLoading(false)
    }

    React.useEffect(() => {
        sortBooksByAlphabetical(game)
    })

    return (
        <div className="flex flex-row m-2 h-36 border border-black rounded-sm w-fit" key={gameKey}>
            <div className="flex flex-col justify-center">
                <div className="my-auto ml-2">
                    {startTime}
                </div>
                <div className="flex flex-row justify-center w-60 h-8 border border-summerYellow">
                    <div className="flex flex-col justify-center mr-2">
                        @ {game.home_team}
                    </div>
                    {/* <div className="flex flex-col justify-center">
                        <img src={game.home_team === "New Orleans Saints" ? saints :
                        game.home_team === "Baltimore Ravens" ? ravens :
                        game.home_team === "Carolina Panthers" ? panthers :
                        game.home_team === "Atlanta Falcons" ? falcons :
                        game.home_team === "Tampa Bay Buccaneers" ? bucs :
                        game.home_team === "Seattle Seahawks" ? seahawks :
                        game.home_team === "Buffalo Bills" ? bills :
                        game.home_team === "Minnesota Vikings" ? vikings :
                        game.home_team === "Chicago Bears" ? bears :
                        game.home_team === "Detroit Lions" ? lions :
                        game.home_team === "Miami Dolphins" ? dolphins :
                        game.home_team === "Cleveland Browns" ? browns :
                        game.home_team === "Tennessee Titans" ? titans :
                        game.home_team === "Denver Broncos" ? broncos :
                        game.home_team === "New York Giants" ? giants :
                        game.home_team === "Houston Texans" ? texans :
                        game.home_team === "Kansas City Chiefs" ? chiefs :
                        game.home_team === "Jacksonville Jaguars" ? jags :
                        game.home_team === "Pittsburgh Steelers" ? steelers :
                        game.home_team === "Las Vegas Raiders" ? raiders :
                        game.home_team === "Indianapolis Colts" ? colts :
                        game.home_team === "Los Angeles Rams" ? rams :
                        game.home_team === "Arizona Cardinals" ? cardinals :
                        game.home_team === "Green Bay Packers" ? packers :
                        game.home_team === "Dallas Cowboys" ? cowboys :
                        game.home_team === "San Francisco 49ers" ? sanFran :
                        game.home_team === "Los Angeles Chargers" ? chargers :
                        game.home_team === "Philadelphia Eagles" ? eagles :
                        game.home_team === "Washington Commanders" && commanders
                        } alt="logo" className="h-6" />
                    </div> */}
                </div>
                <div className="flex flex-row justify-center w-60 h-8 border border-backgroundEggplant">
                    <div className="flex flex-col justify-center mr-2">
                        {game.away_team}
                    </div>
                    {/* <div className="flex flex-col justify-center">
                        <img src={game.away_team === "New Orleans Saints" ? saints :
                        game.away_team === "Baltimore Ravens" ? ravens :
                        game.away_team === "Carolina Panthers" ? panthers :
                        game.away_team === "Atlanta Falcons" ? falcons :
                        game.away_team === "Tampa Bay Buccaneers" ? bucs :
                        game.away_team === "Seattle Seahawks" ? seahawks :
                        game.away_team === "Buffalo Bills" ? bills :
                        game.away_team === "Minnesota Vikings" ? vikings :
                        game.away_team === "Chicago Bears" ? bears :
                        game.away_team === "Detroit Lions" ? lions :
                        game.away_team === "Miami Dolphins" ? dolphins :
                        game.away_team === "Cleveland Browns" ? browns :
                        game.away_team === "Tennessee Titans" ? titans :
                        game.away_team === "Denver Broncos" ? broncos :
                        game.away_team === "New York Giants" ? giants :
                        game.away_team === "Houston Texans" ? texans :
                        game.away_team === "Kansas City Chiefs" ? chiefs :
                        game.away_team === "Jacksonville Jaguars" ? jags :
                        game.away_team === "Pittsburgh Steelers" ? steelers :
                        game.away_team === "Las Vegas Raiders" ? raiders :
                        game.away_team === "Indianapolis Colts" ? colts :
                        game.away_team === "Los Angeles Rams" ? rams :
                        game.away_team === "Arizona Cardinals" ? cardinals :
                        game.away_team === "Green Bay Packers" ? packers :
                        game.away_team === "Dallas Cowboys" ? cowboys :
                        game.away_team === "San Francisco 49ers" ? sanFran :
                        game.away_team === "Los Angeles Chargers" ? chargers :
                        game.away_team === "Philadelphia Eagles" ? eagles :
                        game.away_team === "Washington Commanders" && commanders
                        } alt="logo" className="h-6" />
                    </div> */}
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

