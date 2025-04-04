import { Book } from '../book.interface';

export class CreateBookDto implements Book {
  authors: string;
  description: string;
  favorite: string;
  fileBook: string;
  fileCover: string;
  fileName: string;
  title: string;
}
