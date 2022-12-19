import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { IBook } from "../types/type"
import bookAvatar from '../assets/book_av.jpg'
import { useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } from "../service/apiSlice"
import { Md5 } from "ts-md5"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useEffect } from "react"
import { toast } from "react-toastify"

const BookItem = (props: IBook) => {
  const { author, cover, id, isbn, pages, published, title} = props
  let Key = localStorage.getItem('S_key')
  let body = JSON.stringify({
    "isbn": `${isbn}`
  })

  let SignDel = Md5.hashStr(`DELETEhttps://no23.lavina.tech/books/:${JSON.stringify(id)}${Key}`)
  let SignEdit = Md5.hashStr(`PATCHhttps://no23.lavina.tech/books/:${id}${Key}`)
  let SignAdd = Md5.hashStr(`POSThttps://no23.lavina.tech/books${body}${Key}`)

  const [addBook, { isLoading, isError, isSuccess, error }] = useAddBookMutation()
  const [deleteBook, deleteRes] = useDeleteBookMutation()
  const [editBook, editRes] = useUpdateBookMutation()

  useEffect(() => {
    if(isSuccess) {
      toast.success('Book added successfully !');
    } else if(isError || deleteRes.isError || editRes.isError) {
      toast.error('Error occurred !');
    }
  }, [isSuccess, deleteRes, editRes])

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
          onClick={() => addBook({Key, Sign: SignAdd, book: body})}
        >{isLoading ? "Loading..." : "Add"}</Button> 
        : (
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => editBook({Key, Sign: SignEdit, id})}
            >{editRes.isLoading ? "Loading..." : "Edit"}</Button>
          </Grid>
          <Grid item md={6}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={() => deleteBook({Key, Sign: SignDel, id})}
            >{deleteRes.isLoading ? "Loading..." : "Delete"}</Button>
          </Grid>
        </Grid>
      )}
    </Card>
  )
}

export default BookItem