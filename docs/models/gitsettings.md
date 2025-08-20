# GitSettings

## Example Usage

```typescript
import { GitSettings } from "cribl-control-plane/models";

let value: GitSettings = {
  authType: "<value>",
  autoAction: "<value>",
  autoActionMessage: "<value>",
  autoActionSchedule: "<value>",
  branch: "<value>",
  commitDeploySingleAction: true,
  copilotAutoGitCommitMessages: false,
  defaultCommitMessage: "<value>",
  gitOps: "pull",
  password: "4LwfV0yCWG1nd3u",
  remote: "<value>",
  sshKey: "<value>",
  strictHostKeyChecking: false,
  timeout: 5396.23,
  user: "Moshe_Jones78",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `authType`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `autoAction`                                 | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `autoActionMessage`                          | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `autoActionSchedule`                         | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `branch`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `commitDeploySingleAction`                   | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `copilotAutoGitCommitMessages`               | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `defaultCommitMessage`                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `gitOps`                                     | [models.GitOpsType](../models/gitopstype.md) | :heavy_minus_sign:                           | N/A                                          |
| `password`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `remote`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `sshKey`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `strictHostKeyChecking`                      | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `timeout`                                    | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `user`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |