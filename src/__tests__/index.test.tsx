import React from "react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { mockGetRequest } from "../../mocks/helpers/mockRequest";
import { mockResponse } from "../../mocks/helpers/mockResponse";
import game from "../../mocks/api/game/[id]"


// Good starting point: https://testing-library.com/docs/react-testing-library/example-intro

// TODO setup your mock api here (from the mocks folder)
// Feel free to add more files to test various other components

describe("Tests", () => {
	it('should return 200 and game info if game exists with the given ID', async () => {
		const req = mockGetRequest({ "id": "gameId" });
		const res = mockResponse();
		await game(req, res);
		expect(res.statusCode).toBe(200);
		expect(res._getJSONData().id).toBe("gameId");
	});

	it('should return 400 if ID is missing from request', async () => {
		const req = mockGetRequest({});
		const res = mockResponse();
		await game(req, res);
		expect(res.statusCode).toBe(400);
	});

	it('should return 404 if no game exists with the given ID', async () => {
		const req = mockGetRequest({ "id": "wrongId" });
		const res = mockResponse();
		await game(req, res);
		expect(res.statusCode).toBe(404);
	});
});
