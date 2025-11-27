# FunctionTeeConf

## Example Usage

```typescript
import { FunctionTeeConf } from "cribl-control-plane/models";

let value: FunctionTeeConf = {
  command: "<value>",
  args: [
    "<value 1>",
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
| `command`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | Command to execute and feed events to, via stdin. One JSON-formatted event per line. |
| `args`                                                                               | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `restartOnExit`                                                                      | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Restart the process if it exits and/or we fail to write to it                        |
| `env`                                                                                | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | Environment variables to overwrite or set                                            |