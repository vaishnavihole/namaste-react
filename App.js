const heading =  React.createElement(
"h1", 
{id: "heading", xyz: "abc"},  
"Hello World from react"
);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);