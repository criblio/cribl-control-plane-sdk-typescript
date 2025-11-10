# DataSetSite5

DataSet site to which events should be sent

## Example Usage

```typescript
import { DataSetSite5 } from "cribl-control-plane/models";

let value: DataSetSite5 = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"us" | "eu" | "custom" | Unrecognized<string>
```