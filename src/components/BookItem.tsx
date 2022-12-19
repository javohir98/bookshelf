import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { IBook } from "../types/type"
import bookAvatar from '../assets/book_av.jpg'
import { useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } from "../service/apiSlice"
import { Md5 } from "ts-md5"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import axios from "../service/axios"

const BookItem = (props: IBook) => {
  const { author, cover, id, isbn, pages, published, title} = props
  let Key = localStorage.getItem('S_key')
  let Sign = Md5.hashStr(`DELETEhttps://no23.lavina.tech/books/:${isbn}mustang`)
  let body = {
    "isbn": `${isbn}`
  }
  let SignBody = Md5.hashStr(`POSThttps://no23.lavina.tech/books{
    "isbn": "${isbn}"
 }${Key}`)
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation()
  const [deleteBook] = useDeleteBookMutation()
  const [editBook] = useUpdateBookMutation()

  const handleTestBook = () => {
    axios.post(`books`, body, {
      headers: {
        Key,
        Sign: SignBody
      }
    })    
  }

  return (
    <Card sx={{ maxWidth: 345, padding: '5px' }}>
      <CardMedia
        component="img"
        height="140"
        image={`${cover || bookAvatar}`}
        alt={title}
      />
      <CardContent>
        <div className="published"><CalendarTodayIcon />{published} y</div>
        <Typography gutterBottom variant="h5" component="div">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>

      {window.location.pathname === '/' ? 
        <Button
          fullWidth
          variant="contained"
          onClick={handleTestBook}
        >{isLoading ? "Loading" : "Add"}</Button> 
        : (
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Button
              fullWidth
              variant="outlined"
            >Edit</Button>
          </Grid>
          <Grid item md={6}>
            <Button
              fullWidth
              variant="contained"
              color="error"
            >Delete</Button>
          </Grid>
        </Grid>
      )}
    </Card>
  )
}

export default BookItem