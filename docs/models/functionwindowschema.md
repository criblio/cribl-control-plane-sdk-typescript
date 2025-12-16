# FunctionWindowSchema

## Example Usage

```typescript
import { FunctionWindowSchema } from "cribl-control-plane/models";

let value: FunctionWindowSchema = {
  eventWindowId: 1624.07,
  registeredFunctions: [
    "<value 1>",
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