# FunctionConfSchemaWindow

## Example Usage

```typescript
import { FunctionConfSchemaWindow } from "cribl-control-plane/models";

let value: FunctionConfSchemaWindow = {
  eventWindowId: 1760.57,
  registeredFunctions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `eventWindowId`                                                 | *number*                                                        | :heavy_minus_sign:                                              | Identifies the unique ID, used for a event window               |
| `registeredFunctions`                                           | *string*[]                                                      | :heavy_minus_sign:                                              | All window functions, tracked by this event window              |
| `tailEventCount`                                                | *number*                                                        | :heavy_minus_sign:                                              | Number of events to keep before the current event in the window |
| `headEventCount`                                                | *number*                                                        | :heavy_minus_sign:                                              | Number of events to keep after the current event in the window  |