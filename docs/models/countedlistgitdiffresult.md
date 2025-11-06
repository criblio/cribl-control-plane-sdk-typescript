# CountedListGitDiffResult

## Example Usage

```typescript
import { CountedListGitDiffResult } from "cribl-control-plane/models";

let value: CountedListGitDiffResult = {
  count: 968581,
  items: [
    {
      diffJson: [
        {
          addedLines: 9178.56,
          blocks: [],
          changedPercentage: 3349.59,
          checksumAfter: "<value>",
          checksumBefore: "<value>",
          deletedFileMode: "<value>",
          deletedLines: 3966.51,
          isBinary: true,
          isCombined: false,
          isCopy: false,
          isDeleted: false,
          isGitDiff: false,
          isNew: true,
          isRename: false,
          isTooBig: false,
          language: "<value>",
          mode: "<value>",
          newFileMode: "<value>",
          newMode: "<value>",
          newName: "<value>",
          oldMode: "<value>",
          oldName: "<value>",
          unchangedPercentage: 156.82,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `count`                                              | *number*                                             | :heavy_minus_sign:                                   | number of items present in the items array           |
| `items`                                              | [models.GitDiffResult](../models/gitdiffresult.md)[] | :heavy_minus_sign:                                   | N/A                                                  |