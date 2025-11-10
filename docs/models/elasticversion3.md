# ElasticVersion3

Optional Elasticsearch version, used to format events. If not specified, will auto-discover version.

## Example Usage

```typescript
import { ElasticVersion3 } from "cribl-control-plane/models";

let value: ElasticVersion3 = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "6" | "7" | Unrecognized<string>
```