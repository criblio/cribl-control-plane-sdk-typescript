# ResourceRecordType

The DNS record type (RR) to return. Defaults to 'A'.

## Example Usage

```typescript
import { ResourceRecordType } from "cribl-control-plane/models";

let value: ResourceRecordType = "MX";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"A" | "AAAA" | "ANY" | "CNAME" | "MX" | "NAPTR" | "NS" | "PTR" | "SOA" | "SRV" | "TXT" | Unrecognized<string>
```