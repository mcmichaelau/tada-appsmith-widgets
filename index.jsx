import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm'
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'
import { Button, Card } from 'https://cdn.jsdelivr.net/npm/antd@5.11.1/+esm'
function App() {

	const isAppsmithAvailable = typeof appsmith !== "undefined";

	const mockData = {
		"actionId": "67a6c9fbbb21256b51b1958f",
		"run": {},
		"clear": {},
		"isLoading": false,
		"responseMeta": {
		  "isExecutionSuccess": true
		},
		"config": {
		  "timeoutInMillisecond": 10000,
		  "paginationType": "NONE",
		  "encodeParamsToggle": true,
		  "body": {
			"value": "SELECT \n    e.thread_id,\n    COALESCE(t.subject, MIN(e.subject)) as thread_subject,\n    COUNT(DISTINCT e.id) as total_emails,\n    ROUND(AVG(e.nps), 2) as avg_nps,\n    MAX(e.sent_at) as most_recent_email,\n    MIN(e.sent_at) as thread_started\nFROM emails e\nJOIN companies c ON c.id = e.company_id\nLEFT JOIN threads t ON t.id = e.thread_id\nWHERE \n    c.name = $1\nGROUP BY e.thread_id, t.subject\nORDER BY MAX(e.sent_at) DESC;",
			"parameters": {
			  "$1": "Trans-Global Solutions, Inc. (TGS/Bowers)"
			}
		  },
		  "pluginSpecifiedTemplates": [
			{
			  "value": true
			}
		  ]
		},
		"ENTITY_TYPE": "ACTION",
		"datasourceUrl": "",
		"data": [
		  {
			"thread_id": "500Ri00000WLRlxIAH",
			"thread_subject": "RE: FW: W2 - Misspelled Name",
			"total_emails": 2,
			"avg_nps": 10,
			"most_recent_email": "2025-02-19T17:47:35Z",
			"thread_started": "2025-02-18T22:17:13Z"
		  },
		  {
			"thread_id": "500Ri00000RGB87IAH",
			"thread_subject": "RE: BOTGSI- Certified PR",
			"total_emails": 9,
			"avg_nps": 8.14,
			"most_recent_email": "2025-01-31T20:03:30Z",
			"thread_started": "2024-10-28T22:00:55Z"
		  },
		  {
			"thread_id": "500Ri00000VHqzfIAD",
			"thread_subject": "Oklahoma Unemployment Upload Error - BOTGSI",
			"total_emails": 1,
			"avg_nps": null,
			"most_recent_email": "2025-01-27T16:49:10Z",
			"thread_started": "2025-01-27T16:49:10Z"
		  },
		  {
			"thread_id": "500Ri00000VCHmSIAX",
			"thread_subject": "Direct Deposit Correction BOTGSS",
			"total_emails": 1,
			"avg_nps": null,
			"most_recent_email": "2025-01-24T17:39:07Z",
			"thread_started": "2025-01-24T17:39:07Z"
		  },
		  {
			"thread_id": "500Ri00000RGUllIAH",
			"thread_subject": "Changes to Brigitte's Workload: Trans-Global Solutions",
			"total_emails": 1,
			"avg_nps": 8,
			"most_recent_email": "2024-10-28T15:35:18Z",
			"thread_started": "2024-10-28T15:35:18Z"
		  },
		  {
			"thread_id": "500Ri00000RGEykIAH",
			"thread_subject": "Case transferred to you.",
			"total_emails": 1,
			"avg_nps": null,
			"most_recent_email": "2024-10-28T14:50:40Z",
			"thread_started": "2024-10-28T14:50:40Z"
		  },
		  {
			"thread_id": "500Ri00000JRiGYIA1",
			"thread_subject": "A new client has been assigned to you. TRANS-GLOBAL SOLUTIONS I NC 10/01/24",
			"total_emails": 1,
			"avg_nps": null,
			"most_recent_email": "2024-06-24T18:34:11Z",
			"thread_started": "2024-06-24T18:34:11Z"
		  }
		]
	  }

	const widgetData = isAppsmithAvailable ? appsmith.model : mockData;
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
