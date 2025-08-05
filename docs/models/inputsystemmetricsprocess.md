# InputSystemMetricsProcess

## Example Usage

```typescript
import { InputSystemMetricsProcess } from "cribl-control-plane/models";

let value: InputSystemMetricsProcess = {
  sets: [
    {
      name: "<value>",
      filter: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `sets`                                                               | [models.InputSystemMetricsSet](../models/inputsystemmetricsset.md)[] | :heavy_minus_sign:                                                   | Configure sets to collect process metrics                            |