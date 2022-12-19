import { Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import BookItem from '../components/BookItem';
import SearchBar from '../components/SearchBar';
import { useSearchByTitleMutation } from '../service/apiSlice';
import { IBook } from '../types/type';

const style = {
    marginTop: '50px',
}

const Gridstyle = {
  flexGrow: 1,
  marginTop: '24px'
}

const Home = () => {
  const [getSearch, { data, isLoading, isError, isSuccess }] = useSearchByTitleMutation({
    fixedCacheKey: 'shared-update-post',
  })

  let content;
  if(isLoading) {
    content = <p>Loading...</p>
  } else if(isSuccess && data instanceof Array) {
    content = data && data.map((book: IBook) => (
      <Grid item xs={6} md={3} sm={4}  key={book.isbn}>
        <BookItem 
          author={book.author} 
          cover={book.cover}
          id={book.id}
          isbn={book.isbn}
          pages={book.pages}
          published={book.published}
          title={book.title}
        />
      </Grid>
      )
    )
  } else if(isError) {
    content = <p>error</p>
  }    
  
  return (
    <Container sx={style}>
        <SearchBar />
        <Box sx={Gridstyle}>
          <Grid container spacing={2}>
            {content}
          </Grid>
        </Box>
    </Container>
  )
}

export default Home