# DiffFiles

## Example Usage

```typescript
import { DiffFiles } from "cribl-control-plane/models";

let value: DiffFiles = {
  addedLines: 7600.64,
  blocks: [
    {
      header: "<value>",
      lines: [],
      newStartLine: 3827.34,
      oldStartLine: 4332.9,
      oldStartLine2: 9456.94,
    },
  ],
  changedPercentage: 7086.99,
  checksumAfter: "<value>",
  checksumBefore: "<value>",
  deletedFileMode: "<value>",
  deletedLines: 454.31,
  isBinary: false,
  isCombined: false,
  isCopy: true,
  isDeleted: false,
  isGitDiff: true,
  isNew: true,
  isRename: true,
  isTooBig: false,
  language: "<value>",
  mode: "<value>",
  newFileMode: "<value>",
  newMode: "<value>",
  newName: "<value>",
  oldMode: [
    "<value 1>",
  ],
  oldName: "<value>",
  unchangedPercentage: 9493.76,
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