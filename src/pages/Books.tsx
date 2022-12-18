import {Md5} from 'ts-md5'
import { useGetBooksQuery } from '../service/apiSlice'
import { IBook } from '../types/type'

const Books = () => {
    let Key = 'mustang'
    let Sign = Md5.hashStr(`GEThttps://no23.lavina.tech/books${Key}`)

    const {
      data: books,
      isLoading,
      isSuccess,
      isError,
      error
  } = useGetBooksQuery({Key, Sign})

  return (
    <div>{books?.data.map((item: IBook) => <h1 key={item.book.id}>{item.book.author}<img src={item.book.cover} /></h1>)}</div>
  )
}

export default Books