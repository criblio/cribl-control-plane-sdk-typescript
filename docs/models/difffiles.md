# DiffFiles

## Example Usage

```typescript
import { DiffFiles } from "cribl-control-plane/models";

let value: DiffFiles = {
  addedLines: 7600.64,
  blocks: [
    {
      header: "<value>",
      lines: {
        type: "insert",
        newNumber: 3827.34,
        oldNumber: 9456.94,
        content: "<value>",
      },
      newStartLine: 7086.99,
      oldStartLine: 995.17,
      oldStartLine2: 454.31,
    },
  ],
  changedPercentage: 5504.25,
  checksumAfter: "<value>",
  checksumBefore: [],
  deletedFileMode: "<value>",
  deletedLines: 8824.95,
  isBinary: true,
  isCombined: true,
  isCopy: true,
  isDeleted: false,
  isGitDiff: false,
  isNew: true,
  isRename: false,
  isTooBig: true,
  language: "<value>",
  mode: "<value>",
  newFileMode: "<value>",
  newMode: "<value>",
  newName: "<value>",
  oldMode: "<value>",
  oldName: "<value>",
  unchangedPercentage: 7646.63,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `addedLines`                         | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `blocks`                             | [models.Block](../models/block.md)[] | :heavy_check_mark:                   | N/A                                  |
| `changedPercentage`                  | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `checksumAfter`                      | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `checksumBefore`                     | *models.ChecksumBefore*              | :heavy_minus_sign:                   | N/A                                  |
| `deletedFileMode`                    | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `deletedLines`                       | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `isBinary`                           | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `isCombined`                         | *boolean*                            | :heavy_check_mark:                   | N/A                                  |
| `isCopy`                             | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `isDeleted`                          | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `isGitDiff`                          | *boolean*                            | :heavy_check_mark:                   | N/A                                  |
| `isNew`                              | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `isRename`                           | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `isTooBig`                           | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `language`                           | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `mode`                               | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `newFileMode`                        | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `newMode`                            | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `newName`                            | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `oldMode`                            | *models.OldMode*                     | :heavy_minus_sign:                   | N/A                                  |
| `oldName`                            | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `unchangedPercentage`                | *number*                             | :heavy_minus_sign:                   | N/A                                  |