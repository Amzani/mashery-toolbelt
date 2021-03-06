const clientErrorMessages = require('./error_messages')
const { RequestError } = require('./errors')

function validateFields (methodName, allFields, fields) {
  const invalidFields = []

  fields.forEach(field => {
    if (!allFields.includes(field)) {
      invalidFields.push(field)
    }
  })

  if (invalidFields.length > 0) {
    throw new RequestError(
      'invalid_fields',
      clientErrorMessages.invalid_field(methodName, invalidFields)
    )
  }
}

function makeFieldsParam (methodName, allFields, fields) {
  let resultFields

  if (fields === true || fields === 'all') {
    resultFields = allFields
  } else if (Array.isArray(fields)) {
    validateFields(methodName, allFields, fields)
    resultFields = fields
  } else if (fields && Array.isArray(fields.except)) {
    validateFields(methodName, allFields, fields.except)
    resultFields = allFields.filter(field => !fields.except.includes(field))
  } else {
    return null
  }

  return resultFields.join(',')
}

const service = [
  'id',
  'name',
  'description',
  'created',
  'updated',
  'endpoints',
  'editorHandle',
  'revisionNumber',
  'robotsPolicy',
  'crossdomainPolicy',
  'errorSets',
  'qpsLimitOverall',
  'rfc3986Encode',
  'securityProfile',
  'version',
  'organization'
]

const endpoint = [
  'id',
  'allowMissingApiKey',
  'apiKeyValueLocationKey',
  'apiKeyValueLocations',
  'apiMethodDetectionKey',
  'apiMethodDetectionLocations',
  'cache',
  'errors',
  'connectionTimeoutForSystemDomainRequest',
  'connectionTimeoutForSystemDomainResponse',
  'cookiesDuringHttpRedirectsEnabled',
  'cors',
  'created',
  'customRequestAuthenticationAdapter',
  'dropApiKeyFromIncomingCall',
  'forceGzipOfBackendCall',
  'gzipPassthroughSupportEnabled',
  'headersToExcludeFromIncomingCall',
  'highSecurity',
  'hostPassthroughIncludedInBackendCallHeader',
  'inboundSslRequired',
  'jsonpCallbackParameter',
  'jsonpCallbackParameterValue',
  'scheduledMaintenanceEvent',
  'forwardedHeaders',
  'returnedHeaders',
  'name',
  'numberOfHttpRedirectsToFollow',
  'outboundRequestTargetPath',
  'outboundRequestTargetQueryParameters',
  'outboundTransportProtocol',
  'processor',
  'publicDomains',
  'requestAuthenticationType',
  'requestPathAlias',
  'requestProtocol',
  'oauthGrantTypes',
  'stringsToTrimFromApiKey',
  'supportedHttpMethods',
  'systemDomainAuthentication',
  'systemDomains',
  'trafficManagerDomain',
  'updated',
  'useSystemDomainCredentials',
  'systemDomainCredentialKey',
  'systemDomainCredentialSecret',
  'rateLimitHeadersEnabled'
]

const method = [
  'id',
  'name',
  'created',
  'updated',
  'sampleJsonResponse',
  'sampleXmlResponse'
]

const responseFilters = [
  'id',
  'name',
  'created',
  'updated',
  'notes',
  'xmlFilterFields',
  'jsonFilterFields'
]

const scheduledMaintenanceEvent = [
  'id',
  'name',
  'startDateTime',
  'endDateTime',
  'endpoints'
]

const endpointCache = [
  'clientSurrogateControlEnabled',
  'contentCacheKeyHeaders'
]

const cors = ['allDomainsEnabled', 'maxAge']

const systemDomainAuthentication = [
  'type',
  'username',
  'certificate',
  'password'
]

const serviceErrors = ['id', 'created', 'updated', 'name', 'action']

const errorSets = ['id', 'name', 'type', 'jsonp', 'jsonpType', 'errorMessages']

const errorMessages = ['id', 'code', 'status', 'detailHeader', 'responseBody']

const cache = ['cacheTtl']

const securityProfile = ['oauth']

const oAuth = [
  'accessTokenTtlEnabled',
  'accessTokenTtl',
  'accessTokenType',
  'allowMultipleToken',
  'authorizationCodeTtl',
  'forwardedHeaders',
  'masheryTokenApiEnabled',
  'refreshTokenEnabled',
  'enableRefreshTokenTtl',
  'tokenBasedRateLimitsEnabled',
  'forceOauthRedirectUrl',
  'forceSslRedirectUrlEnabled',
  'grantTypes',
  'macAlgorithm',
  'qpsLimitCeiling',
  'rateLimitCeiling',
  'refreshTokenTtl',
  'secureTokensEnabled'
]

const roles = ['id', 'created', 'updated', 'name', 'action']

module.exports = {
  validateFields,
  makeFieldsParam,
  service,
  endpoint,
  method,
  responseFilters,
  scheduledMaintenanceEvent,
  cors,
  systemDomainAuthentication,
  serviceErrors,
  errorSets,
  errorMessages,
  cache,
  endpointCache,
  securityProfile,
  oAuth,
  roles
}
