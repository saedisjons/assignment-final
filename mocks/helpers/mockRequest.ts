import { createRequest, } from 'node-mocks-http';
import { NextApiRequest } from 'next';

export function mockGetRequest(query: any): NextApiRequest {
	return createRequest({ method: "GET", query: query });
}