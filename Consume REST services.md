# How Spring Boot Consumes REST services

```java
HttpHeaders  headers = new  HttpHeaders();
/*

* Construct HTTP request header containing BASIC authentication to CCP-Shared-API

* BASIC authentication credential is maintained in properties

*/

String  plainCreds = ccpUsername + ":" + ccpPassword;

byte[] plainCredsBytes = plainCreds.getBytes();

byte[] base64CredsBytes = Base64Utils.encode(plainCredsBytes);

String  base64Creds = new  String(base64CredsBytes);

headers.add("Authorization", "Basic " + base64Creds);

// construct URI parameters

Map<String, String> uriParams = new  HashMap<String, String>();

uriParams.put("bizSrf", borrowerSrf);

// construct query parameters

UriComponentsBuilder  builder =

UriComponentsBuilder

.fromUriString(ccpSharedApiEndpoint)

.queryParam("legacyId", employeeId)

.queryParam("opc", opc)

.queryParam("lang", lang)

.queryParam("transitNo", transitNo);

HttpEntity<?> entity = new  HttpEntity<>(headers);

ResponseEntity<String> jsonRes =

restTemplate.exchange(

builder.buildAndExpand(uriParams).encode().toUriString(),

HttpMethod.GET,

entity,

String.class);

logger.debug("------> CCP-Shared-API response HTTP/{},{}", jsonRes.getStatusCodeValue(), jsonRes.getBody());

if (jsonRes.getStatusCode().equals(HttpStatus.OK)) {

JsonNode  root = new  ObjectMapper().readTree(jsonRes.getBody());

logger.debug("------> {} related customers found", root.path("relatedCustList").size());

for (JsonNode node:  root.path("relatedCustList")) {

PersonInfoModel  person = new  PersonInfoModel();

person.setClientId(node.path("relCustId").asText());

person.setFirstName(node.path("firstName").asText());

person.setLastName(node.path("lastName").asText());

persons.add(person);

}

}

```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM2NzQyOTU3N119
-->