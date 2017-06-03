/**
 * Created by chenchen on 2017/2/4.
 *
 * React server render 命令行测试
 */


const IndexBundle = require("../build_server/index.bundle.js");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
let {renderToString} = ReactDOMServer;
let initialData = {todoList: ['11', '22', '33']};
let instance = React.createElement(IndexBundle.default, initialData);


let str = renderToString(instance);

console.log(str);
