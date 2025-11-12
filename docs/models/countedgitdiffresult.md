# CountedGitDiffResult

## Example Usage

```typescript
import { CountedGitDiffResult } from "cribl-control-plane/models";

let value: CountedGitDiffResult = {
  count: 297747,
  items: [
    {
      diffJson: [
        {
          addedLines: 4985.35,
          blocks: [],
          changedPercentage: 5504.85,
          checksumAfter: "<value>",
          checksumBefore: "<value>",
          deletedFileMode: "<value>",
          deletedLines: 4323.22,
          isBinary: true,
          isCombined: false,
          isCopy: true,
          isDeleted: false,
          isGitDiff: true,
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
          unchangedPercentage: 1354.76,
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