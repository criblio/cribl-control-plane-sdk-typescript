# CreateVersionUndoRequest

## Example Usage

```typescript
import { CreateVersionUndoRequest } from "cribl-control-plane/models/operations";

let value: CreateVersionUndoRequest = {
  groupId: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `groupId`                                                                                 | *string*                                                                                  | :heavy_minus_sign:                                                                        | The <code>id</code> of the Worker Group or Edge Fleet to undo the uncommited changes for. |