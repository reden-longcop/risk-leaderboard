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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_db__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// app/api/players/route.ts\n\n\nasync function GET() {\n    try {\n        const players = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.getPlayers)();\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(players);\n    } catch (err) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Failed to fetch players\", {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const players = await req.json();\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.savePlayers)(players);\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Players saved\", {\n            status: 200\n        });\n    } catch (err) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(\"Failed to save players\", {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3BsYXllcnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUN1QjtBQUNSO0FBRW5DLGVBQWVHO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1KLG1EQUFVQTtRQUNoQyxPQUFPRSxxREFBWUEsQ0FBQ0csSUFBSSxDQUFDRDtJQUMzQixFQUFFLE9BQU9FLEtBQUs7UUFDWixPQUFPLElBQUlKLHFEQUFZQSxDQUFDLDJCQUEyQjtZQUFFSyxRQUFRO1FBQUk7SUFDbkU7QUFDRjtBQUVPLGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU1MLFVBQVUsTUFBTUssSUFBSUosSUFBSTtRQUM5QixNQUFNSixvREFBV0EsQ0FBQ0c7UUFDbEIsT0FBTyxJQUFJRixxREFBWUEsQ0FBQyxpQkFBaUI7WUFBRUssUUFBUTtRQUFJO0lBQ3pELEVBQUUsT0FBT0QsS0FBSztRQUNaLE9BQU8sSUFBSUoscURBQVlBLENBQUMsMEJBQTBCO1lBQUVLLFFBQVE7UUFBSTtJQUNsRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvcmVkZW5sb25nY29wL0RvY3VtZW50cy9yaXNrLWxlYWRlcmJvYXJkLWdpdGh1Yi9hcHAvYXBpL3BsYXllcnMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9wbGF5ZXJzL3JvdXRlLnRzXG5pbXBvcnQgeyBnZXRQbGF5ZXJzLCBzYXZlUGxheWVycyB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHBsYXllcnMgPSBhd2FpdCBnZXRQbGF5ZXJzKClcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocGxheWVycylcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJGYWlsZWQgdG8gZmV0Y2ggcGxheWVyc1wiLCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGxheWVycyA9IGF3YWl0IHJlcS5qc29uKClcbiAgICBhd2FpdCBzYXZlUGxheWVycyhwbGF5ZXJzKVxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiUGxheWVycyBzYXZlZFwiLCB7IHN0YXR1czogMjAwIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRmFpbGVkIHRvIHNhdmUgcGxheWVyc1wiLCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRQbGF5ZXJzIiwic2F2ZVBsYXllcnMiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJwbGF5ZXJzIiwianNvbiIsImVyciIsInN0YXR1cyIsIlBPU1QiLCJyZXEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/players/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPlayers: () => (/* binding */ getPlayers),\n/* harmony export */   savePlayers: () => (/* binding */ savePlayers)\n/* harmony export */ });\n/* harmony import */ var _libsql_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libsql/client */ \"@libsql/client\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libsql_client__WEBPACK_IMPORTED_MODULE_0__]);\n_libsql_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// lib/db.ts\n\n\nconst client = (0,_libsql_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    url: process.env.TURSO_DATABASE_URL,\n    authToken: process.env.TURSO_AUTH_TOKEN\n});\nasync function getPlayers() {\n    const result = await client.execute(\"SELECT * FROM players\");\n    const players = result.rows.map((row)=>({\n            id: row.id,\n            name: row.name,\n            wins: Number(row.wins),\n            color: row.color\n        }));\n    return players;\n}\nasync function savePlayers(players) {\n    const tx = await client.transaction(\"write\");\n    try {\n        // Optional: clear all existing players if replacing\n        await tx.execute(\"DELETE FROM players\");\n        for (const player of players){\n            await tx.execute({\n                sql: \"INSERT INTO players (id, name, wins, color) VALUES (?, ?, ?, ?)\",\n                args: [\n                    player.id || (0,crypto__WEBPACK_IMPORTED_MODULE_1__.randomUUID)(),\n                    player.name,\n                    player.wins,\n                    player.color\n                ]\n            });\n        }\n        await tx.commit();\n    } catch (error) {\n        await tx.rollback();\n        console.error(\"Error saving players:\", error);\n        throw new Error(\"Failed to save players\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxZQUFZO0FBQ2lDO0FBQ1Y7QUFTbkMsTUFBTUUsU0FBU0YsNERBQVlBLENBQUM7SUFDMUJHLEtBQUtDLFFBQVFDLEdBQUcsQ0FBQ0Msa0JBQWtCO0lBQ25DQyxXQUFXSCxRQUFRQyxHQUFHLENBQUNHLGdCQUFnQjtBQUN6QztBQUVPLGVBQWVDO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTVIsT0FBT1MsT0FBTyxDQUFDO0lBRXBDLE1BQU1DLFVBQW9CRixPQUFPRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO1lBQ2xEQyxJQUFJRCxJQUFJQyxFQUFFO1lBQ1ZDLE1BQU1GLElBQUlFLElBQUk7WUFDZEMsTUFBTUMsT0FBT0osSUFBSUcsSUFBSTtZQUNyQkUsT0FBT0wsSUFBSUssS0FBSztRQUNsQjtJQUVBLE9BQU9SO0FBQ1Q7QUFFTyxlQUFlUyxZQUFZVCxPQUFpQjtJQUNqRCxNQUFNVSxLQUFLLE1BQU1wQixPQUFPcUIsV0FBVyxDQUFDO0lBRXBDLElBQUk7UUFDRixvREFBb0Q7UUFDcEQsTUFBTUQsR0FBR1gsT0FBTyxDQUFDO1FBRWpCLEtBQUssTUFBTWEsVUFBVVosUUFBUztZQUM1QixNQUFNVSxHQUFHWCxPQUFPLENBQUM7Z0JBQ2ZjLEtBQUs7Z0JBQ0xDLE1BQU07b0JBQUNGLE9BQU9SLEVBQUUsSUFBSWYsa0RBQVVBO29CQUFJdUIsT0FBT1AsSUFBSTtvQkFBRU8sT0FBT04sSUFBSTtvQkFBRU0sT0FBT0osS0FBSztpQkFBQztZQUMzRTtRQUNGO1FBRUEsTUFBTUUsR0FBR0ssTUFBTTtJQUNqQixFQUFFLE9BQU9DLE9BQU87UUFDZCxNQUFNTixHQUFHTyxRQUFRO1FBQ2pCQyxRQUFRRixLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxNQUFNLElBQUlHLE1BQU07SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3JlZGVubG9uZ2NvcC9Eb2N1bWVudHMvcmlzay1sZWFkZXJib2FyZC1naXRodWIvbGliL2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9kYi50c1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBsaWJzcWwvY2xpZW50XCJcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tIFwiY3J5cHRvXCJcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXIge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICB3aW5zOiBudW1iZXJcbiAgY29sb3I6IHN0cmluZ1xufVxuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICB1cmw6IHByb2Nlc3MuZW52LlRVUlNPX0RBVEFCQVNFX1VSTCEsXG4gIGF1dGhUb2tlbjogcHJvY2Vzcy5lbnYuVFVSU09fQVVUSF9UT0tFTiEsXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVycygpOiBQcm9taXNlPFBsYXllcltdPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5leGVjdXRlKFwiU0VMRUNUICogRlJPTSBwbGF5ZXJzXCIpXG5cbiAgY29uc3QgcGxheWVyczogUGxheWVyW10gPSByZXN1bHQucm93cy5tYXAoKHJvdykgPT4gKHtcbiAgICBpZDogcm93LmlkIGFzIHN0cmluZyxcbiAgICBuYW1lOiByb3cubmFtZSBhcyBzdHJpbmcsXG4gICAgd2luczogTnVtYmVyKHJvdy53aW5zKSxcbiAgICBjb2xvcjogcm93LmNvbG9yIGFzIHN0cmluZyxcbiAgfSkpXG5cbiAgcmV0dXJuIHBsYXllcnNcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVQbGF5ZXJzKHBsYXllcnM6IFBsYXllcltdKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHR4ID0gYXdhaXQgY2xpZW50LnRyYW5zYWN0aW9uKFwid3JpdGVcIilcblxuICB0cnkge1xuICAgIC8vIE9wdGlvbmFsOiBjbGVhciBhbGwgZXhpc3RpbmcgcGxheWVycyBpZiByZXBsYWNpbmdcbiAgICBhd2FpdCB0eC5leGVjdXRlKFwiREVMRVRFIEZST00gcGxheWVyc1wiKVxuXG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgICAgYXdhaXQgdHguZXhlY3V0ZSh7XG4gICAgICAgIHNxbDogXCJJTlNFUlQgSU5UTyBwbGF5ZXJzIChpZCwgbmFtZSwgd2lucywgY29sb3IpIFZBTFVFUyAoPywgPywgPywgPylcIixcbiAgICAgICAgYXJnczogW3BsYXllci5pZCB8fCByYW5kb21VVUlEKCksIHBsYXllci5uYW1lLCBwbGF5ZXIud2lucywgcGxheWVyLmNvbG9yXSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXdhaXQgdHguY29tbWl0KClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhd2FpdCB0eC5yb2xsYmFjaygpXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBwbGF5ZXJzOlwiLCBlcnJvcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSBwbGF5ZXJzXCIpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJyYW5kb21VVUlEIiwiY2xpZW50IiwidXJsIiwicHJvY2VzcyIsImVudiIsIlRVUlNPX0RBVEFCQVNFX1VSTCIsImF1dGhUb2tlbiIsIlRVUlNPX0FVVEhfVE9LRU4iLCJnZXRQbGF5ZXJzIiwicmVzdWx0IiwiZXhlY3V0ZSIsInBsYXllcnMiLCJyb3dzIiwibWFwIiwicm93IiwiaWQiLCJuYW1lIiwid2lucyIsIk51bWJlciIsImNvbG9yIiwic2F2ZVBsYXllcnMiLCJ0eCIsInRyYW5zYWN0aW9uIiwicGxheWVyIiwic3FsIiwiYXJncyIsImNvbW1pdCIsImVycm9yIiwicm9sbGJhY2siLCJjb25zb2xlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_redenlongcop_Documents_risk_leaderboard_github_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/players/route.ts */ \"(rsc)/./app/api/players/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_redenlongcop_Documents_risk_leaderboard_github_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_redenlongcop_Documents_risk_leaderboard_github_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/players/route\",\n        pathname: \"/api/players\",\n        filename: \"route\",\n        bundlePath: \"app/api/players/route\"\n    },\n    resolvedPagePath: \"/Users/redenlongcop/Documents/risk-leaderboard-github/app/api/players/route.ts\",\n    nextConfigOutput,\n    userland: _Users_redenlongcop_Documents_risk_leaderboard_github_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwbGF5ZXJzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwbGF5ZXJzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcGxheWVycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJlZGVubG9uZ2NvcCUyRkRvY3VtZW50cyUyRnJpc2stbGVhZGVyYm9hcmQtZ2l0aHViJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnJlZGVubG9uZ2NvcCUyRkRvY3VtZW50cyUyRnJpc2stbGVhZGVyYm9hcmQtZ2l0aHViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYscUMiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JlZGVubG9uZ2NvcC9Eb2N1bWVudHMvcmlzay1sZWFkZXJib2FyZC1naXRodWIvYXBwL2FwaS9wbGF5ZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wbGF5ZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcGxheWVyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcGxheWVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yZWRlbmxvbmdjb3AvRG9jdW1lbnRzL3Jpc2stbGVhZGVyYm9hcmQtZ2l0aHViL2FwcC9hcGkvcGxheWVycy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();