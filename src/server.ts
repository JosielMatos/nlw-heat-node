import { serverHttp } from "./app";

//listen to server with cors
serverHttp.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
