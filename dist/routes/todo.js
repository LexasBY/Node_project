"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.todoRouter = router;
router.get('/auth/:id', (req, res) => {
    return res.send('you got the Token!');
});
router.get('/post', (req, res) => {
    return res.send('list of all posts');
});
router.post('/post', (req, res) => {
    return res.send('create a new post');
});
router.get('/post/:id', (req, res) => {
    return res.send('one post from id');
});
router.put('/post/:id', (req, res) => {
    return res.send('update post from id');
});
router.delete('/post/:id', (req, res) => {
    return res.send('delete id post');
});
//# sourceMappingURL=todo.js.map