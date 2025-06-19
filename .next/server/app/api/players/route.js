/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/players/route";
exports.ids = ["app/api/players/route"];
exports.modules = {

/***/ "(rsc)/./app/api/players/route.ts":
/*!**********************************!*\
  !*** ./app/api/players/route.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_db__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// app/api/players/route.ts\n\n\nasync function GET() {\n    try {\n        const players = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.getPlayers)();\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(players);\n    } catch (err) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Failed to fetch players\", {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const players = await req.json();\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.savePlayers)(players);\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Players saved\", {\n            status: 200\n        });\n    } catch (err) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Failed to save players\", {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3BsYXllcnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUN1QjtBQUNSO0FBRW5DLGVBQWVHO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1KLG1EQUFVQTtRQUNoQyxPQUFPRSxxREFBWUEsQ0FBQ0csSUFBSSxDQUFDRDtJQUMzQixFQUFFLE9BQU9FLEtBQUs7UUFDWixPQUFPLElBQUlKLHFEQUFZQSxDQUFDLDJCQUEyQjtZQUFFSyxRQUFRO1FBQUk7SUFDbkU7QUFDRjtBQUVPLGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU1MLFVBQVUsTUFBTUssSUFBSUosSUFBSTtRQUM5QixNQUFNSixvREFBV0EsQ0FBQ0c7UUFDbEIsT0FBTyxJQUFJRixxREFBWUEsQ0FBQyxpQkFBaUI7WUFBRUssUUFBUTtRQUFJO0lBQ3pELEVBQUUsT0FBT0QsS0FBSztRQUNaLE9BQU8sSUFBSUoscURBQVlBLENBQUMsMEJBQTBCO1lBQUVLLFFBQVE7UUFBSTtJQUNsRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvcmVkZW5sb25nY29wL0RvY3VtZW50cy9yaXNrLWxlYWRlcmJvYXJkL2FwcC9hcGkvcGxheWVycy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL3BsYXllcnMvcm91dGUudHNcbmltcG9ydCB7IGdldFBsYXllcnMsIHNhdmVQbGF5ZXJzIH0gZnJvbSBcIkAvbGliL2RiXCJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGxheWVycyA9IGF3YWl0IGdldFBsYXllcnMoKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwbGF5ZXJzKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkZhaWxlZCB0byBmZXRjaCBwbGF5ZXJzXCIsIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgcmVxLmpzb24oKVxuICAgIGF3YWl0IHNhdmVQbGF5ZXJzKHBsYXllcnMpXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJQbGF5ZXJzIHNhdmVkXCIsIHsgc3RhdHVzOiAyMDAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJGYWlsZWQgdG8gc2F2ZSBwbGF5ZXJzXCIsIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldFBsYXllcnMiLCJzYXZlUGxheWVycyIsIk5leHRSZXNwb25zZSIsIkdFVCIsInBsYXllcnMiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiUE9TVCIsInJlcSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/players/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPlayers: () => (/* binding */ getPlayers),\n/* harmony export */   savePlayers: () => (/* binding */ savePlayers)\n/* harmony export */ });\n/* harmony import */ var _libsql_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libsql/client */ \"@libsql/client\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libsql_client__WEBPACK_IMPORTED_MODULE_0__]);\n_libsql_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// lib/db.ts\n\n\nconst client = (0,_libsql_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    url: process.env.TURSO_DATABASE_URL,\n    authToken: process.env.TURSO_AUTH_TOKEN\n});\nasync function getPlayers() {\n    const result = await client.execute(\"SELECT * FROM players\");\n    const players = result.rows.map((row)=>({\n            id: row.id,\n            name: row.name,\n            wins: Number(row.wins),\n            color: row.color\n        }));\n    return players;\n}\nasync function savePlayers(players) {\n    const tx = await client.transaction(\"write\");\n    try {\n        // Optional: clear all existing players if replacing\n        await tx.execute(\"DELETE FROM players\");\n        for (const player of players){\n            await tx.execute({\n                sql: \"INSERT INTO players (id, name, wins, color) VALUES (?, ?, ?, ?)\",\n                args: [\n                    player.id || (0,crypto__WEBPACK_IMPORTED_MODULE_1__.randomUUID)(),\n                    player.name,\n                    player.wins,\n                    player.color\n                ]\n            });\n        }\n        await tx.commit();\n    } catch (error) {\n        await tx.rollback();\n        console.error(\"Error saving players:\", error);\n        throw new Error(\"Failed to save players\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ2lDO0FBQ1Y7QUFTbkMsTUFBTUUsU0FBU0YsNERBQVlBLENBQUM7SUFDMUJHLEtBQUtDLFFBQVFDLEdBQUcsQ0FBQ0Msa0JBQWtCO0lBQ25DQyxXQUFXSCxRQUFRQyxHQUFHLENBQUNHLGdCQUFnQjtBQUN6QztBQUVPLGVBQWVDO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTVIsT0FBT1MsT0FBTyxDQUFDO0lBRXBDLE1BQU1DLFVBQW9CRixPQUFPRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO1lBQ2xEQyxJQUFJRCxJQUFJQyxFQUFFO1lBQ1ZDLE1BQU1GLElBQUlFLElBQUk7WUFDZEMsTUFBTUMsT0FBT0osSUFBSUcsSUFBSTtZQUNyQkUsT0FBT0wsSUFBSUssS0FBSztRQUNsQjtJQUVBLE9BQU9SO0FBQ1Q7QUFFTyxlQUFlUyxZQUFZVCxPQUFpQjtJQUNqRCxNQUFNVSxLQUFLLE1BQU1wQixPQUFPcUIsV0FBVyxDQUFDO0lBRXBDLElBQUk7UUFDRixvREFBb0Q7UUFDcEQsTUFBTUQsR0FBR1gsT0FBTyxDQUFDO1FBRWpCLEtBQUssTUFBTWEsVUFBVVosUUFBUztZQUM1QixNQUFNVSxHQUFHWCxPQUFPLENBQUM7Z0JBQ2ZjLEtBQUs7Z0JBQ0xDLE1BQU07b0JBQUNGLE9BQU9SLEVBQUUsSUFBSWYsa0RBQVVBO29CQUFJdUIsT0FBT1AsSUFBSTtvQkFBRU8sT0FBT04sSUFBSTtvQkFBRU0sT0FBT0osS0FBSztpQkFBQztZQUMzRTtRQUNGO1FBRUEsTUFBTUUsR0FBR0ssTUFBTTtJQUNqQixFQUFFLE9BQU9DLE9BQU87UUFDZCxNQUFNTixHQUFHTyxRQUFRO1FBQ2pCQyxRQUFRRixLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxNQUFNLElBQUlHLE1BQU07SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3JlZGVubG9uZ2NvcC9Eb2N1bWVudHMvcmlzay1sZWFkZXJib2FyZC9saWIvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2RiLnRzXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQGxpYnNxbC9jbGllbnRcIlxuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gXCJjcnlwdG9cIlxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllciB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHdpbnM6IG51bWJlclxuICBjb2xvcjogc3RyaW5nXG59XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHVybDogcHJvY2Vzcy5lbnYuVFVSU09fREFUQUJBU0VfVVJMISxcbiAgYXV0aFRva2VuOiBwcm9jZXNzLmVudi5UVVJTT19BVVRIX1RPS0VOISxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQbGF5ZXJzKCk6IFByb21pc2U8UGxheWVyW10+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LmV4ZWN1dGUoXCJTRUxFQ1QgKiBGUk9NIHBsYXllcnNcIilcblxuICBjb25zdCBwbGF5ZXJzOiBQbGF5ZXJbXSA9IHJlc3VsdC5yb3dzLm1hcCgocm93KSA9PiAoe1xuICAgIGlkOiByb3cuaWQgYXMgc3RyaW5nLFxuICAgIG5hbWU6IHJvdy5uYW1lIGFzIHN0cmluZyxcbiAgICB3aW5zOiBOdW1iZXIocm93LndpbnMpLFxuICAgIGNvbG9yOiByb3cuY29sb3IgYXMgc3RyaW5nLFxuICB9KSlcblxuICByZXR1cm4gcGxheWVyc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVBsYXllcnMocGxheWVyczogUGxheWVyW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdHggPSBhd2FpdCBjbGllbnQudHJhbnNhY3Rpb24oXCJ3cml0ZVwiKVxuXG4gIHRyeSB7XG4gICAgLy8gT3B0aW9uYWw6IGNsZWFyIGFsbCBleGlzdGluZyBwbGF5ZXJzIGlmIHJlcGxhY2luZ1xuICAgIGF3YWl0IHR4LmV4ZWN1dGUoXCJERUxFVEUgRlJPTSBwbGF5ZXJzXCIpXG5cbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gICAgICBhd2FpdCB0eC5leGVjdXRlKHtcbiAgICAgICAgc3FsOiBcIklOU0VSVCBJTlRPIHBsYXllcnMgKGlkLCBuYW1lLCB3aW5zLCBjb2xvcikgVkFMVUVTICg/LCA/LCA/LCA/KVwiLFxuICAgICAgICBhcmdzOiBbcGxheWVyLmlkIHx8IHJhbmRvbVVVSUQoKSwgcGxheWVyLm5hbWUsIHBsYXllci53aW5zLCBwbGF5ZXIuY29sb3JdLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhd2FpdCB0eC5jb21taXQoKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGF3YWl0IHR4LnJvbGxiYWNrKClcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIHBsYXllcnM6XCIsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBzYXZlIHBsYXllcnNcIilcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInJhbmRvbVVVSUQiLCJjbGllbnQiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiVFVSU09fREFUQUJBU0VfVVJMIiwiYXV0aFRva2VuIiwiVFVSU09fQVVUSF9UT0tFTiIsImdldFBsYXllcnMiLCJyZXN1bHQiLCJleGVjdXRlIiwicGxheWVycyIsInJvd3MiLCJtYXAiLCJyb3ciLCJpZCIsIm5hbWUiLCJ3aW5zIiwiTnVtYmVyIiwiY29sb3IiLCJzYXZlUGxheWVycyIsInR4IiwidHJhbnNhY3Rpb24iLCJwbGF5ZXIiLCJzcWwiLCJhcmdzIiwiY29tbWl0IiwiZXJyb3IiLCJyb2xsYmFjayIsImNvbnNvbGUiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_redenlongcop_Documents_risk_leaderboard_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/players/route.ts */ \"(rsc)/./app/api/players/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_redenlongcop_Documents_risk_leaderboard_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_redenlongcop_Documents_risk_leaderboard_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/players/route\",\n        pathname: \"/api/players\",\n        filename: \"route\",\n        bundlePath: \"app/api/players/route\"\n    },\n    resolvedPagePath: \"/Users/redenlongcop/Documents/risk-leaderboard/app/api/players/route.ts\",\n    nextConfigOutput,\n    userland: _Users_redenlongcop_Documents_risk_leaderboard_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwbGF5ZXJzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwbGF5ZXJzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcGxheWVycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJlZGVubG9uZ2NvcCUyRkRvY3VtZW50cyUyRnJpc2stbGVhZGVyYm9hcmQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcmVkZW5sb25nY29wJTJGRG9jdW1lbnRzJTJGcmlzay1sZWFkZXJib2FyZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGLHFDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9yZWRlbmxvbmdjb3AvRG9jdW1lbnRzL3Jpc2stbGVhZGVyYm9hcmQvYXBwL2FwaS9wbGF5ZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wbGF5ZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcGxheWVyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcGxheWVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yZWRlbmxvbmdjb3AvRG9jdW1lbnRzL3Jpc2stbGVhZGVyYm9hcmQvYXBwL2FwaS9wbGF5ZXJzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@libsql/client":
/*!*********************************!*\
  !*** external "@libsql/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@libsql/client");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();