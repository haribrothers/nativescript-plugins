
declare class GTMAppAuthFetcherAuthorization extends NSObject implements GTMFetcherAuthorizationProtocol, NSSecureCoding {

	static alloc(): GTMAppAuthFetcherAuthorization; // inherited from NSObject

	static authorizationFromKeychainForName(keychainItemName: string): GTMAppAuthFetcherAuthorization;

	static configurationForGoogle(): OIDServiceConfiguration;

	static new(): GTMAppAuthFetcherAuthorization; // inherited from NSObject

	static removeAuthorizationFromKeychainForName(keychainItemName: string): boolean;

	static saveAuthorizationToKeychainForName(auth: GTMAppAuthFetcherAuthorization, keychainItemName: string): boolean;

	readonly authState: OIDAuthState;

	readonly serviceProvider: string;

	readonly userEmailIsVerified: string;

	readonly userID: string;

	readonly canAuthorize: boolean; // inherited from GTMFetcherAuthorizationProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	fetcherService: GTMSessionFetcherServiceProtocol; // inherited from GTMFetcherAuthorizationProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	shouldAuthorizeAllRequests: boolean; // inherited from GTMFetcherAuthorizationProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly userEmail: string; // inherited from GTMFetcherAuthorizationProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { authState: OIDAuthState; });

	constructor(o: { authState: OIDAuthState; serviceProvider: string; userID: string; userEmail: string; userEmailIsVerified: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	authorizeRequestCompletionHandler(request: NSMutableURLRequest, handler: (p1: NSError) => void): void;

	authorizeRequestDelegateDidFinishSelector(request: NSMutableURLRequest, delegate: any, sel: string): void;

	canAuthorize(): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithAuthState(authState: OIDAuthState): this;

	initWithAuthStateServiceProviderUserIDUserEmailUserEmailIsVerified(authState: OIDAuthState, serviceProvider: string, userID: string, userEmail: string, userEmailIsVerified: string): this;

	initWithCoder(aDecoder: NSCoder): this;

	isAuthorizedRequest(request: NSURLRequest): boolean;

	isAuthorizingRequest(request: NSURLRequest): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	primeForRefresh(): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	stopAuthorization(): void;

	stopAuthorizationForRequest(request: NSURLRequest): void;
}

declare const enum GTMAppAuthFetcherAuthorizationError {

	UnauthorizableRequest = -1004
}

declare var GTMAppAuthFetcherAuthorizationErrorDomain: string;

declare var GTMAppAuthFetcherAuthorizationErrorRequestKey: string;

declare var GTMAppAuthVersionNumber: number;

declare var GTMAppAuthVersionString: interop.Reference<number>;

declare class GTMKeychain extends NSObject {

	static alloc(): GTMKeychain; // inherited from NSObject

	static new(): GTMKeychain; // inherited from NSObject

	static passwordDataFromKeychainForName(keychainItemName: string): NSData;

	static passwordFromKeychainForName(keychainItemName: string): string;

	static removePasswordFromKeychainForName(keychainItemName: string): boolean;

	static savePasswordDataToKeychainForNamePasswordData(keychainItemName: string, passwordData: NSData): boolean;

	static savePasswordToKeychainForNamePassword(keychainItemName: string, password: string): boolean;
}

declare class GTMOAuth2KeychainCompatibility extends NSObject {

	static alloc(): GTMOAuth2KeychainCompatibility; // inherited from NSObject

	static authForGoogleFromKeychainForNameClientIDClientSecret(keychainItemName: string, clientID: string, clientSecret: string): GTMAppAuthFetcherAuthorization;

	static authorizeFromKeychainForNameServiceProviderTokenURLRedirectURIClientIDClientSecret(keychainItemName: string, serviceProvider: string, tokenURL: NSURL, redirectURI: string, clientID: string, clientSecret: string): GTMAppAuthFetcherAuthorization;

	static authorizeFromPersistenceStringServiceProviderTokenURLRedirectURIClientIDClientSecret(persistenceString: string, serviceProvider: string, tokenURL: NSURL, redirectURI: string, clientID: string, clientSecret: string): GTMAppAuthFetcherAuthorization;

	static googleAuthorizationURL(): NSURL;

	static googleRevocationURL(): NSURL;

	static googleTokenURL(): NSURL;

	static googleUserInfoURL(): NSURL;

	static nativeClientRedirectURI(): string;

	static new(): GTMOAuth2KeychainCompatibility; // inherited from NSObject

	static persistenceResponseStringForAuthorization(authorization: GTMAppAuthFetcherAuthorization): string;

	static removeAuthFromKeychainForName(keychainItemName: string): boolean;

	static saveAuthToKeychainForNameAuthentication(keychainItemName: string, auth: GTMAppAuthFetcherAuthorization): boolean;
}

declare class GTMTVAuthorizationRequest extends OIDAuthorizationRequest {

	static alloc(): GTMTVAuthorizationRequest; // inherited from NSObject

	static new(): GTMTVAuthorizationRequest; // inherited from NSObject

	constructor(o: { configuration: GTMTVServiceConfiguration; clientId: string; clientSecret: string; scopes: NSArray<string>; additionalParameters: NSDictionary<string, string>; });

	URLRequest(): NSURLRequest;

	initWithConfigurationClientIdClientSecretScopesAdditionalParameters(configuration: GTMTVServiceConfiguration, clientID: string, clientSecret: string, scopes: NSArray<string>, additionalParameters: NSDictionary<string, string>): this;
}

declare class GTMTVAuthorizationResponse extends OIDAuthorizationResponse {

	static alloc(): GTMTVAuthorizationResponse; // inherited from NSObject

	static new(): GTMTVAuthorizationResponse; // inherited from NSObject

	readonly deviceCode: string;

	readonly expirationDate: Date;

	readonly interval: number;

	readonly userCode: string;

	readonly verificationURL: string;

	constructor(o: { request: GTMTVAuthorizationRequest; parameters: NSDictionary<string, NSObject>; });

	initWithRequestParameters(request: GTMTVAuthorizationRequest, parameters: NSDictionary<string, NSObject>): this;

	tokenPollRequest(): OIDTokenRequest;

	tokenPollRequestWithAdditionalParameters(additionalParameters: NSDictionary<string, string>): OIDTokenRequest;
}

declare class GTMTVAuthorizationService extends NSObject {

	static TVConfigurationForGoogle(): GTMTVServiceConfiguration;

	static alloc(): GTMTVAuthorizationService; // inherited from NSObject

	static authorizeTVRequestInitializaitonCompletion(request: GTMTVAuthorizationRequest, initialization: (p1: GTMTVAuthorizationResponse, p2: NSError) => void, completion: (p1: GTMAppAuthFetcherAuthorization, p2: NSError) => void): () => void;

	static new(): GTMTVAuthorizationService; // inherited from NSObject
}

declare var GTMTVDeviceTokenGrantType: string;

declare class GTMTVServiceConfiguration extends OIDServiceConfiguration {

	static alloc(): GTMTVServiceConfiguration; // inherited from NSObject

	static new(): GTMTVServiceConfiguration; // inherited from NSObject

	readonly TVAuthorizationEndpoint: NSURL;

	constructor(o: { authorizationEndpoint: NSURL; TVAuthorizationEndpoint: NSURL; tokenEndpoint: NSURL; });

	initWithAuthorizationEndpointTVAuthorizationEndpointTokenEndpoint(authorizationEndpoint: NSURL, TVAuthorizationEndpoint: NSURL, tokenEndpoint: NSURL): this;
}
