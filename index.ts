import makeApp from "./app.factory";

const server = makeApp();
const PORT = Number(process.env.PORT || 8080);
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
