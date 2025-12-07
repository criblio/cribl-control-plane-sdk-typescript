# FunctionTeeSchema

## Example Usage

```typescript
import { FunctionTeeSchema } from "cribl-control-plane/models";

let value: FunctionTeeSchema = {
  command: "<value>",
  args: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  env: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `command`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Command to execute and feed events to, via stdin. One JSON-formatted event per line. |
| `args`                                                                               | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `restartOnExit`                                                                      | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Restart the process if it exits and/or we fail to write to it                        |
| `env`                                                                                | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | Environment variables to overwrite or set                                            |