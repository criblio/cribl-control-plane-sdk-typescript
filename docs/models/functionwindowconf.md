# FunctionWindowConf

## Example Usage

```typescript
import { FunctionWindowConf } from "cribl-control-plane/models";

let value: FunctionWindowConf = {
  eventWindowId: 6219.1,
  registeredFunctions: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `eventWindowId`                                                 | *number*                                                        | :heavy_check_mark:                                              | Identifies the unique ID, used for a event window               |
| `registeredFunctions`                                           | *string*[]                                                      | :heavy_check_mark:                                              | All window functions, tracked by this event window              |
| `tailEventCount`                                                | *number*                                                        | :heavy_minus_sign:                                              | Number of events to keep before the current event in the window |
| `headEventCount`                                                | *number*                                                        | :heavy_minus_sign:                                              | Number of events to keep after the current event in the window  |