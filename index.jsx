import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm'
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'
import { Button, Card } from 'https://cdn.jsdelivr.net/npm/antd@5.11.1/+esm'
function App() {
    return (
        <Card className="app">
            <div className="widget-container">
                <h2>Custom Widget</h2>
                <p>Implement your custom widget here</p>
            </div>
        </Card>
    );
}
// appsmith.onReady(() => {

//  reactDom.render(<App />, document.getElementById("root"));
// });
reactDom.render(<App />, document.getElementById("root"));
