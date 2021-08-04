"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../routes/todo");
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hi from main page!');
});
// routes
app.use(todo_1.todoRouter);
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map