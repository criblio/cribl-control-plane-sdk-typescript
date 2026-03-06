# ResourceRecordType

The DNS record type (RR) to return. Defaults to 'A'.

## Example Usage

```typescript
import { ResourceRecordType } from "cribl-control-plane/models";

let value: ResourceRecordType = "MX";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"A" | "AAAA" | "ANY" | "CNAME" | "MX" | "NAPTR" | "NS" | "PTR" | "SOA" | "SRV" | "TXT" | Unrecognized<string>
```