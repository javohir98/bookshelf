import BookItem from "./BookItem"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { IBook } from "../types/type";
import { useEffect } from "react";

const style = {
    flexGrow: 1,
    marginTop: '24px'
}

const BookList = () => {
    const books = useSelector((state: any) => state.payload)

    useEffect(() => {
        console.log(books);
        
    }, [books])
  return (
    <Box sx={style}>
        {/* <Grid container spacing={2}>
            {books && books.map((item: IBook) => (
                <Grid item xs={3}>
                    <BookItem/>
                </Grid>
            ))}
        </Grid> */}
    </Box>
  )
}

export default BookList