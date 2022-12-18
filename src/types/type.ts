export interface IBook {
  author: string,
  cover: string,
  id: number | null,
  isbn: string,
  pages: number | null,
  published: number | null,
  title: string
}

export interface ISelectBooks extends IBook {
  book: {
    author: string,
    cover: string,
    id: number | null,
    isbn: string,
    pages: number | null,
    published: number | null,
    title: string
  }
  status: number
}

export interface IContext extends IBook {
  books: IBook[],
  setBooks: (items: IBook[]) => void
}

export interface IProviderProps {
  children: JSX.Element
}