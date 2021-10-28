import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
