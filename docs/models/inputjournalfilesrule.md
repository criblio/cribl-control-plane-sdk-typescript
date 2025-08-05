# InputJournalFilesRule

## Example Usage

```typescript
import { InputJournalFilesRule } from "cribl-control-plane/models";

let value: InputJournalFilesRule = {
  filter: "<value>",
  description: "gosh cumbersome thyme whoever fess gee pish",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |