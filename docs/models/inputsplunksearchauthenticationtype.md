# InputSplunkSearchAuthenticationType

Splunk Search authentication type

## Example Usage

```typescript
import { InputSplunkSearchAuthenticationType } from "cribl-control-plane/models";

let value: InputSplunkSearchAuthenticationType = "token";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```