# OutputMinioServerSideEncryption

Server-side encryption for uploaded objects

## Example Usage

```typescript
import { OutputMinioServerSideEncryption } from "cribl-control-plane/models";

let value: OutputMinioServerSideEncryption = "AES256";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AES256" | Unrecognized<string>
```