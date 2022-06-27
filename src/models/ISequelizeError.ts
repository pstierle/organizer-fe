export interface ISequelizeError {
  errors: {
    message: string;
    type: string;
  }[];
}
