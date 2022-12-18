import Container from '@mui/material/Container';
import { useEffect } from 'react';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import { useSearchByTitleMutation } from '../service/apiSlice';
import { IBook } from '../types/type';

const style = {
    marginTop: '50px',
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
        <h1>test</h1>
      )
    )
  } else if(isError) {
    content = <p>error</p>
  }

  console.log(data);
    
  
  return (
    <Container sx={style}>
        <SearchBar />
        {content}
        {/* <BookList /> */}
    </Container>
  )
}

export default Home