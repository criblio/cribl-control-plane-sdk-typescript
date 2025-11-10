# OutputSplunkLbAuthToken2

## Example Usage

```typescript
import { OutputSplunkLbAuthToken2 } from "cribl-control-plane/models";

let value: OutputSplunkLbAuthToken2 = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `authType`                                                                                           | [models.AuthTokenAuthenticationMethod2](../models/authtokenauthenticationmethod2.md)                 | :heavy_minus_sign:                                                                                   | Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate |