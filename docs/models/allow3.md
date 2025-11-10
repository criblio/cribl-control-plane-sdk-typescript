# Allow3

## Example Usage

```typescript
import { Allow3 } from "cribl-control-plane/models";

let value: Allow3 = {
  procname: "<value>",
  arg: "<value>",
  config: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `procname`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | Specify the name of a process or family of processes.                              |
| `arg`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | Specify a string to substring-match against process command-line.                  |
| `config`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | Choose a config to apply to processes that match the process name and/or argument. |