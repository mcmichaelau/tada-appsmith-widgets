import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm'
import reactDom from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'
import { Button, Card, List, Tag, Typography } from 'https://cdn.jsdelivr.net/npm/antd@5.11.1/+esm'

function App() {

	const mockData = {
		"actionId": "67a6c9fbbb21256b51b1958f",
		"run": {},
		"clear": {},
		"isLoading": false,
		"responseMeta": {
		  "isExecutionSuccess": true
		},
		"config": {
		  "timeoutInMillisecond": 100000,
		  "paginationType": "NONE",
		  "encodeParamsToggle": true,
		  "body": {
			"value": "SELECT \n    e.thread_id,\n    COALESCE(t.subject, MIN(e.subject)) as thread_subject,\n    COUNT(DISTINCT e.id) as total_emails,\n    ROUND(AVG(e.nps), 2) as avg_nps,\n    MAX(e.sent_at) as most_recent_email,\n    MIN(e.sent_at) as thread_started\nFROM emails e\nJOIN companies c ON c.id = e.company_id\nLEFT JOIN threads t ON t.id = e.thread_id\nWHERE \n    c.name = $1\nGROUP BY e.thread_id, t.subject\nORDER BY MAX(e.sent_at) DESC;",
			"parameters": {
			  "$1": "Hempacco Co Inc"
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
			"thread_id": "500Ri00000V9pcbIAB",
			"thread_subject": "Hempacco W-2 and mail address",
			"total_emails": 4,
			"avg_nps": 7.5,
			"most_recent_email": "2025-01-28T00:33:23Z",
			"thread_started": "2025-01-23T20:53:57Z"
		  },
		  {
			"thread_id": "500Ri00000Tqg2TIAR",
			"thread_subject": "Re: Revised SDHEMP Adjustment",
			"total_emails": 20,
			"avg_nps": 8,
			"most_recent_email": "2025-01-13T20:31:58Z",
			"thread_started": "2024-12-20T20:22:13Z"
		  },
		  {
			"thread_id": "500Ri00000UcHD9IAN",
			"thread_subject": "Green Star Labs SemiMonthly Set up",
			"total_emails": 1,
			"avg_nps": 6,
			"most_recent_email": "2025-01-11T10:33:07Z",
			"thread_started": "2025-01-11T10:33:07Z"
		  },
		  {
			"thread_id": "500Ri00000UbkYrIAJ",
			"thread_subject": "Green Star Labs",
			"total_emails": 1,
			"avg_nps": 8,
			"most_recent_email": "2025-01-11T01:52:05Z",
			"thread_started": "2025-01-11T01:52:05Z"
		  },
		  {
			"thread_id": "500Ri00000TqRZkIAN",
			"thread_subject": "SDHEMP Adjustment",
			"total_emails": 1,
			"avg_nps": null,
			"most_recent_email": "2024-12-20T20:20:42Z",
			"thread_started": "2024-12-20T20:20:42Z"
		  }
		]
	  }

	const widgetData = isAppsmithAvailable ? appsmith.model : mockData;

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	};

	const openThread = (threadId) => {
		if (isAppsmithAvailable) {
			appsmith.updateModel({ threadId: threadId });
			appsmith.triggerEvent("threadClicked");

		}
		console.log("threadId", threadId);
	};

	return (
		<Card className="app" title="Email Threads">
			<List
				dataSource={widgetData.data}
				renderItem={(item) => (
					<List.Item>
						<Card 
							style={{ width: '100%', marginBottom: '10px' }}
						>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
								<div>
									<Typography.Title level={4}>{item.thread_subject}</Typography.Title>
									<div style={{ marginBottom: '10px' }}>
										<Tag color="blue">{item.total_emails} emails</Tag>
										{item.avg_nps && (
											<Tag color="green">NPS: {item.avg_nps}</Tag>
										)}
									</div>
									<Typography.Text type="secondary">
										Latest: {formatDate(item.most_recent_email)}
										<br />
										Started: {formatDate(item.thread_started)}
									</Typography.Text>
								</div>
								<Button type="primary" onClick={() => openThread(item.thread_id)}>
									Open Thread
								</Button>
							</div>
						</Card>
					</List.Item>
				)}
			/>
		</Card>
	);
}

const isAppsmithAvailable = typeof appsmith !== "undefined";

// If appsmith is available, use its lifecycle hooks
if (isAppsmithAvailable) {
	appsmith.onReady(() => {
		reactDom.render(<App />, document.getElementById("root"));
	});
	
	appsmith.onModelChange(() => {
		reactDom.render(<App />, document.getElementById("root"));
	});
} else {
	console.log("Appsmith is not available");
	// If appsmith is not available, just render normally
	reactDom.render(<App />, document.getElementById("root"));
}
