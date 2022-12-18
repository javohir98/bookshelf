import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Md5 } from 'ts-md5';
import { useSearchByTitleMutation } from '../service/apiSlice';

const SearchBar = () => {
    const [value, setValue] = useState('')
    let Key = localStorage.getItem('S_key')
    let Sign = Md5.hashStr(`GEThttps://no23.lavina.tech/books/:${value}${Key}`)
    const [getSearch, result] = useSearchByTitleMutation({
      fixedCacheKey: 'shared-update-post',
    })

    const handleData = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      getSearch({Key, Sign, title: value})
    }
    
    return (
        <Box component={'form'} onSubmit={handleData}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                required
                fullWidth
                id='search'
                placeholder='Find the book you need...'
                name='search'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                sx={{height: '100%'}}

              >Search</Button>
            </Grid>
          </Grid>
        </Box>
    )
}

export default SearchBar