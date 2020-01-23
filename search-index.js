var searchIndex={};
searchIndex["isahc"] = {"doc":"The practical HTTP client that is fun to use.","i":[[3,"Body","isahc","Contains the body of an HTTP request or response.",null,null],[3,"HttpClient","","An HTTP client for making requests.",null,null],[3,"HttpClientBuilder","","An HTTP client builder, capable of creating custom…",null,null],[3,"ResponseFuture","","A future for a request being executed.",null,null],[3,"Metrics","","An object that holds status updates and progress…",null,null],[4,"Error","","All possible types of errors that can be returned from…",null,null],[13,"Aborted","","The request was aborted before it could be completed.",0,null],[13,"BadClientCertificate","","A problem occurred with the local certificate.",0,null],[13,"BadServerCertificate","","The server certificate could not be validated.",0,null],[13,"ConnectFailed","","Failed to connect to the server.",0,null],[13,"CouldntResolveHost","","Couldn't resolve host name.",0,null],[13,"CouldntResolveProxy","","Couldn't resolve proxy host name.",0,null],[13,"Curl","","An unrecognized error thrown by curl.",0,null],[13,"InvalidContentEncoding","","Unrecognized or bad content encoding returned by the server.",0,null],[13,"InvalidCredentials","","Provided credentials were rejected by the server.",0,null],[13,"InvalidHttpFormat","","Validation error when constructing the request or parsing…",0,null],[13,"InvalidUtf8","","Invalid UTF-8 string error.",0,null],[13,"Io","","An unknown I/O error.",0,null],[13,"NoResponse","","The server did not send a response.",0,null],[13,"RangeRequestUnsupported","","The server does not support or accept range requests.",0,null],[13,"RequestBodyError","","An error occurred while writing the request body.",0,null],[13,"ResponseBodyError","","An error occurred while reading the response body.",0,null],[13,"SSLConnectFailed","","Failed to connect over a secure socket.",0,null],[13,"SSLEngineError","","An error ocurred in the secure socket engine.",0,null],[13,"Timeout","","An ongoing request took longer than the configured timeout…",0,null],[13,"TooManyRedirects","","Number of redirects hit the maximum amount.",0,null],[5,"get","","Send a GET request to the given URI.",null,[[["u"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[5,"get_async","","Send a GET request to the given URI asynchronously.",null,[[["u"]],["responsefuture"]]],[5,"head","","Send a HEAD request to the given URI.",null,[[["u"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[5,"head_async","","Send a HEAD request to the given URI asynchronously.",null,[[["u"]],["responsefuture"]]],[5,"post","","Send a POST request to the given URI with a given request…",null,[[["u"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[5,"post_async","","Send a POST request to the given URI asynchronously with a…",null,[[["u"]],["responsefuture"]]],[5,"put","","Send a PUT request to the given URI with a given request…",null,[[["u"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[5,"put_async","","Send a PUT request to the given URI asynchronously with a…",null,[[["u"]],["responsefuture"]]],[5,"delete","","Send a DELETE request to the given URI.",null,[[["u"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[5,"delete_async","","Send a DELETE request to the given URI asynchronously.",null,[[["u"]],["responsefuture"]]],[5,"send","","Send an HTTP request and return the HTTP response.",null,[[["request"],["body"],["into",["body"]]],[["response",["body"]],["result",["response","error"]],["error"]]]],[5,"send_async","","Send an HTTP request and return the HTTP response…",null,[[["request"],["body"],["into",["body"]]],["responsefuture"]]],[5,"version","","Gets a human-readable string with the version number of…",null,[[],["str"]]],[11,"empty","","Create a new empty body.",1,[[],["self"]]],[11,"from_bytes","","Create a new body from bytes stored in memory.",1,[[],["self"]]],[11,"from_reader","","Create a streaming body that reads from the given reader.",1,[[],["self"]]],[11,"from_reader_sized","","Create a streaming body with a known length.",1,[[["u64"]],["self"]]],[11,"is_empty","","Report if this body is empty.",1,[[["self"]],["bool"]]],[11,"len","","Get the size of the body, if known.",1,[[["self"]],[["option",["u64"]],["u64"]]]],[11,"reset","","If this body is repeatable, reset the body stream back to…",1,[[["self"]],["bool"]]],[11,"new","","Create a new builder for building a custom client. All…",2,[[],["self"]]],[11,"max_connections","","Set a maximum number of simultaneous connections that this…",2,[[["usize"]],["self"]]],[11,"max_connections_per_host","","Set a maximum number of simultaneous connections that this…",2,[[["usize"]],["self"]]],[11,"connection_cache_size","","Set the size of the connection cache.",2,[[["usize"]],["self"]]],[11,"dns_cache","","Configure DNS caching.",2,[[],["self"]]],[11,"dns_resolve","","Set a mapping of DNS resolve overrides.",2,[[["resolvemap"]],["self"]]],[11,"build","","Build an [`HttpClient`] using the configured options.",2,[[],[["result",["httpclient","error"]],["httpclient"],["error"]]]],[11,"new","","Create a new HTTP client using the default configuration.",3,[[],[["error"],["result",["error"]]]]],[11,"builder","","Create a new [`HttpClientBuilder`] for building a custom…",3,[[],["httpclientbuilder"]]],[11,"get","","Send a GET request to the given URI.",3,[[["u"],["self"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[11,"get_async","","Send a GET request to the given URI asynchronously.",3,[[["u"],["self"]],["responsefuture"]]],[11,"head","","Send a HEAD request to the given URI.",3,[[["u"],["self"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[11,"head_async","","Send a HEAD request to the given URI asynchronously.",3,[[["u"],["self"]],["responsefuture"]]],[11,"post","","Send a POST request to the given URI with a given request…",3,[[["u"],["self"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[11,"post_async","","Send a POST request to the given URI asynchronously with a…",3,[[["u"],["self"]],["responsefuture"]]],[11,"put","","Send a PUT request to the given URI with a given request…",3,[[["u"],["self"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[11,"put_async","","Send a PUT request to the given URI asynchronously with a…",3,[[["u"],["self"]],["responsefuture"]]],[11,"delete","","Send a DELETE request to the given URI.",3,[[["u"],["self"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[11,"delete_async","","Send a DELETE request to the given URI asynchronously.",3,[[["u"],["self"]],["responsefuture"]]],[11,"send","","Send an HTTP request and return the HTTP response.",3,[[["into",["body"]],["request"],["body"],["self"]],[["response",["body"]],["result",["response","error"]],["error"]]]],[11,"send_async","","Send an HTTP request and return the HTTP response…",3,[[["into",["body"]],["request"],["body"],["self"]],["responsefuture"]]],[11,"upload_progress","","Number of bytes uploaded / estimated total.",4,[[["self"]]]],[11,"upload_speed","","Average upload speed so far in bytes/second.",4,[[["self"]],["f64"]]],[11,"download_progress","","Number of bytes downloaded / estimated total.",4,[[["self"]]]],[11,"download_speed","","Average download speed so far in bytes/second.",4,[[["self"]],["f64"]]],[11,"name_lookup_time","","Get the total time from the start of the request until DNS…",4,[[["self"]],["duration"]]],[11,"connect_time","","Get the amount of time taken to establish a connection to…",4,[[["self"]],["duration"]]],[11,"secure_connect_time","","Get the amount of time spent on TLS handshakes.",4,[[["self"]],["duration"]]],[11,"transfer_start_time","","Get the time it took from the start of the request until…",4,[[["self"]],["duration"]]],[11,"transfer_time","","Get the amount of time spent performing the actual request…",4,[[["self"]],["duration"]]],[11,"total_time","","Get the total time for the entire request. This will…",4,[[["self"]],["duration"]]],[11,"redirect_time","","If automatic redirect following is enabled, gets the total…",4,[[["self"]],["duration"]]],[0,"auth","","Types for working with HTTP authentication methods.",null,null],[3,"Credentials","isahc::auth","Credentials consisting of a username and a secret…",null,null],[3,"Authentication","","Specifies one or more HTTP authentication schemes to use.",null,null],[11,"new","","Create credentials from a username and password.",5,[[],["self"]]],[11,"none","","Disable all authentication schemes. This is the default.",6,[[],["self"]]],[11,"all","","Enable all available authentication schemes.",6,[[],["self"]]],[11,"basic","","HTTP Basic authentication.",6,[[],["self"]]],[11,"digest","","HTTP Digest authentication.",6,[[],["self"]]],[0,"config","isahc","Definition of all client and request configuration options.",null,null],[3,"ResolveMap","isahc::config","A mapping of host and port pairs to IP addresses.",null,null],[3,"CaCertificate","","A public CA certificate bundle file.",null,null],[3,"ClientCertificate","","A public key certificate file.",null,null],[3,"PrivateKey","","A private key file.",null,null],[3,"SslOption","","A flag that can be used to alter the behavior of SSL/TLS…",null,null],[3,"VersionNegotiation","","A strategy for selecting what HTTP versions should be used…",null,null],[3,"NetworkInterface","","Used to configure which local addresses or interfaces…",null,null],[4,"DnsCache","","DNS caching configuration.",null,null],[13,"Disable","","Disable DNS caching entirely.",7,null],[13,"Timeout","","Enable DNS caching and keep entries in the cache for the…",7,null],[13,"Forever","","Enable DNS caching and cache entries forever.",7,null],[4,"RedirectPolicy","","Describes a policy for handling server redirects.",null,null],[13,"None","","Do not apply any special treatment to redirect responses.…",8,null],[13,"Follow","","Follow all redirects automatically.",8,null],[13,"Limit","","Follow redirects automatically up to a maximum number of…",8,null],[11,"new","","Create a new empty resolve map.",9,[[],["self"]]],[11,"add","","Add a DNS mapping for a given host and port pair.",9,[[["u16"],["a"],["h"]],["self"]]],[11,"pem_file","","Get a certificate from a PEM-encoded file.",10,[[],["self"]]],[11,"der_file","","Get a certificate from a DER-encoded file.",10,[[],["self"]]],[11,"p12_file","","Get a certificate from a PKCS#12-encoded file.",10,[[],["self"]]],[11,"pem_file","","Get a PEM-encoded private key file.",11,[[],["self"]]],[11,"der_file","","Get a DER-encoded private key file.",11,[[],["self"]]],[11,"file","","Get a CA certificate from a path to a certificate bundle…",12,[[],["self"]]],[18,"NONE","","An empty set of options. This is the default.",13,null],[18,"DANGER_ACCEPT_INVALID_CERTS","","Disables certificate validation.",13,null],[18,"DANGER_ACCEPT_INVALID_HOSTS","","Disables hostname verification on certificates.",13,null],[18,"DANGER_ACCEPT_REVOKED_CERTS","","Disables certificate revocation checks for backends where…",13,null],[8,"Configurable","","Provides additional methods when building a request for…",null,null],[11,"timeout","","Set a maximum amount of time that a request is allowed to…",14,[[["duration"]],["self"]]],[11,"connect_timeout","","Set a timeout for the initial connection phase.",14,[[["duration"]],["self"]]],[11,"version_negotiation","","Configure how the use of HTTP versions should be…",14,[[["versionnegotiation"]],["self"]]],[11,"redirect_policy","","Set a policy for automatically following server redirects.",14,[[["redirectpolicy"]],["self"]]],[11,"auto_referer","","Update the `Referer` header automatically when following…",14,[[],["self"]]],[11,"authentication","","Set one or more default HTTP authentication methods to…",14,[[["authentication"]],["self"]]],[11,"credentials","","Set the credentials to use for HTTP authentication.",14,[[["credentials"]],["self"]]],[11,"tcp_keepalive","","Enable TCP keepalive with a given probe interval.",14,[[["duration"]],["self"]]],[11,"tcp_nodelay","","Enables the `TCP_NODELAY` option on connect.",14,[[],["self"]]],[11,"interface","","Bind local socket connections to a particular network…",14,[[],["self"]]],[11,"proxy","","Set a proxy to use for requests.",14,[[],["self"]]],[11,"proxy_blacklist","","Disable proxy usage for the provided list of hosts.",14,[[["i"]],["self"]]],[11,"proxy_authentication","","Set one or more HTTP authentication methods to attempt to…",14,[[["authentication"]],["self"]]],[11,"proxy_credentials","","Set the credentials to use for proxy authentication.",14,[[["credentials"]],["self"]]],[11,"max_upload_speed","","Set a maximum upload speed for the request body, in bytes…",14,[[["u64"]],["self"]]],[11,"max_download_speed","","Set a maximum download speed for the response body, in…",14,[[["u64"]],["self"]]],[11,"dns_servers","","Set a list of specific DNS servers to be used for DNS…",14,[[["i"]],["self"]]],[11,"ssl_client_certificate","","Set a custom SSL/TLS client certificate to use for client…",14,[[["clientcertificate"]],["self"]]],[11,"ssl_ca_certificate","","Set a custom SSL/TLS CA certificate bundle to use for…",14,[[["cacertificate"]],["self"]]],[11,"ssl_ciphers","","Set a list of ciphers to use for SSL/TLS connections.",14,[[["i"]],["self"]]],[11,"ssl_options","","Set various options for this request that control SSL/TLS…",14,[[["ssloption"]],["self"]]],[11,"metrics","","Enable or disable comprehensive per-request metrics…",14,[[["bool"]],["self"]]],[11,"latest_compatible","","Always prefer the latest supported version with a…",15,[[],["self"]]],[11,"http10","","Connect via HTTP/1.0 and do not attempt to use a higher…",15,[[],["self"]]],[11,"http11","","Connect via HTTP/1.1 and do not attempt to use a higher…",15,[[],["self"]]],[11,"http2","","Connect via HTTP/2. Failure to connect will not fall back…",15,[[],["self"]]],[11,"any","","Bind to whatever the networking stack finds suitable. This…",16,[[],["self"]]],[11,"name","","Bind to the interface with the given name (such as…",16,[[],["self"]]],[11,"host","","Bind to the given local host or address. This can either…",16,[[],["self"]]],[0,"prelude","isahc","A \"prelude\" for importing common Isahc types.",null,null],[8,"RequestExt","","Extension methods on an HTTP request.",null,null],[10,"send","","Send the HTTP request synchronously using the default…",17,[[],[["response",["body"]],["result",["response","error"]],["error"]]]],[10,"send_async","","Sends the HTTP request asynchronously using the default…",17,[[],["responsefuture"]]],[8,"ResponseExt","","Provides extension methods for working with HTTP responses.",null,null],[10,"effective_uri","","Get the effective URI of this response. This value differs…",18,[[["self"]],[["option",["uri"]],["uri"]]]],[10,"metrics","","If request metrics are enabled for this particular…",18,[[["self"]],[["option",["metrics"]],["metrics"]]]],[10,"copy_to","","Copy the response body into a writer.",18,[[["self"]],[["result",["u64"]],["u64"]]]],[11,"copy_to_file","","Write the response body to a file.",18,[[["self"]],[["result",["u64"]],["u64"]]]],[10,"text","","Read the response body as a string.",18,[[["self"]],[["result",["string"]],["string"]]]],[10,"text_async","","Read the response body as a string asynchronously.",18,[[["self"]],["text"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",19,[[["t"]],["t"]]],[11,"into","","",19,[[],["u"]]],[11,"try_from","","",19,[[["u"]],["result"]]],[11,"try_into","","",19,[[],["result"]]],[11,"borrow","","",19,[[["self"]],["t"]]],[11,"borrow_mut","","",19,[[["self"]],["t"]]],[11,"type_id","","",19,[[["self"]],["typeid"]]],[11,"try_poll","","",19,[[["pin"],["f"],["context"]],["poll"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","isahc::auth","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,[[["self"],["t"]]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,[[["self"],["t"]]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","isahc::config","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,[[["self"],["t"]]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,[[["self"],["t"]]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,[[["self"],["t"]]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"from","","",13,[[["t"]],["t"]]],[11,"into","","",13,[[],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,[[["self"],["t"]]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"type_id","","",13,[[["self"]],["typeid"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"into","","",15,[[],["u"]]],[11,"to_owned","","",15,[[["self"]],["t"]]],[11,"clone_into","","",15,[[["self"],["t"]]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"try_into","","",15,[[],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"type_id","","",15,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[],["u"]]],[11,"to_owned","","",16,[[["self"]],["t"]]],[11,"clone_into","","",16,[[["self"],["t"]]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"try_into","","",16,[[],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"type_id","","",16,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,[[["self"],["t"]]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,[[["self"],["t"]]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","isahc","",1,[[],["self"]]],[11,"from","","",1,[[["vec",["u8"]],["u8"]],["self"]]],[11,"from","","",1,[[],["self"]]],[11,"from","","",1,[[["string"]],["self"]]],[11,"from","","",1,[[["str"]],["self"]]],[11,"from","","",1,[[["option"]],["self"]]],[11,"from","isahc::config","",7,[[["duration"]],["self"]]],[11,"from","","",16,[[["ipaddr"]],["self"]]],[11,"clone","isahc","",4,[[["self"]],["metrics"]]],[11,"clone","isahc::auth","",5,[[["self"]],["credentials"]]],[11,"clone","","",6,[[["self"]],["authentication"]]],[11,"clone","isahc::config","",7,[[["self"]],["dnscache"]]],[11,"clone","","",9,[[["self"]],["resolvemap"]]],[11,"clone","","",8,[[["self"]],["redirectpolicy"]]],[11,"clone","","",10,[[["self"]],["clientcertificate"]]],[11,"clone","","",11,[[["self"]],["privatekey"]]],[11,"clone","","",12,[[["self"]],["cacertificate"]]],[11,"clone","","",13,[[["self"]],["ssloption"]]],[11,"clone","","",15,[[["self"]],["versionnegotiation"]]],[11,"clone","","",16,[[["self"]],["networkinterface"]]],[11,"default","isahc","",1,[[],["self"]]],[11,"default","","",2,[[],["self"]]],[11,"default","isahc::auth","",6,[[],["self"]]],[11,"default","isahc::config","",7,[[],["self"]]],[11,"default","","",9,[[],["resolvemap"]]],[11,"default","","",8,[[],["self"]]],[11,"default","","",13,[[],["self"]]],[11,"default","","",15,[[],["self"]]],[11,"default","","",16,[[],["self"]]],[11,"eq","","",8,[[["redirectpolicy"],["self"]],["bool"]]],[11,"ne","","",8,[[["redirectpolicy"],["self"]],["bool"]]],[11,"fmt","isahc","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",19,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","isahc::auth","",5,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",6,[[["formatter"],["self"]],["result"]]],[11,"fmt","isahc::config","",7,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",8,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",10,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",11,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",12,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",13,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",15,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",16,[[["formatter"],["self"]],["result"]]],[11,"fmt","isahc","",0,[[["formatter"],["self"]],["result"]]],[11,"bitor","isahc::auth","",6,[[],["self"]]],[11,"bitor","isahc::config","",13,[[],["self"]]],[11,"bitor_assign","isahc::auth","",6,[[["self"]]]],[11,"bitor_assign","isahc::config","",13,[[["self"]]]],[11,"description","isahc","",0,[[["self"]],["str"]]],[11,"cause","","",0,[[["self"]],[["stderror"],["option",["stderror"]]]]],[11,"read","","",1,[[["self"]],[["result",["usize"]],["usize"]]]],[11,"poll","","",19,[[["self"],["pin"],["context"]],["poll"]]],[11,"poll_read","","",1,[[["self"],["pin"],["context"]],[["result",["usize"]],["poll",["result"]]]]],[11,"copy_to_file","","Write the response body to a file.",18,[[["self"]],[["result",["u64"]],["u64"]]]]],"p":[[4,"Error"],[3,"Body"],[3,"HttpClientBuilder"],[3,"HttpClient"],[3,"Metrics"],[3,"Credentials"],[3,"Authentication"],[4,"DnsCache"],[4,"RedirectPolicy"],[3,"ResolveMap"],[3,"ClientCertificate"],[3,"PrivateKey"],[3,"CaCertificate"],[3,"SslOption"],[8,"Configurable"],[3,"VersionNegotiation"],[3,"NetworkInterface"],[8,"RequestExt"],[8,"ResponseExt"],[3,"ResponseFuture"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);