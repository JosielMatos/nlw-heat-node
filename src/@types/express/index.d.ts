//overwriting express' types so that it understands user_id as string
declare namespace Express {
  export interface Request {
    user_id: string;
  }
}
