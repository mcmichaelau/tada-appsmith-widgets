import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
import { Card } from 'https://cdn.jsdelivr.net/npm/antd@5.11.1/+esm';

function App() {
	
	const isAppsmithAvailable = typeof appsmith !== "undefined";

  const mockData = {
    "query1": "[{\"id\":1,\"tag_name\":\"Census_report_Export\",\"prompt_id\":1,\"is_alert\":true,\"approved\":false},{\"id\":2,\"tag_name\":\"Contract_Request\",\"prompt_id\":4,\"is_alert\":true,\"approved\":false},{\"id\":3,\"tag_name\":\"Cost_Complaint\",\"prompt_id\":4,\"is_alert\":true,\"approved\":false},{\"id\":4,\"tag_name\":\"Export_Report_941\",\"prompt_id\":1,\"is_alert\":true,\"approved\":false},{\"id\":7,\"tag_name\":\"Quaterly_Report\",\"prompt_id\":1,\"is_alert\":true,\"approved\":false},{\"id\":8,\"tag_name\":\"YTD_Export_Report\",\"prompt_id\":1,\"is_alert\":true,\"approved\":false},{\"id\":9,\"tag_name\":\"YTD_employee_Export_Report\",\"prompt_id\":1,\"is_alert\":true,\"approved\":false},{\"id\":11,\"tag_name\":\"complaining_about_no_follow_up\",\"prompt_id\":3,\"is_alert\":true,\"approved\":false},{\"id\":16,\"tag_name\":\"shoutout\",\"prompt_id\":2,\"is_alert\":true,\"approved\":false},{\"id\":6,\"tag_name\":\"Other_Export_Report\",\"prompt_id\":1,\"is_alert\":true,\"approved\":false}]"
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
