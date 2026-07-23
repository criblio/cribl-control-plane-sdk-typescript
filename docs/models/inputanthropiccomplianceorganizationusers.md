# InputAnthropicComplianceOrganizationUsers

Organization Users

## Example Usage

```typescript
import { InputAnthropicComplianceOrganizationUsers } from "cribl-control-plane/models";

let value: InputAnthropicComplianceOrganizationUsers = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Enabled                                                                                      |
| `cronSchedule`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | Schedule on which to run this collection job                                                 |
| `jobTimeout`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | Maximum time the job is allowed to run (examples: 30, 45s, 15m). Enter 0 for unlimited time. |