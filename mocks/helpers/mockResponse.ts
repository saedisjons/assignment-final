import { createResponse } from 'node-mocks-http';
import { NextApiResponse } from 'next';


export function mockResponse(): NextApiResponse {
	return createResponse();
}
