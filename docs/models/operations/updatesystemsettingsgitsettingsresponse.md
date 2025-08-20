# UpdateSystemSettingsGitSettingsResponse

a list of GitSettings objects

## Example Usage

```typescript
import { UpdateSystemSettingsGitSettingsResponse } from "cribl-control-plane/models/operations";

let value: UpdateSystemSettingsGitSettingsResponse = {
  count: 680644,
  items: [
    {
      authType: "<value>",
      autoAction: "<value>",
      autoActionMessage: "<value>",
      autoActionSchedule: "<value>",
      branch: "<value>",
      commitDeploySingleAction: true,
      copilotAutoGitCommitMessages: false,
      defaultCommitMessage: "<value>",
      gitOps: "push",
      password: "RYetZPOYbS85FTo",
      remote: "<value>",
      sshKey: "<value>",
      strictHostKeyChecking: true,
      timeout: 420.95,
      user: "Jammie.Rau54",
    },
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `count`                                             | *number*                                            | :heavy_minus_sign:                                  | number of items present in the items array          |
| `items`                                             | [models.GitSettings](../../models/gitsettings.md)[] | :heavy_minus_sign:                                  | N/A                                                 |