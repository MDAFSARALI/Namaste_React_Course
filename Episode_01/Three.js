const root =ReactDOM.createRoot(document.getElementById('root'));
const parent=React.createElement("div",{id:"green"},[
    React.createElement("div",{id:"red"},[
    React.createElement("h1",{},"I am H1"),
    React.createElement("h2",{},"I am H2")
]),
React.createElement("div",{id:"red"},[
    React.createElement("h1",{},"I am H1"),
    React.createElement("h2",{},"I am H2")
])
])
root.render(parent);