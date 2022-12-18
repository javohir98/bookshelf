import { Card, CardContent, CardMedia, Typography } from "@mui/material"

// interface BookItemProps {
//     author: string,
//     cover: string,
//     isbn: string,
//     published: number,
//     title: string
// }

const BookItem = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=''
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BookItem