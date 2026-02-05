# RouteComment

## Example Usage

```typescript
import { RouteComment } from "cribl-control-plane/models";

let value: RouteComment = {
  comment:
    "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
  groupId: "<id>",
  id: "<id>",
  index: 9658.39,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `comment`                            | *string*                             | :heavy_check_mark:                   | Description of this Route's purpose. |
| `groupId`                            | *string*                             | :heavy_minus_sign:                   | Optional group identifier.           |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Unique identifier for the comment.   |
| `index`                              | *number*                             | :heavy_check_mark:                   | Position index of the comment.       |