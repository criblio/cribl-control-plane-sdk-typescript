# FunctionConfSchemaSignalFilter

## Example Usage

```typescript
import { FunctionConfSchemaSignalFilter } from "cribl-control-plane/models";

let value: FunctionConfSchemaSignalFilter = {
  signals: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `signals`                            | *string*[]                           | :heavy_minus_sign:                   | List of signal event types to filter |