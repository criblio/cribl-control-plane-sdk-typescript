# InputWindowsMetricsProcess

## Example Usage

```typescript
import { InputWindowsMetricsProcess } from "cribl-control-plane/models";

let value: InputWindowsMetricsProcess = {
  sets: [
    {
      name: "<value>",
      filter: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `sets`                                                                 | [models.InputWindowsMetricsSet](../models/inputwindowsmetricsset.md)[] | :heavy_minus_sign:                                                     | Configure sets to collect process metrics                              |