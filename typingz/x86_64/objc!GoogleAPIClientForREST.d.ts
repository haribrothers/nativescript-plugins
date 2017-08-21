
declare class GTLRBatchQuery extends NSObject implements GTLRQueryProtocol {

	static alloc(): GTLRBatchQuery; // inherited from NSObject

	static batchQuery(): GTLRBatchQuery;

	static batchQueryWithQueries(array: NSArray<GTLRQuery>): GTLRBatchQuery;

	static new(): GTLRBatchQuery; // inherited from NSObject

	additionalHTTPHeaders: NSDictionary<string, string>;

	additionalURLQueryParameters: NSDictionary<string, string>;

	boundary: string;

	loggingName: string;

	queries: NSArray<GTLRQuery>;

	shouldSkipAuthorization: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	executionParameters: GTLRServiceExecutionParameters; // inherited from GTLRQueryProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly uploadParameters: GTLRUploadParameters; // inherited from GTLRQueryProtocol

	readonly  // inherited from NSObjectProtocol

	addQuery(query: GTLRQuery): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	hasExecutionParameters(): boolean;

	invalidateQuery(): void;

	isBatchQuery(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	queryForRequestID(requestID: string): GTLRQuery;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GTLRBatchResult extends GTLRObject {

	static alloc(): GTLRBatchResult; // inherited from NSObject

	static new(): GTLRBatchResult; // inherited from NSObject

	static object(): GTLRBatchResult; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRBatchResult; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRBatchResult; // inherited from GTLRObject

	failures: NSDictionary<string, GTLRErrorObject>;

	responseHeaders: NSDictionary<string, NSDictionary<any, any>>;

	successes: NSDictionary<string, GTLRObject>;
}

declare class GTLRCollectionObject extends GTLRObject implements NSFastEnumeration {

	static alloc(): GTLRCollectionObject; // inherited from NSObject

	static collectionItemsKey(): string;

	static new(): GTLRCollectionObject; // inherited from NSObject

	static object(): GTLRCollectionObject; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRCollectionObject; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRCollectionObject; // inherited from GTLRObject
	[index: number]: any;
	[Symbol.iterator](): Iterator<any>;

	objectAtIndexedSubscript(idx: number): any;
}

declare class GTLRDataObject extends GTLRObject {

	static alloc(): GTLRDataObject; // inherited from NSObject

	static new(): GTLRDataObject; // inherited from NSObject

	static object(): GTLRDataObject; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDataObject; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDataObject; // inherited from GTLRObject

	contentType: string;

	data: NSData;
}

declare class GTLRDateTime extends NSObject implements NSCopying {

	static alloc(): GTLRDateTime; // inherited from NSObject

	static calendar(): NSCalendar;

	static dateTimeForAllDayWithDate(date: Date): GTLRDateTime;

	static dateTimeWithDate(date: Date): GTLRDateTime;

	static dateTimeWithDateComponents(date: NSDateComponents): GTLRDateTime;

	static dateTimeWithDateOffsetMinutes(date: Date, offsetMinutes: number): GTLRDateTime;

	static dateTimeWithRFC3339String(str: string): GTLRDateTime;

	static new(): GTLRDateTime; // inherited from NSObject

	readonly RFC3339String: string;

	readonly date: Date;

	readonly dateComponents: NSDateComponents;

	readonly hasTime: boolean;

	readonly milliseconds: number;

	readonly offsetMinutes: number;

	readonly stringValue: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare function GTLRDecodeBase64(base64Str: string): NSData;

declare function GTLRDecodeWebSafeBase64(base64Str: string): NSData;

declare class GTLRDriveQuery extends GTLRQuery {

	static alloc(): GTLRDriveQuery; // inherited from NSObject

	static new(): GTLRDriveQuery; // inherited from NSObject

	fields: string;
}

declare class GTLRDriveQuery_AboutGet extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_AboutGet; // inherited from NSObject

	static new(): GTLRDriveQuery_AboutGet; // inherited from NSObject

	static query(): GTLRDriveQuery_AboutGet;
}

declare class GTLRDriveQuery_ChangesGetStartPageToken extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_ChangesGetStartPageToken; // inherited from NSObject

	static new(): GTLRDriveQuery_ChangesGetStartPageToken; // inherited from NSObject

	static query(): GTLRDriveQuery_ChangesGetStartPageToken;

	supportsTeamDrives: boolean;

	teamDriveId: string;
}

declare class GTLRDriveQuery_ChangesList extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_ChangesList; // inherited from NSObject

	static new(): GTLRDriveQuery_ChangesList; // inherited from NSObject

	static queryWithPageToken(pageToken: string): GTLRDriveQuery_ChangesList;

	includeCorpusRemovals: boolean;

	includeRemoved: boolean;

	includeTeamDriveItems: boolean;

	pageSize: number;

	pageToken: string;

	restrictToMyDrive: boolean;

	spaces: string;

	supportsTeamDrives: boolean;

	teamDriveId: string;
}

declare class GTLRDriveQuery_ChangesWatch extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_ChangesWatch; // inherited from NSObject

	static new(): GTLRDriveQuery_ChangesWatch; // inherited from NSObject

	static queryWithObjectPageToken(object: GTLRDrive_Channel, pageToken: string): GTLRDriveQuery_ChangesWatch;

	includeCorpusRemovals: boolean;

	includeRemoved: boolean;

	includeTeamDriveItems: boolean;

	pageSize: number;

	pageToken: string;

	restrictToMyDrive: boolean;

	spaces: string;

	supportsTeamDrives: boolean;

	teamDriveId: string;
}

declare class GTLRDriveQuery_ChannelsStop extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_ChannelsStop; // inherited from NSObject

	static new(): GTLRDriveQuery_ChannelsStop; // inherited from NSObject

	static queryWithObject(object: GTLRDrive_Channel): GTLRDriveQuery_ChannelsStop;
}

declare class GTLRDriveQuery_CommentsCreate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_CommentsCreate; // inherited from NSObject

	static new(): GTLRDriveQuery_CommentsCreate; // inherited from NSObject

	static queryWithObjectFileId(object: GTLRDrive_Comment, fileId: string): GTLRDriveQuery_CommentsCreate;

	fileId: string;
}

declare class GTLRDriveQuery_CommentsDelete extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_CommentsDelete; // inherited from NSObject

	static new(): GTLRDriveQuery_CommentsDelete; // inherited from NSObject

	static queryWithFileIdCommentId(fileId: string, commentId: string): GTLRDriveQuery_CommentsDelete;

	commentId: string;

	fileId: string;
}

declare class GTLRDriveQuery_CommentsGet extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_CommentsGet; // inherited from NSObject

	static new(): GTLRDriveQuery_CommentsGet; // inherited from NSObject

	static queryWithFileIdCommentId(fileId: string, commentId: string): GTLRDriveQuery_CommentsGet;

	commentId: string;

	fileId: string;

	includeDeleted: boolean;
}

declare class GTLRDriveQuery_CommentsList extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_CommentsList; // inherited from NSObject

	static new(): GTLRDriveQuery_CommentsList; // inherited from NSObject

	static queryWithFileId(fileId: string): GTLRDriveQuery_CommentsList;

	fileId: string;

	includeDeleted: boolean;

	pageSize: number;

	pageToken: string;

	startModifiedTime: string;
}

declare class GTLRDriveQuery_CommentsUpdate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_CommentsUpdate; // inherited from NSObject

	static new(): GTLRDriveQuery_CommentsUpdate; // inherited from NSObject

	static queryWithObjectFileIdCommentId(object: GTLRDrive_Comment, fileId: string, commentId: string): GTLRDriveQuery_CommentsUpdate;

	commentId: string;

	fileId: string;
}

declare class GTLRDriveQuery_FilesCopy extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesCopy; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesCopy; // inherited from NSObject

	static queryWithObjectFileId(object: GTLRDrive_File, fileId: string): GTLRDriveQuery_FilesCopy;

	fileId: string;

	ignoreDefaultVisibility: boolean;

	keepRevisionForever: boolean;

	ocrLanguage: string;

	supportsTeamDrives: boolean;
}

declare class GTLRDriveQuery_FilesCreate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesCreate; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesCreate; // inherited from NSObject

	static queryWithObjectUploadParameters(object: GTLRDrive_File, uploadParameters: GTLRUploadParameters): GTLRDriveQuery_FilesCreate;

	ignoreDefaultVisibility: boolean;

	keepRevisionForever: boolean;

	ocrLanguage: string;

	supportsTeamDrives: boolean;

	useContentAsIndexableText: boolean;
}

declare class GTLRDriveQuery_FilesDelete extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesDelete; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesDelete; // inherited from NSObject

	static queryWithFileId(fileId: string): GTLRDriveQuery_FilesDelete;

	fileId: string;

	supportsTeamDrives: boolean;
}

declare class GTLRDriveQuery_FilesEmptyTrash extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesEmptyTrash; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesEmptyTrash; // inherited from NSObject

	static query(): GTLRDriveQuery_FilesEmptyTrash;
}

declare class GTLRDriveQuery_FilesExport extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesExport; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesExport; // inherited from NSObject

	static queryForMediaWithFileIdMimeType(fileId: string, mimeType: string): GTLRDriveQuery_FilesExport;

	fileId: string;

	mimeType: string;
}

declare class GTLRDriveQuery_FilesGenerateIds extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesGenerateIds; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesGenerateIds; // inherited from NSObject

	static query(): GTLRDriveQuery_FilesGenerateIds;

	count: number;

	space: string;
}

declare class GTLRDriveQuery_FilesGet extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesGet; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesGet; // inherited from NSObject

	static queryForMediaWithFileId(fileId: string): GTLRDriveQuery_FilesGet;

	static queryWithFileId(fileId: string): GTLRDriveQuery_FilesGet;

	acknowledgeAbuse: boolean;

	fileId: string;

	supportsTeamDrives: boolean;
}

declare class GTLRDriveQuery_FilesList extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesList; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesList; // inherited from NSObject

	static query(): GTLRDriveQuery_FilesList;

	corpora: string;

	corpus: string;

	includeTeamDriveItems: boolean;

	orderBy: string;

	pageSize: number;

	pageToken: string;

	q: string;

	spaces: string;

	supportsTeamDrives: boolean;

	teamDriveId: string;
}

declare class GTLRDriveQuery_FilesUpdate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesUpdate; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesUpdate; // inherited from NSObject

	static queryWithObjectFileIdUploadParameters(object: GTLRDrive_File, fileId: string, uploadParameters: GTLRUploadParameters): GTLRDriveQuery_FilesUpdate;

	addParents: string;

	fileId: string;

	keepRevisionForever: boolean;

	ocrLanguage: string;

	removeParents: string;

	supportsTeamDrives: boolean;

	useContentAsIndexableText: boolean;
}

declare class GTLRDriveQuery_FilesWatch extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_FilesWatch; // inherited from NSObject

	static new(): GTLRDriveQuery_FilesWatch; // inherited from NSObject

	static queryForMediaWithObjectFileId(object: GTLRDrive_Channel, fileId: string): GTLRDriveQuery_FilesWatch;

	static queryWithObjectFileId(object: GTLRDrive_Channel, fileId: string): GTLRDriveQuery_FilesWatch;

	acknowledgeAbuse: boolean;

	fileId: string;

	supportsTeamDrives: boolean;
}

declare class GTLRDriveQuery_PermissionsCreate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_PermissionsCreate; // inherited from NSObject

	static new(): GTLRDriveQuery_PermissionsCreate; // inherited from NSObject

	static queryWithObjectFileId(object: GTLRDrive_Permission, fileId: string): GTLRDriveQuery_PermissionsCreate;

	emailMessage: string;

	fileId: string;

	sendNotificationEmail: boolean;

	supportsTeamDrives: boolean;

	transferOwnership: boolean;
}

declare class GTLRDriveQuery_PermissionsDelete extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_PermissionsDelete; // inherited from NSObject

	static new(): GTLRDriveQuery_PermissionsDelete; // inherited from NSObject

	static queryWithFileIdPermissionId(fileId: string, permissionId: string): GTLRDriveQuery_PermissionsDelete;

	fileId: string;

	permissionId: string;

	supportsTeamDrives: boolean;
}

declare class GTLRDriveQuery_PermissionsGet extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_PermissionsGet; // inherited from NSObject

	static new(): GTLRDriveQuery_PermissionsGet; // inherited from NSObject

	static queryWithFileIdPermissionId(fileId: string, permissionId: string): GTLRDriveQuery_PermissionsGet;

	fileId: string;

	permissionId: string;

	supportsTeamDrives: boolean;
}

declare class GTLRDriveQuery_PermissionsList extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_PermissionsList; // inherited from NSObject

	static new(): GTLRDriveQuery_PermissionsList; // inherited from NSObject

	static queryWithFileId(fileId: string): GTLRDriveQuery_PermissionsList;

	fileId: string;

	pageSize: number;

	pageToken: string;

	supportsTeamDrives: boolean;
}

declare class GTLRDriveQuery_PermissionsUpdate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_PermissionsUpdate; // inherited from NSObject

	static new(): GTLRDriveQuery_PermissionsUpdate; // inherited from NSObject

	static queryWithObjectFileIdPermissionId(object: GTLRDrive_Permission, fileId: string, permissionId: string): GTLRDriveQuery_PermissionsUpdate;

	fileId: string;

	permissionId: string;

	removeExpiration: boolean;

	supportsTeamDrives: boolean;

	transferOwnership: boolean;
}

declare class GTLRDriveQuery_RepliesCreate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RepliesCreate; // inherited from NSObject

	static new(): GTLRDriveQuery_RepliesCreate; // inherited from NSObject

	static queryWithObjectFileIdCommentId(object: GTLRDrive_Reply, fileId: string, commentId: string): GTLRDriveQuery_RepliesCreate;

	commentId: string;

	fileId: string;
}

declare class GTLRDriveQuery_RepliesDelete extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RepliesDelete; // inherited from NSObject

	static new(): GTLRDriveQuery_RepliesDelete; // inherited from NSObject

	static queryWithFileIdCommentIdReplyId(fileId: string, commentId: string, replyId: string): GTLRDriveQuery_RepliesDelete;

	commentId: string;

	fileId: string;

	replyId: string;
}

declare class GTLRDriveQuery_RepliesGet extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RepliesGet; // inherited from NSObject

	static new(): GTLRDriveQuery_RepliesGet; // inherited from NSObject

	static queryWithFileIdCommentIdReplyId(fileId: string, commentId: string, replyId: string): GTLRDriveQuery_RepliesGet;

	commentId: string;

	fileId: string;

	includeDeleted: boolean;

	replyId: string;
}

declare class GTLRDriveQuery_RepliesList extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RepliesList; // inherited from NSObject

	static new(): GTLRDriveQuery_RepliesList; // inherited from NSObject

	static queryWithFileIdCommentId(fileId: string, commentId: string): GTLRDriveQuery_RepliesList;

	commentId: string;

	fileId: string;

	includeDeleted: boolean;

	pageSize: number;

	pageToken: string;
}

declare class GTLRDriveQuery_RepliesUpdate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RepliesUpdate; // inherited from NSObject

	static new(): GTLRDriveQuery_RepliesUpdate; // inherited from NSObject

	static queryWithObjectFileIdCommentIdReplyId(object: GTLRDrive_Reply, fileId: string, commentId: string, replyId: string): GTLRDriveQuery_RepliesUpdate;

	commentId: string;

	fileId: string;

	replyId: string;
}

declare class GTLRDriveQuery_RevisionsDelete extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RevisionsDelete; // inherited from NSObject

	static new(): GTLRDriveQuery_RevisionsDelete; // inherited from NSObject

	static queryWithFileIdRevisionId(fileId: string, revisionId: string): GTLRDriveQuery_RevisionsDelete;

	fileId: string;

	revisionId: string;
}

declare class GTLRDriveQuery_RevisionsGet extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RevisionsGet; // inherited from NSObject

	static new(): GTLRDriveQuery_RevisionsGet; // inherited from NSObject

	static queryForMediaWithFileIdRevisionId(fileId: string, revisionId: string): GTLRDriveQuery_RevisionsGet;

	static queryWithFileIdRevisionId(fileId: string, revisionId: string): GTLRDriveQuery_RevisionsGet;

	acknowledgeAbuse: boolean;

	fileId: string;

	revisionId: string;
}

declare class GTLRDriveQuery_RevisionsList extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RevisionsList; // inherited from NSObject

	static new(): GTLRDriveQuery_RevisionsList; // inherited from NSObject

	static queryWithFileId(fileId: string): GTLRDriveQuery_RevisionsList;

	fileId: string;

	pageSize: number;

	pageToken: string;
}

declare class GTLRDriveQuery_RevisionsUpdate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_RevisionsUpdate; // inherited from NSObject

	static new(): GTLRDriveQuery_RevisionsUpdate; // inherited from NSObject

	static queryWithObjectFileIdRevisionId(object: GTLRDrive_Revision, fileId: string, revisionId: string): GTLRDriveQuery_RevisionsUpdate;

	fileId: string;

	revisionId: string;
}

declare class GTLRDriveQuery_TeamdrivesCreate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_TeamdrivesCreate; // inherited from NSObject

	static new(): GTLRDriveQuery_TeamdrivesCreate; // inherited from NSObject

	static queryWithObjectRequestId(object: GTLRDrive_TeamDrive, requestId: string): GTLRDriveQuery_TeamdrivesCreate;

	requestId: string;
}

declare class GTLRDriveQuery_TeamdrivesDelete extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_TeamdrivesDelete; // inherited from NSObject

	static new(): GTLRDriveQuery_TeamdrivesDelete; // inherited from NSObject

	static queryWithTeamDriveId(teamDriveId: string): GTLRDriveQuery_TeamdrivesDelete;

	teamDriveId: string;
}

declare class GTLRDriveQuery_TeamdrivesGet extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_TeamdrivesGet; // inherited from NSObject

	static new(): GTLRDriveQuery_TeamdrivesGet; // inherited from NSObject

	static queryWithTeamDriveId(teamDriveId: string): GTLRDriveQuery_TeamdrivesGet;

	teamDriveId: string;
}

declare class GTLRDriveQuery_TeamdrivesList extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_TeamdrivesList; // inherited from NSObject

	static new(): GTLRDriveQuery_TeamdrivesList; // inherited from NSObject

	static query(): GTLRDriveQuery_TeamdrivesList;

	pageSize: number;

	pageToken: string;
}

declare class GTLRDriveQuery_TeamdrivesUpdate extends GTLRDriveQuery {

	static alloc(): GTLRDriveQuery_TeamdrivesUpdate; // inherited from NSObject

	static new(): GTLRDriveQuery_TeamdrivesUpdate; // inherited from NSObject

	static queryWithObjectTeamDriveId(object: GTLRDrive_TeamDrive, teamDriveId: string): GTLRDriveQuery_TeamdrivesUpdate;

	teamDriveId: string;
}

declare class GTLRDriveService extends GTLRService {

	static alloc(): GTLRDriveService; // inherited from NSObject

	static mockServiceWithFakedObjectFakedError(object: any, error: NSError): GTLRDriveService; // inherited from GTLRService

	static new(): GTLRDriveService; // inherited from NSObject
}

declare class GTLRDrive_About extends GTLRObject {

	static alloc(): GTLRDrive_About; // inherited from NSObject

	static new(): GTLRDrive_About; // inherited from NSObject

	static object(): GTLRDrive_About; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_About; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_About; // inherited from GTLRObject

	appInstalled: number;

	exportFormats: GTLRDrive_About_ExportFormats;

	folderColorPalette: NSArray<string>;

	importFormats: GTLRDrive_About_ImportFormats;

	kind: string;

	maxImportSizes: GTLRDrive_About_MaxImportSizes;

	maxUploadSize: number;

	storageQuota: GTLRDrive_About_StorageQuota;

	teamDriveThemes: NSArray<GTLRDrive_About_TeamDriveThemes_Item>;

	user: GTLRDrive_User;
}

declare class GTLRDrive_About_ExportFormats extends GTLRObject {

	static alloc(): GTLRDrive_About_ExportFormats; // inherited from NSObject

	static new(): GTLRDrive_About_ExportFormats; // inherited from NSObject

	static object(): GTLRDrive_About_ExportFormats; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_About_ExportFormats; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_About_ExportFormats; // inherited from GTLRObject
}

declare class GTLRDrive_About_ImportFormats extends GTLRObject {

	static alloc(): GTLRDrive_About_ImportFormats; // inherited from NSObject

	static new(): GTLRDrive_About_ImportFormats; // inherited from NSObject

	static object(): GTLRDrive_About_ImportFormats; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_About_ImportFormats; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_About_ImportFormats; // inherited from GTLRObject
}

declare class GTLRDrive_About_MaxImportSizes extends GTLRObject {

	static alloc(): GTLRDrive_About_MaxImportSizes; // inherited from NSObject

	static new(): GTLRDrive_About_MaxImportSizes; // inherited from NSObject

	static object(): GTLRDrive_About_MaxImportSizes; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_About_MaxImportSizes; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_About_MaxImportSizes; // inherited from GTLRObject
}

declare class GTLRDrive_About_StorageQuota extends GTLRObject {

	static alloc(): GTLRDrive_About_StorageQuota; // inherited from NSObject

	static new(): GTLRDrive_About_StorageQuota; // inherited from NSObject

	static object(): GTLRDrive_About_StorageQuota; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_About_StorageQuota; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_About_StorageQuota; // inherited from GTLRObject

	limit: number;

	usage: number;

	usageInDrive: number;

	usageInDriveTrash: number;
}

declare class GTLRDrive_About_TeamDriveThemes_Item extends GTLRObject {

	static alloc(): GTLRDrive_About_TeamDriveThemes_Item; // inherited from NSObject

	static new(): GTLRDrive_About_TeamDriveThemes_Item; // inherited from NSObject

	static object(): GTLRDrive_About_TeamDriveThemes_Item; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_About_TeamDriveThemes_Item; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_About_TeamDriveThemes_Item; // inherited from GTLRObject

	backgroundImageLink: string;

	colorRgb: string;

	identifier: string;
}

declare class GTLRDrive_Change extends GTLRObject {

	static alloc(): GTLRDrive_Change; // inherited from NSObject

	static new(): GTLRDrive_Change; // inherited from NSObject

	static object(): GTLRDrive_Change; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Change; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Change; // inherited from GTLRObject

	file: GTLRDrive_File;

	fileId: string;

	kind: string;

	removed: number;

	teamDrive: GTLRDrive_TeamDrive;

	teamDriveId: string;

	time: GTLRDateTime;

	type: string;
}

declare class GTLRDrive_ChangeList extends GTLRCollectionObject {

	static alloc(): GTLRDrive_ChangeList; // inherited from NSObject

	static new(): GTLRDrive_ChangeList; // inherited from NSObject

	static object(): GTLRDrive_ChangeList; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_ChangeList; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_ChangeList; // inherited from GTLRObject

	changes: NSArray<GTLRDrive_Change>;

	kind: string;

	newStartPageToken: string;

	nextPageToken: string;
}

declare class GTLRDrive_Channel extends GTLRObject {

	static alloc(): GTLRDrive_Channel; // inherited from NSObject

	static new(): GTLRDrive_Channel; // inherited from NSObject

	static object(): GTLRDrive_Channel; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Channel; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Channel; // inherited from GTLRObject

	address: string;

	expiration: number;

	identifier: string;

	kind: string;

	params: GTLRDrive_Channel_Params;

	payload: number;

	resourceId: string;

	resourceUri: string;

	token: string;

	type: string;
}

declare class GTLRDrive_Channel_Params extends GTLRObject {

	static alloc(): GTLRDrive_Channel_Params; // inherited from NSObject

	static new(): GTLRDrive_Channel_Params; // inherited from NSObject

	static object(): GTLRDrive_Channel_Params; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Channel_Params; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Channel_Params; // inherited from GTLRObject
}

declare class GTLRDrive_Comment extends GTLRObject {

	static alloc(): GTLRDrive_Comment; // inherited from NSObject

	static new(): GTLRDrive_Comment; // inherited from NSObject

	static object(): GTLRDrive_Comment; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Comment; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Comment; // inherited from GTLRObject

	anchor: string;

	author: GTLRDrive_User;

	content: string;

	createdTime: GTLRDateTime;

	deleted: number;

	htmlContent: string;

	identifier: string;

	kind: string;

	modifiedTime: GTLRDateTime;

	quotedFileContent: GTLRDrive_Comment_QuotedFileContent;

	replies: NSArray<GTLRDrive_Reply>;

	resolved: number;
}

declare class GTLRDrive_CommentList extends GTLRCollectionObject {

	static alloc(): GTLRDrive_CommentList; // inherited from NSObject

	static new(): GTLRDrive_CommentList; // inherited from NSObject

	static object(): GTLRDrive_CommentList; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_CommentList; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_CommentList; // inherited from GTLRObject

	comments: NSArray<GTLRDrive_Comment>;

	kind: string;

	nextPageToken: string;
}

declare class GTLRDrive_Comment_QuotedFileContent extends GTLRObject {

	static alloc(): GTLRDrive_Comment_QuotedFileContent; // inherited from NSObject

	static new(): GTLRDrive_Comment_QuotedFileContent; // inherited from NSObject

	static object(): GTLRDrive_Comment_QuotedFileContent; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Comment_QuotedFileContent; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Comment_QuotedFileContent; // inherited from GTLRObject

	mimeType: string;

	value: string;
}

declare class GTLRDrive_File extends GTLRObject {

	static alloc(): GTLRDrive_File; // inherited from NSObject

	static new(): GTLRDrive_File; // inherited from NSObject

	static object(): GTLRDrive_File; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File; // inherited from GTLRObject

	appProperties: GTLRDrive_File_AppProperties;

	capabilities: GTLRDrive_File_Capabilities;

	contentHints: GTLRDrive_File_ContentHints;

	createdTime: GTLRDateTime;

	descriptionProperty: string;

	explicitlyTrashed: number;

	fileExtension: string;

	folderColorRgb: string;

	fullFileExtension: string;

	hasAugmentedPermissions: number;

	hasThumbnail: number;

	headRevisionId: string;

	iconLink: string;

	identifier: string;

	imageMediaMetadata: GTLRDrive_File_ImageMediaMetadata;

	isAppAuthorized: number;

	kind: string;

	lastModifyingUser: GTLRDrive_User;

	md5Checksum: string;

	mimeType: string;

	modifiedByMe: number;

	modifiedByMeTime: GTLRDateTime;

	modifiedTime: GTLRDateTime;

	name: string;

	originalFilename: string;

	ownedByMe: number;

	owners: NSArray<GTLRDrive_User>;

	parents: NSArray<string>;

	permissions: NSArray<GTLRDrive_Permission>;

	properties: GTLRDrive_File_Properties;

	quotaBytesUsed: number;

	shared: number;

	sharedWithMeTime: GTLRDateTime;

	sharingUser: GTLRDrive_User;

	size: number;

	spaces: NSArray<string>;

	starred: number;

	teamDriveId: string;

	thumbnailLink: string;

	thumbnailVersion: number;

	trashed: number;

	trashedTime: GTLRDateTime;

	trashingUser: GTLRDrive_User;

	version: number;

	videoMediaMetadata: GTLRDrive_File_VideoMediaMetadata;

	viewedByMe: number;

	viewedByMeTime: GTLRDateTime;

	viewersCanCopyContent: number;

	webContentLink: string;

	webViewLink: string;

	writersCanShare: number;
}

declare class GTLRDrive_FileList extends GTLRCollectionObject {

	static alloc(): GTLRDrive_FileList; // inherited from NSObject

	static new(): GTLRDrive_FileList; // inherited from NSObject

	static object(): GTLRDrive_FileList; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_FileList; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_FileList; // inherited from GTLRObject

	files: NSArray<GTLRDrive_File>;

	incompleteSearch: number;

	kind: string;

	nextPageToken: string;
}

declare class GTLRDrive_File_AppProperties extends GTLRObject {

	static alloc(): GTLRDrive_File_AppProperties; // inherited from NSObject

	static new(): GTLRDrive_File_AppProperties; // inherited from NSObject

	static object(): GTLRDrive_File_AppProperties; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File_AppProperties; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File_AppProperties; // inherited from GTLRObject
}

declare class GTLRDrive_File_Capabilities extends GTLRObject {

	static alloc(): GTLRDrive_File_Capabilities; // inherited from NSObject

	static new(): GTLRDrive_File_Capabilities; // inherited from NSObject

	static object(): GTLRDrive_File_Capabilities; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File_Capabilities; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File_Capabilities; // inherited from GTLRObject

	canAddChildren: number;

	canChangeViewersCanCopyContent: number;

	canComment: number;

	canCopy: number;

	canDelete: number;

	canDownload: number;

	canEdit: number;

	canListChildren: number;

	canMoveItemIntoTeamDrive: number;

	canMoveTeamDriveItem: number;

	canReadRevisions: number;

	canReadTeamDrive: number;

	canRemoveChildren: number;

	canRename: number;

	canShare: number;

	canTrash: number;

	canUntrash: number;
}

declare class GTLRDrive_File_ContentHints extends GTLRObject {

	static alloc(): GTLRDrive_File_ContentHints; // inherited from NSObject

	static new(): GTLRDrive_File_ContentHints; // inherited from NSObject

	static object(): GTLRDrive_File_ContentHints; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File_ContentHints; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File_ContentHints; // inherited from GTLRObject

	indexableText: string;

	thumbnail: GTLRDrive_File_ContentHints_Thumbnail;
}

declare class GTLRDrive_File_ContentHints_Thumbnail extends GTLRObject {

	static alloc(): GTLRDrive_File_ContentHints_Thumbnail; // inherited from NSObject

	static new(): GTLRDrive_File_ContentHints_Thumbnail; // inherited from NSObject

	static object(): GTLRDrive_File_ContentHints_Thumbnail; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File_ContentHints_Thumbnail; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File_ContentHints_Thumbnail; // inherited from GTLRObject

	image: string;

	mimeType: string;
}

declare class GTLRDrive_File_ImageMediaMetadata extends GTLRObject {

	static alloc(): GTLRDrive_File_ImageMediaMetadata; // inherited from NSObject

	static new(): GTLRDrive_File_ImageMediaMetadata; // inherited from NSObject

	static object(): GTLRDrive_File_ImageMediaMetadata; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File_ImageMediaMetadata; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File_ImageMediaMetadata; // inherited from GTLRObject

	aperture: number;

	cameraMake: string;

	cameraModel: string;

	colorSpace: string;

	exposureBias: number;

	exposureMode: string;

	exposureTime: number;

	flashUsed: number;

	focalLength: number;

	height: number;

	isoSpeed: number;

	lens: string;

	location: GTLRDrive_File_ImageMediaMetadata_Location;

	maxApertureValue: number;

	meteringMode: string;

	rotation: number;

	sensor: string;

	subjectDistance: number;

	time: string;

	whiteBalance: string;

	width: number;
}

declare class GTLRDrive_File_ImageMediaMetadata_Location extends GTLRObject {

	static alloc(): GTLRDrive_File_ImageMediaMetadata_Location; // inherited from NSObject

	static new(): GTLRDrive_File_ImageMediaMetadata_Location; // inherited from NSObject

	static object(): GTLRDrive_File_ImageMediaMetadata_Location; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File_ImageMediaMetadata_Location; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File_ImageMediaMetadata_Location; // inherited from GTLRObject

	altitude: number;

	latitude: number;

	longitude: number;
}

declare class GTLRDrive_File_Properties extends GTLRObject {

	static alloc(): GTLRDrive_File_Properties; // inherited from NSObject

	static new(): GTLRDrive_File_Properties; // inherited from NSObject

	static object(): GTLRDrive_File_Properties; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File_Properties; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File_Properties; // inherited from GTLRObject
}

declare class GTLRDrive_File_VideoMediaMetadata extends GTLRObject {

	static alloc(): GTLRDrive_File_VideoMediaMetadata; // inherited from NSObject

	static new(): GTLRDrive_File_VideoMediaMetadata; // inherited from NSObject

	static object(): GTLRDrive_File_VideoMediaMetadata; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_File_VideoMediaMetadata; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_File_VideoMediaMetadata; // inherited from GTLRObject

	durationMillis: number;

	height: number;

	width: number;
}

declare class GTLRDrive_GeneratedIds extends GTLRObject {

	static alloc(): GTLRDrive_GeneratedIds; // inherited from NSObject

	static new(): GTLRDrive_GeneratedIds; // inherited from NSObject

	static object(): GTLRDrive_GeneratedIds; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_GeneratedIds; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_GeneratedIds; // inherited from GTLRObject

	ids: NSArray<string>;

	kind: string;

	space: string;
}

declare class GTLRDrive_Permission extends GTLRObject {

	static alloc(): GTLRDrive_Permission; // inherited from NSObject

	static new(): GTLRDrive_Permission; // inherited from NSObject

	static object(): GTLRDrive_Permission; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Permission; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Permission; // inherited from GTLRObject

	allowFileDiscovery: number;

	deleted: number;

	displayName: string;

	domain: string;

	emailAddress: string;

	expirationTime: GTLRDateTime;

	identifier: string;

	kind: string;

	photoLink: string;

	role: string;

	teamDrivePermissionDetails: NSArray<GTLRDrive_Permission_TeamDrivePermissionDetails_Item>;

	type: string;
}

declare class GTLRDrive_PermissionList extends GTLRCollectionObject {

	static alloc(): GTLRDrive_PermissionList; // inherited from NSObject

	static new(): GTLRDrive_PermissionList; // inherited from NSObject

	static object(): GTLRDrive_PermissionList; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_PermissionList; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_PermissionList; // inherited from GTLRObject

	kind: string;

	nextPageToken: string;

	permissions: NSArray<GTLRDrive_Permission>;
}

declare class GTLRDrive_Permission_TeamDrivePermissionDetails_Item extends GTLRObject {

	static alloc(): GTLRDrive_Permission_TeamDrivePermissionDetails_Item; // inherited from NSObject

	static new(): GTLRDrive_Permission_TeamDrivePermissionDetails_Item; // inherited from NSObject

	static object(): GTLRDrive_Permission_TeamDrivePermissionDetails_Item; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Permission_TeamDrivePermissionDetails_Item; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Permission_TeamDrivePermissionDetails_Item; // inherited from GTLRObject

	inherited: number;

	inheritedFrom: string;

	role: string;

	teamDrivePermissionType: string;
}

declare class GTLRDrive_Reply extends GTLRObject {

	static alloc(): GTLRDrive_Reply; // inherited from NSObject

	static new(): GTLRDrive_Reply; // inherited from NSObject

	static object(): GTLRDrive_Reply; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Reply; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Reply; // inherited from GTLRObject

	action: string;

	author: GTLRDrive_User;

	content: string;

	createdTime: GTLRDateTime;

	deleted: number;

	htmlContent: string;

	identifier: string;

	kind: string;

	modifiedTime: GTLRDateTime;
}

declare class GTLRDrive_ReplyList extends GTLRCollectionObject {

	static alloc(): GTLRDrive_ReplyList; // inherited from NSObject

	static new(): GTLRDrive_ReplyList; // inherited from NSObject

	static object(): GTLRDrive_ReplyList; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_ReplyList; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_ReplyList; // inherited from GTLRObject

	kind: string;

	nextPageToken: string;

	replies: NSArray<GTLRDrive_Reply>;
}

declare class GTLRDrive_Revision extends GTLRObject {

	static alloc(): GTLRDrive_Revision; // inherited from NSObject

	static new(): GTLRDrive_Revision; // inherited from NSObject

	static object(): GTLRDrive_Revision; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_Revision; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_Revision; // inherited from GTLRObject

	identifier: string;

	keepForever: number;

	kind: string;

	lastModifyingUser: GTLRDrive_User;

	md5Checksum: string;

	mimeType: string;

	modifiedTime: GTLRDateTime;

	originalFilename: string;

	publishAuto: number;

	published: number;

	publishedOutsideDomain: number;

	size: number;
}

declare class GTLRDrive_RevisionList extends GTLRCollectionObject {

	static alloc(): GTLRDrive_RevisionList; // inherited from NSObject

	static new(): GTLRDrive_RevisionList; // inherited from NSObject

	static object(): GTLRDrive_RevisionList; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_RevisionList; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_RevisionList; // inherited from GTLRObject

	kind: string;

	nextPageToken: string;

	revisions: NSArray<GTLRDrive_Revision>;
}

declare class GTLRDrive_StartPageToken extends GTLRObject {

	static alloc(): GTLRDrive_StartPageToken; // inherited from NSObject

	static new(): GTLRDrive_StartPageToken; // inherited from NSObject

	static object(): GTLRDrive_StartPageToken; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_StartPageToken; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_StartPageToken; // inherited from GTLRObject

	kind: string;

	startPageToken: string;
}

declare class GTLRDrive_TeamDrive extends GTLRObject {

	static alloc(): GTLRDrive_TeamDrive; // inherited from NSObject

	static new(): GTLRDrive_TeamDrive; // inherited from NSObject

	static object(): GTLRDrive_TeamDrive; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_TeamDrive; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_TeamDrive; // inherited from GTLRObject

	backgroundImageFile: GTLRDrive_TeamDrive_BackgroundImageFile;

	backgroundImageLink: string;

	capabilities: GTLRDrive_TeamDrive_Capabilities;

	colorRgb: string;

	identifier: string;

	kind: string;

	name: string;

	themeId: string;
}

declare class GTLRDrive_TeamDriveList extends GTLRCollectionObject {

	static alloc(): GTLRDrive_TeamDriveList; // inherited from NSObject

	static new(): GTLRDrive_TeamDriveList; // inherited from NSObject

	static object(): GTLRDrive_TeamDriveList; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_TeamDriveList; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_TeamDriveList; // inherited from GTLRObject

	kind: string;

	nextPageToken: string;

	teamDrives: NSArray<GTLRDrive_TeamDrive>;
}

declare class GTLRDrive_TeamDrive_BackgroundImageFile extends GTLRObject {

	static alloc(): GTLRDrive_TeamDrive_BackgroundImageFile; // inherited from NSObject

	static new(): GTLRDrive_TeamDrive_BackgroundImageFile; // inherited from NSObject

	static object(): GTLRDrive_TeamDrive_BackgroundImageFile; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_TeamDrive_BackgroundImageFile; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_TeamDrive_BackgroundImageFile; // inherited from GTLRObject

	identifier: string;

	width: number;

	xCoordinate: number;

	yCoordinate: number;
}

declare class GTLRDrive_TeamDrive_Capabilities extends GTLRObject {

	static alloc(): GTLRDrive_TeamDrive_Capabilities; // inherited from NSObject

	static new(): GTLRDrive_TeamDrive_Capabilities; // inherited from NSObject

	static object(): GTLRDrive_TeamDrive_Capabilities; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_TeamDrive_Capabilities; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_TeamDrive_Capabilities; // inherited from GTLRObject

	canAddChildren: number;

	canChangeTeamDriveBackground: number;

	canComment: number;

	canCopy: number;

	canDeleteTeamDrive: number;

	canDownload: number;

	canEdit: number;

	canListChildren: number;

	canManageMembers: number;

	canReadRevisions: number;

	canRemoveChildren: number;

	canRename: number;

	canRenameTeamDrive: number;

	canShare: number;
}

declare class GTLRDrive_User extends GTLRObject {

	static alloc(): GTLRDrive_User; // inherited from NSObject

	static new(): GTLRDrive_User; // inherited from NSObject

	static object(): GTLRDrive_User; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRDrive_User; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRDrive_User; // inherited from GTLRObject

	displayName: string;

	emailAddress: string;

	kind: string;

	me: number;

	permissionId: string;

	photoLink: string;
}

declare class GTLRDuration extends NSObject implements NSCopying {

	static alloc(): GTLRDuration; // inherited from NSObject

	static durationWithJSONString(jsonString: string): GTLRDuration;

	static durationWithSecondsNanos(seconds: number, nanos: number): GTLRDuration;

	static durationWithTimeInterval(timeInterval: number): GTLRDuration;

	static new(): GTLRDuration; // inherited from NSObject

	readonly jsonString: string;

	readonly nanos: number;

	readonly seconds: number;

	readonly timeInterval: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare function GTLREncodeBase64(data: NSData): string;

declare function GTLREncodeWebSafeBase64(data: NSData): string;

declare class GTLRErrorObject extends GTLRObject {

	static alloc(): GTLRErrorObject; // inherited from NSObject

	static new(): GTLRErrorObject; // inherited from NSObject

	static object(): GTLRErrorObject; // inherited from GTLRObject

	static objectWithFoundationError(error: NSError): GTLRErrorObject;

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRErrorObject; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRErrorObject; // inherited from GTLRObject

	static underlyingObjectForError(foundationError: NSError): GTLRErrorObject;

	code: number;

	details: NSArray<GTLRErrorObjectDetail>;

	errors: NSArray<GTLRErrorObjectErrorItem>;

	readonly foundationError: NSError;

	message: string;

	status: string;
}

declare class GTLRErrorObjectDetail extends GTLRObject {

	static alloc(): GTLRErrorObjectDetail; // inherited from NSObject

	static new(): GTLRErrorObjectDetail; // inherited from NSObject

	static object(): GTLRErrorObjectDetail; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRErrorObjectDetail; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRErrorObjectDetail; // inherited from GTLRObject

	detail: string;

	type: string;
}

declare class GTLRErrorObjectErrorItem extends GTLRObject {

	static alloc(): GTLRErrorObjectErrorItem; // inherited from NSObject

	static new(): GTLRErrorObjectErrorItem; // inherited from NSObject

	static object(): GTLRErrorObjectErrorItem; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRErrorObjectErrorItem; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRErrorObjectErrorItem; // inherited from GTLRObject

	domain: string;

	location: string;

	message: string;

	reason: string;
}

declare function GTLRFrameworkVersion(major: interop.Pointer | interop.Reference<number>, minor: interop.Pointer | interop.Reference<number>, release: interop.Pointer | interop.Reference<number>): void;

declare function GTLRFrameworkVersionString(): string;

declare class GTLRGmailQuery extends GTLRQuery {

	static alloc(): GTLRGmailQuery; // inherited from NSObject

	static new(): GTLRGmailQuery; // inherited from NSObject

	fields: string;
}

declare class GTLRGmailQuery_UsersDraftsCreate extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersDraftsCreate; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersDraftsCreate; // inherited from NSObject

	static queryWithObjectUserIdUploadParameters(object: GTLRGmail_Draft, userId: string, uploadParameters: GTLRUploadParameters): GTLRGmailQuery_UsersDraftsCreate;

	userId: string;
}

declare class GTLRGmailQuery_UsersDraftsDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersDraftsDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersDraftsDelete; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersDraftsDelete;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersDraftsGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersDraftsGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersDraftsGet; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersDraftsGet;

	format: string;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersDraftsList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersDraftsList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersDraftsList; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersDraftsList;

	includeSpamTrash: boolean;

	maxResults: number;

	pageToken: string;

	q: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersDraftsSend extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersDraftsSend; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersDraftsSend; // inherited from NSObject

	static queryWithObjectUserIdUploadParameters(object: GTLRGmail_Draft, userId: string, uploadParameters: GTLRUploadParameters): GTLRGmailQuery_UsersDraftsSend;

	userId: string;
}

declare class GTLRGmailQuery_UsersDraftsUpdate extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersDraftsUpdate; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersDraftsUpdate; // inherited from NSObject

	static queryWithObjectUserIdIdentifierUploadParameters(object: GTLRGmail_Draft, userId: string, identifier: string, uploadParameters: GTLRUploadParameters): GTLRGmailQuery_UsersDraftsUpdate;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersGetProfile extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersGetProfile; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersGetProfile; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersGetProfile;

	userId: string;
}

declare class GTLRGmailQuery_UsersHistoryList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersHistoryList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersHistoryList; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersHistoryList;

	historyTypes: NSArray<string>;

	labelId: string;

	maxResults: number;

	pageToken: string;

	startHistoryId: number;

	userId: string;
}

declare class GTLRGmailQuery_UsersLabelsCreate extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersLabelsCreate; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersLabelsCreate; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_Label, userId: string): GTLRGmailQuery_UsersLabelsCreate;

	userId: string;
}

declare class GTLRGmailQuery_UsersLabelsDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersLabelsDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersLabelsDelete; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersLabelsDelete;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersLabelsGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersLabelsGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersLabelsGet; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersLabelsGet;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersLabelsList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersLabelsList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersLabelsList; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersLabelsList;

	userId: string;
}

declare class GTLRGmailQuery_UsersLabelsPatch extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersLabelsPatch; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersLabelsPatch; // inherited from NSObject

	static queryWithObjectUserIdIdentifier(object: GTLRGmail_Label, userId: string, identifier: string): GTLRGmailQuery_UsersLabelsPatch;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersLabelsUpdate extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersLabelsUpdate; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersLabelsUpdate; // inherited from NSObject

	static queryWithObjectUserIdIdentifier(object: GTLRGmail_Label, userId: string, identifier: string): GTLRGmailQuery_UsersLabelsUpdate;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesAttachmentsGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesAttachmentsGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesAttachmentsGet; // inherited from NSObject

	static queryWithUserIdMessageIdIdentifier(userId: string, messageId: string, identifier: string): GTLRGmailQuery_UsersMessagesAttachmentsGet;

	identifier: string;

	messageId: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesBatchDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesBatchDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesBatchDelete; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_BatchDeleteMessagesRequest, userId: string): GTLRGmailQuery_UsersMessagesBatchDelete;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesBatchModify extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesBatchModify; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesBatchModify; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_BatchModifyMessagesRequest, userId: string): GTLRGmailQuery_UsersMessagesBatchModify;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesDelete; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersMessagesDelete;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesGet; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersMessagesGet;

	format: string;

	identifier: string;

	metadataHeaders: NSArray<string>;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesImport extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesImport; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesImport; // inherited from NSObject

	static queryWithObjectUserIdUploadParameters(object: GTLRGmail_Message, userId: string, uploadParameters: GTLRUploadParameters): GTLRGmailQuery_UsersMessagesImport;

	deleted: boolean;

	internalDateSource: string;

	neverMarkSpam: boolean;

	processForCalendar: boolean;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesInsert extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesInsert; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesInsert; // inherited from NSObject

	static queryWithObjectUserIdUploadParameters(object: GTLRGmail_Message, userId: string, uploadParameters: GTLRUploadParameters): GTLRGmailQuery_UsersMessagesInsert;

	deleted: boolean;

	internalDateSource: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesList; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersMessagesList;

	includeSpamTrash: boolean;

	labelIds: NSArray<string>;

	maxResults: number;

	pageToken: string;

	q: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesModify extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesModify; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesModify; // inherited from NSObject

	static queryWithObjectUserIdIdentifier(object: GTLRGmail_ModifyMessageRequest, userId: string, identifier: string): GTLRGmailQuery_UsersMessagesModify;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesSend extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesSend; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesSend; // inherited from NSObject

	static queryWithObjectUserIdUploadParameters(object: GTLRGmail_Message, userId: string, uploadParameters: GTLRUploadParameters): GTLRGmailQuery_UsersMessagesSend;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesTrash extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesTrash; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesTrash; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersMessagesTrash;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersMessagesUntrash extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersMessagesUntrash; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersMessagesUntrash; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersMessagesUntrash;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsFiltersCreate extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsFiltersCreate; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsFiltersCreate; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_Filter, userId: string): GTLRGmailQuery_UsersSettingsFiltersCreate;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsFiltersDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsFiltersDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsFiltersDelete; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersSettingsFiltersDelete;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsFiltersGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsFiltersGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsFiltersGet; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersSettingsFiltersGet;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsFiltersList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsFiltersList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsFiltersList; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersSettingsFiltersList;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsForwardingAddressesCreate extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsForwardingAddressesCreate; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsForwardingAddressesCreate; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_ForwardingAddress, userId: string): GTLRGmailQuery_UsersSettingsForwardingAddressesCreate;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsForwardingAddressesDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsForwardingAddressesDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsForwardingAddressesDelete; // inherited from NSObject

	static queryWithUserIdForwardingEmail(userId: string, forwardingEmail: string): GTLRGmailQuery_UsersSettingsForwardingAddressesDelete;

	forwardingEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsForwardingAddressesGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsForwardingAddressesGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsForwardingAddressesGet; // inherited from NSObject

	static queryWithUserIdForwardingEmail(userId: string, forwardingEmail: string): GTLRGmailQuery_UsersSettingsForwardingAddressesGet;

	forwardingEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsForwardingAddressesList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsForwardingAddressesList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsForwardingAddressesList; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersSettingsForwardingAddressesList;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsGetAutoForwarding extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsGetAutoForwarding; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsGetAutoForwarding; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersSettingsGetAutoForwarding;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsGetImap extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsGetImap; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsGetImap; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersSettingsGetImap;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsGetPop extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsGetPop; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsGetPop; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersSettingsGetPop;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsGetVacation extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsGetVacation; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsGetVacation; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersSettingsGetVacation;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsCreate extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsCreate; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsCreate; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_SendAs, userId: string): GTLRGmailQuery_UsersSettingsSendAsCreate;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsDelete; // inherited from NSObject

	static queryWithUserIdSendAsEmail(userId: string, sendAsEmail: string): GTLRGmailQuery_UsersSettingsSendAsDelete;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsGet; // inherited from NSObject

	static queryWithUserIdSendAsEmail(userId: string, sendAsEmail: string): GTLRGmailQuery_UsersSettingsSendAsGet;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsList; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersSettingsSendAsList;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsPatch extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsPatch; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsPatch; // inherited from NSObject

	static queryWithObjectUserIdSendAsEmail(object: GTLRGmail_SendAs, userId: string, sendAsEmail: string): GTLRGmailQuery_UsersSettingsSendAsPatch;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsSmimeInfoDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoDelete; // inherited from NSObject

	static queryWithUserIdSendAsEmailIdentifier(userId: string, sendAsEmail: string, identifier: string): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoDelete;

	identifier: string;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsSmimeInfoGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoGet; // inherited from NSObject

	static queryWithUserIdSendAsEmailIdentifier(userId: string, sendAsEmail: string, identifier: string): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoGet;

	identifier: string;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsSmimeInfoInsert extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoInsert; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoInsert; // inherited from NSObject

	static queryWithObjectUserIdSendAsEmail(object: GTLRGmail_SmimeInfo, userId: string, sendAsEmail: string): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoInsert;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsSmimeInfoList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoList; // inherited from NSObject

	static queryWithUserIdSendAsEmail(userId: string, sendAsEmail: string): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoList;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsSmimeInfoSetDefault extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoSetDefault; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoSetDefault; // inherited from NSObject

	static queryWithUserIdSendAsEmailIdentifier(userId: string, sendAsEmail: string, identifier: string): GTLRGmailQuery_UsersSettingsSendAsSmimeInfoSetDefault;

	identifier: string;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsUpdate extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsUpdate; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsUpdate; // inherited from NSObject

	static queryWithObjectUserIdSendAsEmail(object: GTLRGmail_SendAs, userId: string, sendAsEmail: string): GTLRGmailQuery_UsersSettingsSendAsUpdate;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsSendAsVerify extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsSendAsVerify; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsSendAsVerify; // inherited from NSObject

	static queryWithUserIdSendAsEmail(userId: string, sendAsEmail: string): GTLRGmailQuery_UsersSettingsSendAsVerify;

	sendAsEmail: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsUpdateAutoForwarding extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsUpdateAutoForwarding; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsUpdateAutoForwarding; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_AutoForwarding, userId: string): GTLRGmailQuery_UsersSettingsUpdateAutoForwarding;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsUpdateImap extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsUpdateImap; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsUpdateImap; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_ImapSettings, userId: string): GTLRGmailQuery_UsersSettingsUpdateImap;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsUpdatePop extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsUpdatePop; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsUpdatePop; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_PopSettings, userId: string): GTLRGmailQuery_UsersSettingsUpdatePop;

	userId: string;
}

declare class GTLRGmailQuery_UsersSettingsUpdateVacation extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersSettingsUpdateVacation; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersSettingsUpdateVacation; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_VacationSettings, userId: string): GTLRGmailQuery_UsersSettingsUpdateVacation;

	userId: string;
}

declare class GTLRGmailQuery_UsersStop extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersStop; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersStop; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersStop;

	userId: string;
}

declare class GTLRGmailQuery_UsersThreadsDelete extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersThreadsDelete; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersThreadsDelete; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersThreadsDelete;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersThreadsGet extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersThreadsGet; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersThreadsGet; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersThreadsGet;

	format: string;

	identifier: string;

	metadataHeaders: NSArray<string>;

	userId: string;
}

declare class GTLRGmailQuery_UsersThreadsList extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersThreadsList; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersThreadsList; // inherited from NSObject

	static queryWithUserId(userId: string): GTLRGmailQuery_UsersThreadsList;

	includeSpamTrash: boolean;

	labelIds: NSArray<string>;

	maxResults: number;

	pageToken: string;

	q: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersThreadsModify extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersThreadsModify; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersThreadsModify; // inherited from NSObject

	static queryWithObjectUserIdIdentifier(object: GTLRGmail_ModifyThreadRequest, userId: string, identifier: string): GTLRGmailQuery_UsersThreadsModify;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersThreadsTrash extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersThreadsTrash; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersThreadsTrash; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersThreadsTrash;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersThreadsUntrash extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersThreadsUntrash; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersThreadsUntrash; // inherited from NSObject

	static queryWithUserIdIdentifier(userId: string, identifier: string): GTLRGmailQuery_UsersThreadsUntrash;

	identifier: string;

	userId: string;
}

declare class GTLRGmailQuery_UsersWatch extends GTLRGmailQuery {

	static alloc(): GTLRGmailQuery_UsersWatch; // inherited from NSObject

	static new(): GTLRGmailQuery_UsersWatch; // inherited from NSObject

	static queryWithObjectUserId(object: GTLRGmail_WatchRequest, userId: string): GTLRGmailQuery_UsersWatch;

	userId: string;
}

declare class GTLRGmailService extends GTLRService {

	static alloc(): GTLRGmailService; // inherited from NSObject

	static mockServiceWithFakedObjectFakedError(object: any, error: NSError): GTLRGmailService; // inherited from GTLRService

	static new(): GTLRGmailService; // inherited from NSObject
}

declare class GTLRGmail_AutoForwarding extends GTLRObject {

	static alloc(): GTLRGmail_AutoForwarding; // inherited from NSObject

	static new(): GTLRGmail_AutoForwarding; // inherited from NSObject

	static object(): GTLRGmail_AutoForwarding; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_AutoForwarding; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_AutoForwarding; // inherited from GTLRObject

	disposition: string;

	emailAddress: string;

	enabled: number;
}

declare class GTLRGmail_BatchDeleteMessagesRequest extends GTLRObject {

	static alloc(): GTLRGmail_BatchDeleteMessagesRequest; // inherited from NSObject

	static new(): GTLRGmail_BatchDeleteMessagesRequest; // inherited from NSObject

	static object(): GTLRGmail_BatchDeleteMessagesRequest; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_BatchDeleteMessagesRequest; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_BatchDeleteMessagesRequest; // inherited from GTLRObject

	ids: NSArray<string>;
}

declare class GTLRGmail_BatchModifyMessagesRequest extends GTLRObject {

	static alloc(): GTLRGmail_BatchModifyMessagesRequest; // inherited from NSObject

	static new(): GTLRGmail_BatchModifyMessagesRequest; // inherited from NSObject

	static object(): GTLRGmail_BatchModifyMessagesRequest; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_BatchModifyMessagesRequest; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_BatchModifyMessagesRequest; // inherited from GTLRObject

	addLabelIds: NSArray<string>;

	ids: NSArray<string>;

	removeLabelIds: NSArray<string>;
}

declare class GTLRGmail_Draft extends GTLRObject {

	static alloc(): GTLRGmail_Draft; // inherited from NSObject

	static new(): GTLRGmail_Draft; // inherited from NSObject

	static object(): GTLRGmail_Draft; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_Draft; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_Draft; // inherited from GTLRObject

	identifier: string;

	message: GTLRGmail_Message;
}

declare class GTLRGmail_Filter extends GTLRObject {

	static alloc(): GTLRGmail_Filter; // inherited from NSObject

	static new(): GTLRGmail_Filter; // inherited from NSObject

	static object(): GTLRGmail_Filter; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_Filter; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_Filter; // inherited from GTLRObject

	action: GTLRGmail_FilterAction;

	criteria: GTLRGmail_FilterCriteria;

	identifier: string;
}

declare class GTLRGmail_FilterAction extends GTLRObject {

	static alloc(): GTLRGmail_FilterAction; // inherited from NSObject

	static new(): GTLRGmail_FilterAction; // inherited from NSObject

	static object(): GTLRGmail_FilterAction; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_FilterAction; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_FilterAction; // inherited from GTLRObject

	addLabelIds: NSArray<string>;

	forward: string;

	removeLabelIds: NSArray<string>;
}

declare class GTLRGmail_FilterCriteria extends GTLRObject {

	static alloc(): GTLRGmail_FilterCriteria; // inherited from NSObject

	static new(): GTLRGmail_FilterCriteria; // inherited from NSObject

	static object(): GTLRGmail_FilterCriteria; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_FilterCriteria; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_FilterCriteria; // inherited from GTLRObject

	excludeChats: number;

	from: string;

	hasAttachment: number;

	negatedQuery: string;

	query: string;

	size: number;

	sizeComparison: string;

	subject: string;

	to: string;
}

declare class GTLRGmail_ForwardingAddress extends GTLRObject {

	static alloc(): GTLRGmail_ForwardingAddress; // inherited from NSObject

	static new(): GTLRGmail_ForwardingAddress; // inherited from NSObject

	static object(): GTLRGmail_ForwardingAddress; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ForwardingAddress; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ForwardingAddress; // inherited from GTLRObject

	forwardingEmail: string;

	verificationStatus: string;
}

declare class GTLRGmail_History extends GTLRObject {

	static alloc(): GTLRGmail_History; // inherited from NSObject

	static new(): GTLRGmail_History; // inherited from NSObject

	static object(): GTLRGmail_History; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_History; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_History; // inherited from GTLRObject

	identifier: number;

	labelsAdded: NSArray<GTLRGmail_HistoryLabelAdded>;

	labelsRemoved: NSArray<GTLRGmail_HistoryLabelRemoved>;

	messages: NSArray<GTLRGmail_Message>;

	messagesAdded: NSArray<GTLRGmail_HistoryMessageAdded>;

	messagesDeleted: NSArray<GTLRGmail_HistoryMessageDeleted>;
}

declare class GTLRGmail_HistoryLabelAdded extends GTLRObject {

	static alloc(): GTLRGmail_HistoryLabelAdded; // inherited from NSObject

	static new(): GTLRGmail_HistoryLabelAdded; // inherited from NSObject

	static object(): GTLRGmail_HistoryLabelAdded; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_HistoryLabelAdded; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_HistoryLabelAdded; // inherited from GTLRObject

	labelIds: NSArray<string>;

	message: GTLRGmail_Message;
}

declare class GTLRGmail_HistoryLabelRemoved extends GTLRObject {

	static alloc(): GTLRGmail_HistoryLabelRemoved; // inherited from NSObject

	static new(): GTLRGmail_HistoryLabelRemoved; // inherited from NSObject

	static object(): GTLRGmail_HistoryLabelRemoved; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_HistoryLabelRemoved; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_HistoryLabelRemoved; // inherited from GTLRObject

	labelIds: NSArray<string>;

	message: GTLRGmail_Message;
}

declare class GTLRGmail_HistoryMessageAdded extends GTLRObject {

	static alloc(): GTLRGmail_HistoryMessageAdded; // inherited from NSObject

	static new(): GTLRGmail_HistoryMessageAdded; // inherited from NSObject

	static object(): GTLRGmail_HistoryMessageAdded; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_HistoryMessageAdded; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_HistoryMessageAdded; // inherited from GTLRObject

	message: GTLRGmail_Message;
}

declare class GTLRGmail_HistoryMessageDeleted extends GTLRObject {

	static alloc(): GTLRGmail_HistoryMessageDeleted; // inherited from NSObject

	static new(): GTLRGmail_HistoryMessageDeleted; // inherited from NSObject

	static object(): GTLRGmail_HistoryMessageDeleted; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_HistoryMessageDeleted; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_HistoryMessageDeleted; // inherited from GTLRObject

	message: GTLRGmail_Message;
}

declare class GTLRGmail_ImapSettings extends GTLRObject {

	static alloc(): GTLRGmail_ImapSettings; // inherited from NSObject

	static new(): GTLRGmail_ImapSettings; // inherited from NSObject

	static object(): GTLRGmail_ImapSettings; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ImapSettings; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ImapSettings; // inherited from GTLRObject

	autoExpunge: number;

	enabled: number;

	expungeBehavior: string;

	maxFolderSize: number;
}

declare class GTLRGmail_Label extends GTLRObject {

	static alloc(): GTLRGmail_Label; // inherited from NSObject

	static new(): GTLRGmail_Label; // inherited from NSObject

	static object(): GTLRGmail_Label; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_Label; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_Label; // inherited from GTLRObject

	identifier: string;

	labelListVisibility: string;

	messageListVisibility: string;

	messagesTotal: number;

	messagesUnread: number;

	name: string;

	threadsTotal: number;

	threadsUnread: number;

	type: string;
}

declare class GTLRGmail_ListDraftsResponse extends GTLRCollectionObject {

	static alloc(): GTLRGmail_ListDraftsResponse; // inherited from NSObject

	static new(): GTLRGmail_ListDraftsResponse; // inherited from NSObject

	static object(): GTLRGmail_ListDraftsResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListDraftsResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListDraftsResponse; // inherited from GTLRObject

	drafts: NSArray<GTLRGmail_Draft>;

	nextPageToken: string;

	resultSizeEstimate: number;
}

declare class GTLRGmail_ListFiltersResponse extends GTLRObject {

	static alloc(): GTLRGmail_ListFiltersResponse; // inherited from NSObject

	static new(): GTLRGmail_ListFiltersResponse; // inherited from NSObject

	static object(): GTLRGmail_ListFiltersResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListFiltersResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListFiltersResponse; // inherited from GTLRObject

	filter: NSArray<GTLRGmail_Filter>;
}

declare class GTLRGmail_ListForwardingAddressesResponse extends GTLRObject {

	static alloc(): GTLRGmail_ListForwardingAddressesResponse; // inherited from NSObject

	static new(): GTLRGmail_ListForwardingAddressesResponse; // inherited from NSObject

	static object(): GTLRGmail_ListForwardingAddressesResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListForwardingAddressesResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListForwardingAddressesResponse; // inherited from GTLRObject

	forwardingAddresses: NSArray<GTLRGmail_ForwardingAddress>;
}

declare class GTLRGmail_ListHistoryResponse extends GTLRCollectionObject {

	static alloc(): GTLRGmail_ListHistoryResponse; // inherited from NSObject

	static new(): GTLRGmail_ListHistoryResponse; // inherited from NSObject

	static object(): GTLRGmail_ListHistoryResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListHistoryResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListHistoryResponse; // inherited from GTLRObject

	history: NSArray<GTLRGmail_History>;

	historyId: number;

	nextPageToken: string;
}

declare class GTLRGmail_ListLabelsResponse extends GTLRObject {

	static alloc(): GTLRGmail_ListLabelsResponse; // inherited from NSObject

	static new(): GTLRGmail_ListLabelsResponse; // inherited from NSObject

	static object(): GTLRGmail_ListLabelsResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListLabelsResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListLabelsResponse; // inherited from GTLRObject

	labels: NSArray<GTLRGmail_Label>;
}

declare class GTLRGmail_ListMessagesResponse extends GTLRCollectionObject {

	static alloc(): GTLRGmail_ListMessagesResponse; // inherited from NSObject

	static new(): GTLRGmail_ListMessagesResponse; // inherited from NSObject

	static object(): GTLRGmail_ListMessagesResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListMessagesResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListMessagesResponse; // inherited from GTLRObject

	messages: NSArray<GTLRGmail_Message>;

	nextPageToken: string;

	resultSizeEstimate: number;
}

declare class GTLRGmail_ListSendAsResponse extends GTLRObject {

	static alloc(): GTLRGmail_ListSendAsResponse; // inherited from NSObject

	static new(): GTLRGmail_ListSendAsResponse; // inherited from NSObject

	static object(): GTLRGmail_ListSendAsResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListSendAsResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListSendAsResponse; // inherited from GTLRObject

	sendAs: NSArray<GTLRGmail_SendAs>;
}

declare class GTLRGmail_ListSmimeInfoResponse extends GTLRObject {

	static alloc(): GTLRGmail_ListSmimeInfoResponse; // inherited from NSObject

	static new(): GTLRGmail_ListSmimeInfoResponse; // inherited from NSObject

	static object(): GTLRGmail_ListSmimeInfoResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListSmimeInfoResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListSmimeInfoResponse; // inherited from GTLRObject

	smimeInfo: NSArray<GTLRGmail_SmimeInfo>;
}

declare class GTLRGmail_ListThreadsResponse extends GTLRCollectionObject {

	static alloc(): GTLRGmail_ListThreadsResponse; // inherited from NSObject

	static new(): GTLRGmail_ListThreadsResponse; // inherited from NSObject

	static object(): GTLRGmail_ListThreadsResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ListThreadsResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ListThreadsResponse; // inherited from GTLRObject

	nextPageToken: string;

	resultSizeEstimate: number;

	threads: NSArray<GTLRGmail_Thread>;
}

declare class GTLRGmail_Message extends GTLRObject {

	static alloc(): GTLRGmail_Message; // inherited from NSObject

	static new(): GTLRGmail_Message; // inherited from NSObject

	static object(): GTLRGmail_Message; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_Message; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_Message; // inherited from GTLRObject

	historyId: number;

	identifier: string;

	internalDate: number;

	labelIds: NSArray<string>;

	payload: GTLRGmail_MessagePart;

	raw: string;

	sizeEstimate: number;

	snippet: string;

	threadId: string;
}

declare class GTLRGmail_MessagePart extends GTLRObject {

	static alloc(): GTLRGmail_MessagePart; // inherited from NSObject

	static new(): GTLRGmail_MessagePart; // inherited from NSObject

	static object(): GTLRGmail_MessagePart; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_MessagePart; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_MessagePart; // inherited from GTLRObject

	body: GTLRGmail_MessagePartBody;

	filename: string;

	headers: NSArray<GTLRGmail_MessagePartHeader>;

	mimeType: string;

	partId: string;

	parts: NSArray<GTLRGmail_MessagePart>;
}

declare class GTLRGmail_MessagePartBody extends GTLRObject {

	static alloc(): GTLRGmail_MessagePartBody; // inherited from NSObject

	static new(): GTLRGmail_MessagePartBody; // inherited from NSObject

	static object(): GTLRGmail_MessagePartBody; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_MessagePartBody; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_MessagePartBody; // inherited from GTLRObject

	attachmentId: string;

	data: string;

	size: number;
}

declare class GTLRGmail_MessagePartHeader extends GTLRObject {

	static alloc(): GTLRGmail_MessagePartHeader; // inherited from NSObject

	static new(): GTLRGmail_MessagePartHeader; // inherited from NSObject

	static object(): GTLRGmail_MessagePartHeader; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_MessagePartHeader; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_MessagePartHeader; // inherited from GTLRObject

	name: string;

	value: string;
}

declare class GTLRGmail_ModifyMessageRequest extends GTLRObject {

	static alloc(): GTLRGmail_ModifyMessageRequest; // inherited from NSObject

	static new(): GTLRGmail_ModifyMessageRequest; // inherited from NSObject

	static object(): GTLRGmail_ModifyMessageRequest; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ModifyMessageRequest; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ModifyMessageRequest; // inherited from GTLRObject

	addLabelIds: NSArray<string>;

	removeLabelIds: NSArray<string>;
}

declare class GTLRGmail_ModifyThreadRequest extends GTLRObject {

	static alloc(): GTLRGmail_ModifyThreadRequest; // inherited from NSObject

	static new(): GTLRGmail_ModifyThreadRequest; // inherited from NSObject

	static object(): GTLRGmail_ModifyThreadRequest; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_ModifyThreadRequest; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_ModifyThreadRequest; // inherited from GTLRObject

	addLabelIds: NSArray<string>;

	removeLabelIds: NSArray<string>;
}

declare class GTLRGmail_PopSettings extends GTLRObject {

	static alloc(): GTLRGmail_PopSettings; // inherited from NSObject

	static new(): GTLRGmail_PopSettings; // inherited from NSObject

	static object(): GTLRGmail_PopSettings; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_PopSettings; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_PopSettings; // inherited from GTLRObject

	accessWindow: string;

	disposition: string;
}

declare class GTLRGmail_Profile extends GTLRObject {

	static alloc(): GTLRGmail_Profile; // inherited from NSObject

	static new(): GTLRGmail_Profile; // inherited from NSObject

	static object(): GTLRGmail_Profile; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_Profile; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_Profile; // inherited from GTLRObject

	emailAddress: string;

	historyId: number;

	messagesTotal: number;

	threadsTotal: number;
}

declare class GTLRGmail_SendAs extends GTLRObject {

	static alloc(): GTLRGmail_SendAs; // inherited from NSObject

	static new(): GTLRGmail_SendAs; // inherited from NSObject

	static object(): GTLRGmail_SendAs; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_SendAs; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_SendAs; // inherited from GTLRObject

	displayName: string;

	isDefault: number;

	isPrimary: number;

	replyToAddress: string;

	sendAsEmail: string;

	signature: string;

	smtpMsa: GTLRGmail_SmtpMsa;

	treatAsAlias: number;

	verificationStatus: string;
}

declare class GTLRGmail_SmimeInfo extends GTLRObject {

	static alloc(): GTLRGmail_SmimeInfo; // inherited from NSObject

	static new(): GTLRGmail_SmimeInfo; // inherited from NSObject

	static object(): GTLRGmail_SmimeInfo; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_SmimeInfo; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_SmimeInfo; // inherited from GTLRObject

	encryptedKeyPassword: string;

	expiration: number;

	identifier: string;

	isDefault: number;

	issuerCn: string;

	pem: string;

	pkcs12: string;
}

declare class GTLRGmail_SmtpMsa extends GTLRObject {

	static alloc(): GTLRGmail_SmtpMsa; // inherited from NSObject

	static new(): GTLRGmail_SmtpMsa; // inherited from NSObject

	static object(): GTLRGmail_SmtpMsa; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_SmtpMsa; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_SmtpMsa; // inherited from GTLRObject

	host: string;

	password: string;

	port: number;

	securityMode: string;

	username: string;
}

declare class GTLRGmail_Thread extends GTLRObject {

	static alloc(): GTLRGmail_Thread; // inherited from NSObject

	static new(): GTLRGmail_Thread; // inherited from NSObject

	static object(): GTLRGmail_Thread; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_Thread; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_Thread; // inherited from GTLRObject

	historyId: number;

	identifier: string;

	messages: NSArray<GTLRGmail_Message>;

	snippet: string;
}

declare class GTLRGmail_VacationSettings extends GTLRObject {

	static alloc(): GTLRGmail_VacationSettings; // inherited from NSObject

	static new(): GTLRGmail_VacationSettings; // inherited from NSObject

	static object(): GTLRGmail_VacationSettings; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_VacationSettings; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_VacationSettings; // inherited from GTLRObject

	enableAutoReply: number;

	endTime: number;

	responseBodyHtml: string;

	responseBodyPlainText: string;

	responseSubject: string;

	restrictToContacts: number;

	restrictToDomain: number;

	startTime: number;
}

declare class GTLRGmail_WatchRequest extends GTLRObject {

	static alloc(): GTLRGmail_WatchRequest; // inherited from NSObject

	static new(): GTLRGmail_WatchRequest; // inherited from NSObject

	static object(): GTLRGmail_WatchRequest; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_WatchRequest; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_WatchRequest; // inherited from GTLRObject

	labelFilterAction: string;

	labelIds: NSArray<string>;

	topicName: string;
}

declare class GTLRGmail_WatchResponse extends GTLRObject {

	static alloc(): GTLRGmail_WatchResponse; // inherited from NSObject

	static new(): GTLRGmail_WatchResponse; // inherited from NSObject

	static object(): GTLRGmail_WatchResponse; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRGmail_WatchResponse; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRGmail_WatchResponse; // inherited from GTLRObject

	expiration: number;

	historyId: number;
}

declare class GTLRObject extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GTLRObject; // inherited from NSObject

	static arrayPropertyToClassMap(): NSDictionary<string, typeof NSObject>;

	static classForAdditionalProperties(): typeof NSObject;

	static isKindValidForClassRegistry(): boolean;

	static new(): GTLRObject; // inherited from NSObject

	static nullValue(): any;

	static object(): GTLRObject;

	static objectForJSONDefaultClassObjectClassResolver(json: NSMutableDictionary<any, any>, defaultClass: typeof NSObject, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRObject;

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRObject;

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRObject;

	static propertyToJSONKeyMap(): NSDictionary<string, string>;

	JSON: NSMutableDictionary<any, any>;

	userProperties: NSDictionary<any, any>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	JSONString(): string;

	JSONValueForKey(key: string): any;

	additionalJSONKeys(): NSArray<string>;

	additionalProperties(): NSDictionary<string, any>;

	additionalPropertyForName(name: string): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	fieldsDescription(): string;

	initWithCoder(aDecoder: NSCoder): this;

	patchObjectFromOriginal(original: GTLRObject): any;

	setAdditionalPropertyForName(obj: any, name: string): void;

	setJSONValueForKey(obj: any, key: string): void;
}

declare class GTLRObjectClassResolver extends NSObject implements GTLRObjectClassResolverProtocol {

	static alloc(): GTLRObjectClassResolver; // inherited from NSObject

	static new(): GTLRObjectClassResolver; // inherited from NSObject

	static resolverWithKindMap(kindStringToClassMap: NSDictionary<string, typeof NSObject>): GTLRObjectClassResolver;

	static resolverWithKindMapSurrogates(kindStringToClassMap: NSDictionary<string, typeof NSObject>, surrogates: NSDictionary<typeof NSObject, typeof NSObject>): GTLRObjectClassResolver;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	classForJSONDefaultClass(json: NSDictionary<any, any>, defaultClass: typeof NSObject): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface GTLRObjectClassResolverProtocol extends NSObjectProtocol {

	classForJSONDefaultClass(json: NSDictionary<any, any>, defaultClass: typeof NSObject): typeof NSObject;
}
declare var GTLRObjectClassResolverProtocol: {

	prototype: GTLRObjectClassResolverProtocol;
};

declare class GTLRObjectCollectionImpl extends GTLRObject {

	static alloc(): GTLRObjectCollectionImpl; // inherited from NSObject

	static new(): GTLRObjectCollectionImpl; // inherited from NSObject

	static object(): GTLRObjectCollectionImpl; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRObjectCollectionImpl; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRObjectCollectionImpl; // inherited from GTLRObject

	nextPageToken: string;
}

declare function GTLRObjectResolveClass(objectClassResolver: GTLRObjectClassResolverProtocol, json: NSDictionary<any, any>, defaultClass: typeof NSObject): typeof NSObject;

declare class GTLRQuery extends NSObject implements GTLRQueryProtocol, NSCopying {

	static alloc(): GTLRQuery; // inherited from NSObject

	static arrayPropertyToClassMap(): NSDictionary<string, typeof NSObject>;

	static new(): GTLRQuery; // inherited from NSObject

	static nextRequestID(): string;

	static parameterNameMap(): NSDictionary<string, string>;

	JSON: NSMutableDictionary<string, any>;

	additionalHTTPHeaders: NSDictionary<string, string>;

	additionalURLQueryParameters: NSDictionary<string, string>;

	bodyObject: GTLRObject;

	completionBlock: (p1: GTLRServiceTicket, p2: any, p3: NSError) => void;

	downloadAsDataObjectType: string;

	expectedObjectClass: typeof NSObject;

	readonly httpMethod: string;

	loggingName: string;

	readonly pathParameterNames: NSArray<string>;

	readonly pathURITemplate: string;

	queryInvalid: boolean;

	requestID: string;

	resumableUploadPathURITemplateOverride: string;

	shouldSkipAuthorization: boolean;

	simpleUploadPathURITemplateOverride: string;

	uploadParameters: GTLRUploadParameters;

	useMediaDownloadService: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	executionParameters: GTLRServiceExecutionParameters; // inherited from GTLRQueryProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { pathURITemplate: string; HTTPMethod: string; pathParameterNames: NSArray<string>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	hasExecutionParameters(): boolean;

	initWithPathURITemplateHTTPMethodPathParameterNames(pathURITemplate: string, httpMethod: string, pathParameterNames: NSArray<string>): this;

	invalidateQuery(): void;

	isBatchQuery(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GTLRQueryCollectionImpl extends GTLRQuery implements GTLRQueryCollectionProtocol {

	static alloc(): GTLRQueryCollectionImpl; // inherited from NSObject

	static new(): GTLRQueryCollectionImpl; // inherited from NSObject

	pageToken: string; // inherited from GTLRQueryCollectionProtocol
}

interface GTLRQueryCollectionProtocol {

	pageToken?: string;
}
declare var GTLRQueryCollectionProtocol: {

	prototype: GTLRQueryCollectionProtocol;
};

interface GTLRQueryProtocol extends NSCopying, NSObjectProtocol {

	additionalHTTPHeaders: NSDictionary<string, string>;

	additionalURLQueryParameters: NSDictionary<string, string>;

	executionParameters: GTLRServiceExecutionParameters;

	loggingName: string;

	shouldSkipAuthorization: boolean;

	uploadParameters: GTLRUploadParameters;

	hasExecutionParameters(): boolean;

	invalidateQuery(): void;

	isBatchQuery(): boolean;
}
declare var GTLRQueryProtocol: {

	prototype: GTLRQueryProtocol;
};

declare class GTLRResultArray extends GTLRCollectionObject {

	static alloc(): GTLRResultArray; // inherited from NSObject

	static new(): GTLRResultArray; // inherited from NSObject

	static object(): GTLRResultArray; // inherited from GTLRObject

	static objectWithJSON(dict: NSDictionary<any, any>): GTLRResultArray; // inherited from GTLRObject

	static objectWithJSONObjectClassResolver(dict: NSDictionary<any, any>, objectClassResolver: GTLRObjectClassResolverProtocol): GTLRResultArray; // inherited from GTLRObject

	itemsWithItemClass(itemClass: typeof NSObject): NSArray<any>;
}

declare class GTLRRuntimeCommon extends NSObject {

	static alloc(): GTLRRuntimeCommon; // inherited from NSObject

	static jsonFromAPIObjectExpectedClassIsCacheable(obj: any, expectedClass: typeof NSObject, isCacheable: interop.Pointer | interop.Reference<boolean>): any;

	static mergedClassDictionaryForSelectorStartClassAncestorClassCache(selector: string, startClass: typeof NSObject, ancestorClass: typeof NSObject, cache: NSMutableDictionary<any, any>): NSDictionary<any, any>;

	static new(): GTLRRuntimeCommon; // inherited from NSObject

	static objectFromJSONDefaultClassObjectClassResolverIsCacheable(json: any, defaultClass: typeof NSObject, objectClassResolver: GTLRObjectClassResolverProtocol, isCacheable: interop.Pointer | interop.Reference<boolean>): any;

	static resolveInstanceMethodOnClass(sel: string, onClass: typeof NSObject): boolean;
}

interface GTLRRuntimeCommonProtocol extends NSObjectProtocol {

	JSONValueForKey(key: string): any;

	cacheChildForKey(key: string): any;

	objectClassResolver(): GTLRObjectClassResolverProtocol;

	setCacheChildForKey(obj: any, key: string): void;

	setJSONValueForKey(obj: any, key: string): void;
}
declare var GTLRRuntimeCommonProtocol: {

	prototype: GTLRRuntimeCommonProtocol;

	ancestorClass(): typeof NSObject;

	arrayPropertyToClassMapForClass(aClass: typeof NSObject): NSDictionary<string, typeof NSObject>;

	propertyToJSONKeyMapForClass(aClass: typeof NSObject): NSDictionary<string, string>;
};

declare class GTLRService extends NSObject {

	static alloc(): GTLRService; // inherited from NSObject

	static defaultServiceUploadChunkSize(): number;

	static kindStringToClassMap(): NSDictionary<string, typeof NSObject>;

	static mockServiceWithFakedObjectFakedError(object: any, error: NSError): GTLRService;

	static new(): GTLRService; // inherited from NSObject

	APIKey: string;

	additionalHTTPHeaders: NSDictionary<string, string>;

	additionalURLQueryParameters: NSDictionary<string, string>;

	allowInsecureQueries: boolean;

	authorizer: GTMFetcherAuthorizationProtocol;

	batchPath: string;

	callbackQueue: NSObject;

	dataWrapperRequired: boolean;

	fetcherService: GTMSessionFetcherService;

	maxRetryInterval: number;

	objectClassResolver: GTLRObjectClassResolverProtocol;

	parseQueue: NSObject;

	prettyPrintQueryParameterNames: NSArray<string>;

	readonly requestUserAgent: string;

	resumableUploadPath: string;

	retryBlock: (p1: GTLRServiceTicket, p2: boolean, p3: NSError) => boolean;

	retryEnabled: boolean;

	rootURLString: string;

	servicePath: string;

	serviceProperties: NSDictionary<string, any>;

	serviceUploadChunkSize: number;

	shouldFetchNextPages: boolean;

	simpleUploadPath: string;

	testBlock: (p1: GTLRServiceTicket, p2: (p1: any, p2: NSError) => void) => void;

	uploadProgressBlock: (p1: GTLRServiceTicket, p2: number, p3: number) => void;

	userAgent: string;

	userAgentAddition: string;

	executeQueryCompletionHandler(query: GTLRQueryProtocol, handler: (p1: GTLRServiceTicket, p2: any, p3: NSError) => void): GTLRServiceTicket;

	executeQueryDelegateDidFinishSelector(query: GTLRQueryProtocol, delegate: any, finishedSelector: string): GTLRServiceTicket;

	fetchObjectWithURLObjectClassExecutionParametersCompletionHandler(resourceURL: NSURL, objectClass: typeof NSObject, executionParameters: GTLRServiceExecutionParameters, handler: (p1: GTLRServiceTicket, p2: any, p3: NSError) => void): GTLRServiceTicket;

	requestForQuery(query: GTLRQuery): NSMutableURLRequest;

	setExactUserAgent(userAgent: string): void;

	setSurrogates(surrogates: NSDictionary<typeof NSObject, typeof NSObject>): void;

	waitForTicketTimeout(ticket: GTLRServiceTicket, timeoutInSeconds: number): boolean;
}

declare const enum GTLRServiceError {

	QueryResultMissing = -3000,

	BatchResponseUnexpected = -3001,

	BatchResponseStatusCode = -3002
}

declare class GTLRServiceExecutionParameters extends NSObject implements NSCopying {

	static alloc(): GTLRServiceExecutionParameters; // inherited from NSObject

	static new(): GTLRServiceExecutionParameters; // inherited from NSObject

	callbackQueue: NSObject;

	readonly hasParameters: boolean;

	maxRetryInterval: number;

	objectClassResolver: GTLRObjectClassResolverProtocol;

	retryBlock: (p1: GTLRServiceTicket, p2: boolean, p3: NSError) => boolean;

	retryEnabled: number;

	shouldFetchNextPages: number;

	testBlock: (p1: GTLRServiceTicket, p2: (p1: any, p2: NSError) => void) => void;

	ticketProperties: NSDictionary<string, any>;

	uploadProgressBlock: (p1: GTLRServiceTicket, p2: number, p3: number) => void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GTLRServiceTicket extends NSObject {

	static alloc(): GTLRServiceTicket; // inherited from NSObject

	static new(): GTLRServiceTicket; // inherited from NSObject

	readonly APIKey: string;

	readonly callbackQueue: NSObject;

	readonly cancelled: boolean;

	readonly creationDate: Date;

	readonly executingQuery: GTLRQueryProtocol;

	readonly fetchError: NSError;

	readonly fetchRequest: NSURLRequest;

	readonly fetchedObject: GTLRObject;

	readonly hasCalledCallback: boolean;

	readonly objectClassResolver: GTLRObjectClassResolverProtocol;

	readonly objectFetcher: GTMSessionFetcher;

	readonly originalQuery: GTLRQueryProtocol;

	readonly pagesFetchedCounter: number;

	readonly postedObject: GTLRObject;

	readonly service: GTLRService;

	readonly shouldFetchNextPages: boolean;

	readonly statusCode: number;

	readonly ticketProperties: NSDictionary<string, any>;

	readonly uploadPaused: boolean;

	cancelTicket(): void;

	pauseUpload(): void;

	queryForRequestID(requestID: string): GTLRQuery;

	resumeUpload(): void;
}

declare class GTLRURITemplate extends NSObject {

	static alloc(): GTLRURITemplate; // inherited from NSObject

	static expandTemplateValues(URITemplate: string, valueProvider: NSDictionary<any, any>): string;

	static new(): GTLRURITemplate; // inherited from NSObject
}

declare class GTLRUploadParameters extends NSObject implements NSCopying {

	static alloc(): GTLRUploadParameters; // inherited from NSObject

	static new(): GTLRUploadParameters; // inherited from NSObject

	static uploadParametersWithDataMIMEType(data: NSData, mimeType: string): GTLRUploadParameters;

	static uploadParametersWithFileHandleMIMEType(fileHandle: NSFileHandle, mimeType: string): GTLRUploadParameters;

	static uploadParametersWithFileURLMIMEType(fileURL: NSURL, mimeType: string): GTLRUploadParameters;

	MIMEType: string;

	data: NSData;

	fileHandle: NSFileHandle;

	fileURL: NSURL;

	shouldSendUploadOnly: boolean;

	shouldUploadWithSingleRequest: boolean;

	uploadLocationURL: NSURL;

	useBackgroundSession: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GTLRUtilities extends NSObject {

	static alloc(): GTLRUtilities; // inherited from NSObject

	static firstObjectFromArrayWithValueForKeyPath(sourceArray: NSArray<any>, desiredValue: any, keyPath: string): any;

	static new(): GTLRUtilities; // inherited from NSObject

	static objectsFromArrayWithValueForKeyPath(sourceArray: NSArray<any>, desiredValue: any, keyPath: string): NSArray<any>;
}

declare function GTLR_AreBoolsEqual(b1: boolean, b2: boolean): boolean;

declare function GTLR_AreEqualOrBothNil(obj1: any, obj2: any): boolean;

declare function GTLR_EnsureNSNumber(num: number): number;

declare var GoogleAPIClientForRESTVersionNumber: number;

declare var GoogleAPIClientForRESTVersionString: interop.Reference<number>;

declare var kGTLRAuthScopeDrive: string;

declare var kGTLRAuthScopeDriveAppdata: string;

declare var kGTLRAuthScopeDriveFile: string;

declare var kGTLRAuthScopeDriveMetadata: string;

declare var kGTLRAuthScopeDriveMetadataReadonly: string;

declare var kGTLRAuthScopeDrivePhotosReadonly: string;

declare var kGTLRAuthScopeDriveReadonly: string;

declare var kGTLRAuthScopeDriveScripts: string;

declare var kGTLRAuthScopeGmailCompose: string;

declare var kGTLRAuthScopeGmailInsert: string;

declare var kGTLRAuthScopeGmailLabels: string;

declare var kGTLRAuthScopeGmailMailGoogleCom: string;

declare var kGTLRAuthScopeGmailMetadata: string;

declare var kGTLRAuthScopeGmailModify: string;

declare var kGTLRAuthScopeGmailReadonly: string;

declare var kGTLRAuthScopeGmailSend: string;

declare var kGTLRAuthScopeGmailSettingsBasic: string;

declare var kGTLRAuthScopeGmailSettingsSharing: string;

declare var kGTLRDriveCorpusDomain: string;

declare var kGTLRDriveCorpusUser: string;

declare var kGTLRETagWildcard: string;

declare var kGTLRErrorObjectDomain: string;

declare var kGTLRGmailFormatFull: string;

declare var kGTLRGmailFormatMetadata: string;

declare var kGTLRGmailFormatMinimal: string;

declare var kGTLRGmailFormatRaw: string;

declare var kGTLRGmailHistoryTypesLabelAdded: string;

declare var kGTLRGmailHistoryTypesLabelRemoved: string;

declare var kGTLRGmailHistoryTypesMessageAdded: string;

declare var kGTLRGmailHistoryTypesMessageDeleted: string;

declare var kGTLRGmailInternalDateSourceDateHeader: string;

declare var kGTLRGmailInternalDateSourceReceivedTime: string;

declare var kGTLRGmail_AutoForwarding_Disposition_Archive: string;

declare var kGTLRGmail_AutoForwarding_Disposition_DispositionUnspecified: string;

declare var kGTLRGmail_AutoForwarding_Disposition_LeaveInInbox: string;

declare var kGTLRGmail_AutoForwarding_Disposition_MarkRead: string;

declare var kGTLRGmail_AutoForwarding_Disposition_Trash: string;

declare var kGTLRGmail_FilterCriteria_SizeComparison_Larger: string;

declare var kGTLRGmail_FilterCriteria_SizeComparison_Smaller: string;

declare var kGTLRGmail_FilterCriteria_SizeComparison_Unspecified: string;

declare var kGTLRGmail_ForwardingAddress_VerificationStatus_Accepted: string;

declare var kGTLRGmail_ForwardingAddress_VerificationStatus_Pending: string;

declare var kGTLRGmail_ForwardingAddress_VerificationStatus_VerificationStatusUnspecified: string;

declare var kGTLRGmail_ImapSettings_ExpungeBehavior_Archive: string;

declare var kGTLRGmail_ImapSettings_ExpungeBehavior_DeleteForever: string;

declare var kGTLRGmail_ImapSettings_ExpungeBehavior_ExpungeBehaviorUnspecified: string;

declare var kGTLRGmail_ImapSettings_ExpungeBehavior_Trash: string;

declare var kGTLRGmail_Label_LabelListVisibility_LabelHide: string;

declare var kGTLRGmail_Label_LabelListVisibility_LabelShow: string;

declare var kGTLRGmail_Label_LabelListVisibility_LabelShowIfUnread: string;

declare var kGTLRGmail_Label_MessageListVisibility_Hide: string;

declare var kGTLRGmail_Label_MessageListVisibility_Show: string;

declare var kGTLRGmail_Label_Type_System: string;

declare var kGTLRGmail_Label_Type_User: string;

declare var kGTLRGmail_PopSettings_AccessWindow_AccessWindowUnspecified: string;

declare var kGTLRGmail_PopSettings_AccessWindow_AllMail: string;

declare var kGTLRGmail_PopSettings_AccessWindow_Disabled: string;

declare var kGTLRGmail_PopSettings_AccessWindow_FromNowOn: string;

declare var kGTLRGmail_PopSettings_Disposition_Archive: string;

declare var kGTLRGmail_PopSettings_Disposition_DispositionUnspecified: string;

declare var kGTLRGmail_PopSettings_Disposition_LeaveInInbox: string;

declare var kGTLRGmail_PopSettings_Disposition_MarkRead: string;

declare var kGTLRGmail_PopSettings_Disposition_Trash: string;

declare var kGTLRGmail_SendAs_VerificationStatus_Accepted: string;

declare var kGTLRGmail_SendAs_VerificationStatus_Pending: string;

declare var kGTLRGmail_SendAs_VerificationStatus_VerificationStatusUnspecified: string;

declare var kGTLRGmail_SmtpMsa_SecurityMode_None: string;

declare var kGTLRGmail_SmtpMsa_SecurityMode_SecurityModeUnspecified: string;

declare var kGTLRGmail_SmtpMsa_SecurityMode_Ssl: string;

declare var kGTLRGmail_SmtpMsa_SecurityMode_Starttls: string;

declare var kGTLRGmail_WatchRequest_LabelFilterAction_Exclude: string;

declare var kGTLRGmail_WatchRequest_LabelFilterAction_Include: string;

declare var kGTLRServiceErrorBodyDataKey: string;

declare var kGTLRServiceErrorContentIDKey: string;

declare var kGTLRServiceErrorDomain: string;

declare var kGTLRServiceTicketParsingStartedNotification: string;

declare var kGTLRServiceTicketParsingStoppedNotification: string;

declare var kGTLRServiceTicketStartedNotification: string;

declare var kGTLRServiceTicketStoppedNotification: string;

declare var kGTLRStructuredErrorKey: string;
