import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { IBook } from "../types/type"
import bookAvatar from '../assets/book_av.jpg'
import { useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } from "../service/apiSlice"
import { Md5 } from "ts-md5"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const BookItem = (props: IBook) => {
  const { author, cover, id, isbn, pages, published, title} = props
  let Key = localStorage.getItem('S_key')
  let Sign = Md5.hashStr(`DELETEhttps://no23.lavina.tech/books/:${isbn}mustang`)
  let SignBody = Md5.hashStr(`POSThttps://no23.lavina.tech/booksmustang`)
  let body = {
    "isbn":`${isbn}`
  }
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation()
  const [deleteBook] = useDeleteBookMutation()
  const [editBook] = useUpdateBookMutation()

  return (
    <Card sx={{ maxWidth: 345, padding: '5px' }}>
      <CardMedia
        component="img"
        height="140"
        image={`${cover ?? bookAvatar}`}
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
          onClick={() => addBook({Key, Sign: 'f6d41a1a0b2f2ea30cbe0229309b9887', book: body})}
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