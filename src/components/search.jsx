import React, {useState, useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Movie from './movie'

const FEATURE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b4d03baae6c0065365ca17ffa81ad75&page1";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=4b4d03baae6c0065365ca17ffa81ad75&query=`

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


const Searchbar = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      fetch(FEATURE_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        fetch(SEARCH_API + searchTerm)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        })

        setSearchTerm('')
    }
    
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }
    
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: 'transparent'}}>
                <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    MovieStars
                </Typography>
                <form onSubmit={handleOnSubmit}>
                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        value = {searchTerm}
                        onChange = {handleOnChange}
                        />
                    </Search>
                </form>
                </Toolbar>
            </AppBar>
    </Box>
      <div className="movie-container">
            {movies.map((movie) =>(
                <Movie key={movie.id} {...movie} />
              ))}
        </div>
    </div>
  )
}

export default Searchbar