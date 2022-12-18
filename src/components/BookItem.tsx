import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { IBook } from "../types/type"
import bookAvatar from '../assets/book_av.jpg'

const BookItem = (props: IBook) => {
  const { author, cover, id, isbn, pages, published, title} = props
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${cover || bookAvatar}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BookItem