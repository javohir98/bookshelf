import Container from '@mui/material/Container';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const style = {
    marginTop: '50px',
}

const Home = () => {
  return (
    <Container sx={style}>
        <SearchBar />
        <BookList />
    </Container>
  )
}

export default Home