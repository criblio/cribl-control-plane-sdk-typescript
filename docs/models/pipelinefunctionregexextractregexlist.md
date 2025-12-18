# PipelineFunctionRegexExtractRegexList

## Example Usage

```typescript
import { PipelineFunctionRegexExtractRegexList } from "cribl-control-plane/models";

let value: PipelineFunctionRegexExtractRegexList = {
  regex: "<value>",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `regex`                                                                                                                                               | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | Regex literal with named capturing groups, such as (?<foo>bar), or _NAME_ and _VALUE_ capturing groups, such as (?<_NAME_0>[^ =]+)=(?<_VALUE_0>[^,]+) |