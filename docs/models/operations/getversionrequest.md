# GetVersionRequest

## Example Usage

```typescript
import { GetVersionRequest } from "cribl-control-plane/models/operations";

let value: GetVersionRequest = {
  groupId: "<id>",
  count: 728216,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `groupId`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | The <code>id</code> of the Worker Group or Edge Fleet to get the commit history for. |
| `count`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | Maximum number of commits to return in the response for this request.                |