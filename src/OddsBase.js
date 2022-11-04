import React, { useEffect, useState } from 'react'
import { Box, FormControl, MenuItem, Select, makeStyles, createTheme } from '@material-ui/core';
import GameOdds from './GameOdds'
import './App.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fullList: {
    maxWidth: '80vw',
    minWidth: '80vw'
  },
  snackbarStyle: {
    maxWidth: '311px',
    maxHeight: '30px',
    minWidth: '311px',
    minHeight: '30px',
    borderRadius: 8,
    background: '#ffffff',
    color: '#000000',
    textAlign: "center",
    align: "center",
    fontSize: '13px',
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    margin: "15 auto",
    zIndex: 1300
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90,
  },
  switch_track: {
    backgroundColor: "#C4C4C4",
  },
  switch_base: {
    // this handles the off toggle
    color: "#C4C4C4",
    "&.Mui-disabled": {
      // color: "#e886a9"
    },
    // this handles the on toggle
    "&.Mui-checked": {
      color: "#f37708"
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#f37708",
    }
  },
  switch_primary: {
    "&.Mui-checked": {
      color: "#4CAF50",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4CAF50",
    },
  },
  root: {
    color: '#2e2d2d',
    '&$checked': {
      color: '#f37708',
    },
    // (Note: space or no space after & matters. See SASS "parent selector".)
    '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
      '& fieldset': {            // - The <fieldset> inside the Input-root
        // borderColor: 'pink',   // - Set the Input border
      },
      '&:hover fieldset': {
        borderColor: '#864f61', // - Set the Input border when parent has :hover
        font: 'black'
      },
      '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
        borderColor: '#864f61',
        font: 'black'
      },
    },
  },

  checked: {}
}));

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#838d3e',
    },

  },
})

export default function OddsBase() {

  const classes = useStyles()

  const [proFootballData, setProFootballData] = useState()
  const [collegeFootballData, setCollegeFootballData] = useState()
  const [mlbData, setMlbData] = useState()
  const [upcomingGamesData, setUpcomingGamesData] = useState()
  const [loading, setLoading] = useState()
  const [sportTypeFilter, setSportTypeFilter] = useState('NFL')
  const [sportsbookFilter, setSportsbookFilter] = useState('All')

  const upcomingGamesApi = 'https://api.the-odds-api.com//v4/sports/upcoming/odds/?apiKey=6bf3b2fcfba13181fb775bf53c2ab336&regions=us&markets=h2h,spreads,totals'
  const proFootballGamesApi = 'https://api.the-odds-api.com//v4/sports/americanfootball_nfl/odds/?apiKey=6bf3b2fcfba13181fb775bf53c2ab336&regions=us&markets=h2h,spreads,totals'
  const collegeFootballGamesApi = 'https://api.the-odds-api.com//v4/sports/americanfootball_ncaaf/odds/?apiKey=6bf3b2fcfba13181fb775bf53c2ab336&regions=us&markets=h2h,spreads,totals'
  const mlbGamesApi = 'https://api.the-odds-api.com//v4/sports/baseball_mlb/odds/?apiKey=6bf3b2fcfba13181fb775bf53c2ab336&regions=us&markets=h2h,spreads,totals'

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const footballData = [{
    away_team
      :
      "Los Angeles Chargers",
    bookmakers
      :
      [{
        key: 'barstool', last_update: "2022-11-04", markets: [
          {
            key: 'h2h', outcomes: [
              { name: 'Atlanta Falcons', price: 2.33 },
              { name: 'LA Rams', price: 1.62 }
            ]
          },
          {
            key: 'spreads', outcomes: [
              { name: 'Atlanta Falcons', point: 3, price: 1.92 },
              { name: 'LA Rams', point: -3, price: 1.89 }
            ]
          },
          {
            key: 'totals', outcomes: [
              { name: 'Over', point: 49.5, price: 1.89 },
              { name: 'Under', point: 49.5, price: 1.92 }
            ]
          }
        ]
      }],
    commence_time
      :
      "2022-11-06T18:00:00Z",
    home_team
      :
      "Atlanta Falcons",
    id
      :
      "bba09e52bc88c100a91e824f49be11d5",
    sport_key
      :
      "americanfootball_nfl",
    sport_title
      :
      "NFL"
  }]
  useEffect(() => {
    fetch(proFootballGamesApi)
      .then((response) => response.json())
      .then((data) => setProFootballData(data))
    // setProFootballData(footballData)
  }, [])

  useEffect(() => {
    fetchBySportFilter(sportTypeFilter)
  }, [sportTypeFilter])

  useEffect(() => {
    filterBySportsBook(sportsbookFilter)
  }, [sportsbookFilter])

  const fetchBySportFilter = (sportTypeFilter) => {
    setProFootballData()
    setCollegeFootballData()
    setMlbData()
    setUpcomingGamesData()
    if (sportTypeFilter === 'NFL') {
      fetch(proFootballGamesApi)
        .then((response) => response.json())
        .then((data) => setProFootballData(data))
    } else if (sportTypeFilter === 'NCAAF') {
      fetch(collegeFootballGamesApi)
        .then((response) => response.json())
        .then((data) => setCollegeFootballData(data))
    } else if (sportTypeFilter === 'MLB') {
      fetch(mlbGamesApi)
        .then((response) => response.json())
        .then((data) => setMlbData(data))
    } else {
      fetch(upcomingGamesApi)
        .then((response) => response.json())
        .then((data) => setUpcomingGamesData(data))
    }
  }

  const filterBySportsBook = (sportsbookFilter) => {
    if (sportsbookFilter === 'All'){
      fetchBySportFilter(sportTypeFilter)
    } else {
      if (sportTypeFilter === 'NFL'){
        proFootballData.filter(game => game.bookmakers.key === sportsbookFilter)
      } else if (sportTypeFilter === 'NCAAF'){
        collegeFootballData.filter(game => game.bookmakers.key === sportsbookFilter)
      } else if (sportTypeFilter === 'MLB'){
        mlbData.filter(game => game.bookmakers.key === sportsbookFilter)
      } else if (sportTypeFilter === 'Upcoming'){
        upcomingGamesData.filter(game => game.bookmakers.key === sportsbookFilter)
      }
    }
  }

  const handleSportTypeFilter = (event) => {
    if (event.target.value === 'NFL') {
      setSportTypeFilter('NFL')
    } else if (event.target.value === 'NCAAF') {
      setSportTypeFilter('NCAAF')
    } else if (event.target.value === 'Upcoming') {
      setSportTypeFilter('Upcoming')
    } else if (event.target.value === 'MLB') {
      setSportTypeFilter('MLB')
    }
  }

  const handleSportsbookFilter = (event) => {
    if (event.target.value === 'All') {
      setSportTypeFilter('All')
    } else {
      setSportsbookFilter(event.target.value)
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="h-20 px-20 flex flex-row border border-black">
        <div className="mr-8 h-full flex flex-col justify-center">
          Filter by Sport
        </div>
        <div className="py-auto mr-8 h-full flex flex-col justify-center">
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth className={classes.root}>
              <Select
                id="demo-simple-select"
                value={sportTypeFilter}
                onChange={handleSportTypeFilter}
                defaultValue={'NFL'}
                className={"h-10"}
              >
                <MenuItem value={'NFL'}>NFL</MenuItem>
                <MenuItem value={'NCAAF'}>College Football</MenuItem>
                <MenuItem value={'MLB'}>MLB</MenuItem>
                <MenuItem value={'Upcoming'}>Today's Games</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="mr-8 h-full flex flex-col justify-center">
          Filter by SportsBook
        </div>
        <div className="py-auto h-full flex flex-col justify-center">
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth className={classes.root}>
              <Select
                id="demo-simple-select"
                value={sportsbookFilter}
                onChange={handleSportsbookFilter}
                defaultValue={'All'}
                className={"h-10"}
              >
                <MenuItem value={'All'}>All</MenuItem>
                <MenuItem value={'barstool'}>Barstool Sportsbook</MenuItem>
                <MenuItem value={'draftkings'}>DraftKings</MenuItem>
                <MenuItem value={'pointsbetus'}>PointsBet (US)</MenuItem>
                <MenuItem value={'betmgm'}>Bet MGM</MenuItem>
                <MenuItem value={'betrivers'}>BetRivers</MenuItem>
                <MenuItem value={'unibet'}>Unitbet</MenuItem>
                <MenuItem value={'caesars'}>Caesars</MenuItem>
                <MenuItem value={'sugarhouse'}>SugarHouse</MenuItem>
                <MenuItem value={'betonlineag'}>BetOnline.ag</MenuItem>
                <MenuItem value={'fanduel'}>FanDuel</MenuItem>
                <MenuItem value={'barstool'}>Barstool Sportsbook</MenuItem>
                <MenuItem value={'williamhill_us'}>William Hill (US)</MenuItem>
                <MenuItem value={'bovada'}>Bovada</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div>
        {proFootballData &&
          proFootballData.map((game) => {
            return <GameOdds gameKey={game.id} game={game} />
          })
        }
        {collegeFootballData &&
          collegeFootballData.map((game) => {
            return <GameOdds gameKey={game.id} game={game} />
          })
        }
        {mlbData &&
          mlbData.map((game) => {
            return <GameOdds gameKey={game.id} game={game} />
          })
        }
        {upcomingGamesData &&
          upcomingGamesData.map((game) => {
            return <GameOdds gameKey={game.id} game={game} />
          })
        }
      </div>
    </div>
  )
}