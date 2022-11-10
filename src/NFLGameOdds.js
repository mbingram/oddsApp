import React from 'react'
import './App.css'
import SportsBook from './SportsBook'
import sanFran from './images/logo-49ers.png'
import bears from './images/logo-bears.png'
import bills from './images/logo-bills.png'
import broncos from './images/logo-broncos.png'
import browns from './images/logo-browns.png'
import bucs from './images/logo-bucs.webp'
import cardinals from './images/logo-cardinals.png'
import chargers from './images/logo-chargers.png'
import chiefs from './images/logo-chiefs.png'
import colts from './images/logo-colts.png'
import commanders from './images/logo-commanders.png'
import cowboys from './images/logo-cowboys.webp'
import dolphins from './images/logo-dolphins.png'
import eagles from './images/logo-eagles.png'
import falcons from './images/logo-falcons.png'
import giants from './images/logo-giants.png'
import jags from './images/logo-jags.png'
import lions from './images/logo-lions.png'
import packers from './images/logo-packers.png'
import panthers from './images/logo-panthers.png'
import raiders from './images/logo-raiders.png'
import rams from './images/logo-rams.png'
import ravens from './images/logo-ravens.png'
import saints from './images/logo-saints.png'
import seahawks from './images/logo-seahawks.png'
import steelers from './images/logo-steelers.png'
import texans from './images/logo-texans.png'
import titans from './images/logo-titans.png'
import vikings from './images/logo-vikings.png'
import LoadingSpinnerNoPadding from './utilities/LoadingSpinner'

export default function GameOdds({ game, gameKey, loading, setLoading }) {
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
        setLoading(false)
    }

    React.useEffect(() => {
        sortBooksByAlphabetical(game)
    })

    if(loading){
        return(
            <LoadingSpinnerNoPadding />
        )
    }

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
                    <div className="flex flex-col justify-center">
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
                    </div>
                </div>
                <div className="flex flex-row justify-center w-60 h-8 border border-backgroundEggplant">
                    <div className="flex flex-col justify-center mr-2">
                        {game.away_team}
                    </div>
                    <div className="flex flex-col justify-center">
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
                    </div>
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
