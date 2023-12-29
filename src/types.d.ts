interface DynamicConfig {
	Http: Http;
}

interface Router {
	EntryPoints: string[];
	Rule: string;
	Middlewares?: string[];
	Service: string;
	Tls?: Tls;
}

interface Http {
	Routers: { [key: string]: Router };
	Services: { [key: string]: Service };
}

interface Service {
	LoadBalancer: LoadBalancer;
}

interface LoadBalancer {
	PassHostHeader?: boolean;
	Servers: Server[];
}

interface Server {
	Url: string;
}

interface Tls {
	CertResolver?: string;
}
