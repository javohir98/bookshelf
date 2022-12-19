import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useEffect } from 'react'
import {Md5} from 'ts-md5'
import BookItem from '../components/BookItem'
import Loader from '../components/Loader'
import { useGetBooksQuery } from '../service/apiSlice'
import { ISelectBooks } from '../types/type'

const style = {
  flexGrow: 1,
  marginTop: '24px'
}

const styleCnt = {
  marginTop: '50px'
}

const Books = () => {
    let Key = localStorage.getItem('S_key')
    let Sign = Md5.hashStr(`GEThttps://no23.lavina.tech/books${Key}`)

    const {
      data: books,
      isLoading,
      isSuccess,
      isError,
      error
  } = useGetBooksQuery({Key, Sign})

  useEffect(() => {
    console.log(isSuccess);
    
  }, [books])

  let content;
  if(isLoading) {
    content = <Loader />
  } else if(isSuccess && books.data instanceof Array) {
    content = books?.data.map((item: ISelectBooks) => (
      <Grid item xs={6} md={3} sm={4} key={item.book.id}>
          <BookItem 
            author={item.book.author} 
            cover={item.book.cover}
            id={item.book.id}
            isbn={item.book.isbn}
            pages={item.book.pages}
            published={item.book.published}
            title={item.book.title}
          />
      </Grid>
    ))
  } else {
    content = 'Empty'
  }

  return (
    <Container sx={styleCnt}>
      <Box sx={style}>
        <Grid container spacing={2}>
          {content}
        </Grid>
      </Box>
    </Container>
  )
}

export default Books