# CurrentBranchResult

## Example Usage

```typescript
import { CurrentBranchResult } from "cribl-control-plane/models";

let value: CurrentBranchResult = {
  branch: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `branch`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Name of the Git branch that the Cribl configuration is currently checked out to. |