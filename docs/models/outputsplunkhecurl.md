# OutputSplunkHecUrl

## Example Usage

```typescript
import { OutputSplunkHecUrl } from "cribl-control-plane/models";

let value: OutputSplunkHecUrl = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `url`                                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | URL to a Splunk HEC endpoint to send events to, e.g., http://localhost:8088/services/collector/event |
| `weight`                                                                                             | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability                    |