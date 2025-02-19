import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
import { Card } from 'https://cdn.jsdelivr.net/npm/antd@5.11.1/+esm';

function App() {
	
	const isAppsmithAvailable = typeof appsmith !== "undefined";

  const mockData = {
    // ** mock data **
  }

  const widgetData = isAppsmithAvailable ? appsmith.model : mockData;
	
	console.dir(widgetData, { depth: null });

	
	return (
		<Card className="app">
			<h2>Custom Widget</h2>
			<p>Widget is ready. Add your logic here.</p>
		</Card>
	);
}

appsmith.onReady(() => {
	reactDom.render(<App />, document.getElementById("root"));
});
