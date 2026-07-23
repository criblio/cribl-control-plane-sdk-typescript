# GitRevertParams

## Example Usage

```typescript
import { GitRevertParams } from "cribl-control-plane/models";

let value: GitRevertParams = {
  commit: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `commit`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | SHA-1 hash of the commit to revert.                                                                                 |
| `force`                                                                                                             | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | If <code>true</code>, force the revert even when the working directory is not clean. Otherwise, <code>false</code>. |
| `message`                                                                                                           | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Custom message to use for the revert commit. If omitted, a default message is generated.                            |