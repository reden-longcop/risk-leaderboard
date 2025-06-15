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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\n\nasync function GET() {\n    try {\n        const players = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.getPlayers)();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(players);\n    } catch (error) {\n        console.error(\"Error fetching players:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch players\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const players = await request.json();\n        // Basic validation\n        if (!Array.isArray(players)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid data format\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate each player object\n        for (const player of players){\n            if (!player.id || !player.name || typeof player.wins !== \"number\" || !player.color) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"Invalid player data\"\n                }, {\n                    status: 400\n                });\n            }\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.savePlayers)(players);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Error saving players:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to save players\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3BsYXllcnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0RDtBQUNHO0FBRXhELGVBQWVHO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1ILG1EQUFVQTtRQUNoQyxPQUFPRCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDRDtJQUMzQixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT04scURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTBCLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQy9FO0FBQ0Y7QUFFTyxlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTU4sVUFBb0IsTUFBTU0sUUFBUUwsSUFBSTtRQUU1QyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDTSxNQUFNQyxPQUFPLENBQUNSLFVBQVU7WUFDM0IsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQixHQUFHO2dCQUFFRSxRQUFRO1lBQUk7UUFDM0U7UUFFQSw4QkFBOEI7UUFDOUIsS0FBSyxNQUFNSyxVQUFVVCxRQUFTO1lBQzVCLElBQUksQ0FBQ1MsT0FBT0MsRUFBRSxJQUFJLENBQUNELE9BQU9FLElBQUksSUFBSSxPQUFPRixPQUFPRyxJQUFJLEtBQUssWUFBWSxDQUFDSCxPQUFPSSxLQUFLLEVBQUU7Z0JBQ2xGLE9BQU9qQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUFzQixHQUFHO29CQUFFRSxRQUFRO2dCQUFJO1lBQzNFO1FBQ0Y7UUFFQSxNQUFNTixvREFBV0EsQ0FBQ0U7UUFDbEIsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFYSxTQUFTO1FBQUs7SUFDM0MsRUFBRSxPQUFPWixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU9OLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF5QixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUM5RTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvcmVkZW5sb25nY29wL0RvY3VtZW50cy9yaXNrLWxlYWRlcmJvYXJkLWdpdGh1Yi9hcHAvYXBpL3BsYXllcnMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCJcbmltcG9ydCB7IGdldFBsYXllcnMsIHNhdmVQbGF5ZXJzLCB0eXBlIFBsYXllciB9IGZyb20gXCJAL2xpYi9kYlwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGxheWVycyA9IGF3YWl0IGdldFBsYXllcnMoKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwbGF5ZXJzKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwbGF5ZXJzOlwiLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggcGxheWVyc1wiIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHBsYXllcnM6IFBsYXllcltdID0gYXdhaXQgcmVxdWVzdC5qc29uKClcblxuICAgIC8vIEJhc2ljIHZhbGlkYXRpb25cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGxheWVycykpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgZGF0YSBmb3JtYXRcIiB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZWFjaCBwbGF5ZXIgb2JqZWN0XG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgICAgaWYgKCFwbGF5ZXIuaWQgfHwgIXBsYXllci5uYW1lIHx8IHR5cGVvZiBwbGF5ZXIud2lucyAhPT0gXCJudW1iZXJcIiB8fCAhcGxheWVyLmNvbG9yKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgcGxheWVyIGRhdGFcIiB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgc2F2ZVBsYXllcnMocGxheWVycylcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBwbGF5ZXJzOlwiLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gc2F2ZSBwbGF5ZXJzXCIgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0UGxheWVycyIsInNhdmVQbGF5ZXJzIiwiR0VUIiwicGxheWVycyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJQT1NUIiwicmVxdWVzdCIsIkFycmF5IiwiaXNBcnJheSIsInBsYXllciIsImlkIiwibmFtZSIsIndpbnMiLCJjb2xvciIsInN1Y2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/players/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPlayers: () => (/* binding */ getPlayers),\n/* harmony export */   savePlayers: () => (/* binding */ savePlayers)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DB_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"leaderboard.json\");\n// Ensure data directory exists\nasync function ensureDataDir() {\n    const dataDir = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(DB_PATH);\n    try {\n        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.access(dataDir);\n    } catch  {\n        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.mkdir(dataDir, {\n            recursive: true\n        });\n    }\n}\n// Initialize database with default data if it doesn't exist\nasync function initializeDB() {\n    await ensureDataDir();\n    try {\n        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.access(DB_PATH);\n    } catch  {\n        const defaultPlayers = [\n            {\n                id: \"1\",\n                name: \"Napoleon\",\n                wins: 15,\n                color: \"#ef4444\"\n            },\n            {\n                id: \"2\",\n                name: \"Caesar\",\n                wins: 12,\n                color: \"#3b82f6\"\n            },\n            {\n                id: \"3\",\n                name: \"Alexander\",\n                wins: 10,\n                color: \"#22c55e\"\n            },\n            {\n                id: \"4\",\n                name: \"Hannibal\",\n                wins: 8,\n                color: \"#8b5cf6\"\n            }\n        ];\n        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.writeFile(DB_PATH, JSON.stringify(defaultPlayers, null, 2));\n    }\n}\nasync function getPlayers() {\n    await initializeDB();\n    try {\n        const data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(DB_PATH, \"utf-8\");\n        return JSON.parse(data);\n    } catch (error) {\n        console.error(\"Error reading players:\", error);\n        return [];\n    }\n}\nasync function savePlayers(players) {\n    await ensureDataDir();\n    try {\n        await fs__WEBPACK_IMPORTED_MODULE_0__.promises.writeFile(DB_PATH, JSON.stringify(players, null, 2));\n    } catch (error) {\n        console.error(\"Error saving players:\", error);\n        throw new Error(\"Failed to save players\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1DO0FBQ1o7QUFTdkIsTUFBTUcsVUFBVUQsZ0RBQVMsQ0FBQ0csUUFBUUMsR0FBRyxJQUFJLFFBQVE7QUFFakQsK0JBQStCO0FBQy9CLGVBQWVDO0lBQ2IsTUFBTUMsVUFBVU4sbURBQVksQ0FBQ0M7SUFDN0IsSUFBSTtRQUNGLE1BQU1GLHdDQUFFQSxDQUFDUyxNQUFNLENBQUNGO0lBQ2xCLEVBQUUsT0FBTTtRQUNOLE1BQU1QLHdDQUFFQSxDQUFDVSxLQUFLLENBQUNILFNBQVM7WUFBRUksV0FBVztRQUFLO0lBQzVDO0FBQ0Y7QUFFQSw0REFBNEQ7QUFDNUQsZUFBZUM7SUFDYixNQUFNTjtJQUVOLElBQUk7UUFDRixNQUFNTix3Q0FBRUEsQ0FBQ1MsTUFBTSxDQUFDUDtJQUNsQixFQUFFLE9BQU07UUFDTixNQUFNVyxpQkFBMkI7WUFDL0I7Z0JBQUVDLElBQUk7Z0JBQUtDLE1BQU07Z0JBQVlDLE1BQU07Z0JBQUlDLE9BQU87WUFBVTtZQUN4RDtnQkFBRUgsSUFBSTtnQkFBS0MsTUFBTTtnQkFBVUMsTUFBTTtnQkFBSUMsT0FBTztZQUFVO1lBQ3REO2dCQUFFSCxJQUFJO2dCQUFLQyxNQUFNO2dCQUFhQyxNQUFNO2dCQUFJQyxPQUFPO1lBQVU7WUFDekQ7Z0JBQUVILElBQUk7Z0JBQUtDLE1BQU07Z0JBQVlDLE1BQU07Z0JBQUdDLE9BQU87WUFBVTtTQUN4RDtRQUNELE1BQU1qQix3Q0FBRUEsQ0FBQ2tCLFNBQVMsQ0FBQ2hCLFNBQVNpQixLQUFLQyxTQUFTLENBQUNQLGdCQUFnQixNQUFNO0lBQ25FO0FBQ0Y7QUFFTyxlQUFlUTtJQUNwQixNQUFNVDtJQUVOLElBQUk7UUFDRixNQUFNVSxPQUFPLE1BQU10Qix3Q0FBRUEsQ0FBQ3VCLFFBQVEsQ0FBQ3JCLFNBQVM7UUFDeEMsT0FBT2lCLEtBQUtLLEtBQUssQ0FBQ0Y7SUFDcEIsRUFBRSxPQUFPRyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU8sRUFBRTtJQUNYO0FBQ0Y7QUFFTyxlQUFlRSxZQUFZQyxPQUFpQjtJQUNqRCxNQUFNdEI7SUFFTixJQUFJO1FBQ0YsTUFBTU4sd0NBQUVBLENBQUNrQixTQUFTLENBQUNoQixTQUFTaUIsS0FBS0MsU0FBUyxDQUFDUSxTQUFTLE1BQU07SUFDNUQsRUFBRSxPQUFPSCxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE1BQU0sSUFBSUksTUFBTTtJQUNsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvcmVkZW5sb25nY29wL0RvY3VtZW50cy9yaXNrLWxlYWRlcmJvYXJkLWdpdGh1Yi9saWIvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tIFwiZnNcIlxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllciB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHdpbnM6IG51bWJlclxuICBjb2xvcjogc3RyaW5nXG59XG5cbmNvbnN0IERCX1BBVEggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwibGVhZGVyYm9hcmQuanNvblwiKVxuXG4vLyBFbnN1cmUgZGF0YSBkaXJlY3RvcnkgZXhpc3RzXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVEYXRhRGlyKCkge1xuICBjb25zdCBkYXRhRGlyID0gcGF0aC5kaXJuYW1lKERCX1BBVEgpXG4gIHRyeSB7XG4gICAgYXdhaXQgZnMuYWNjZXNzKGRhdGFEaXIpXG4gIH0gY2F0Y2gge1xuICAgIGF3YWl0IGZzLm1rZGlyKGRhdGFEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIH1cbn1cblxuLy8gSW5pdGlhbGl6ZSBkYXRhYmFzZSB3aXRoIGRlZmF1bHQgZGF0YSBpZiBpdCBkb2Vzbid0IGV4aXN0XG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplREIoKSB7XG4gIGF3YWl0IGVuc3VyZURhdGFEaXIoKVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgZnMuYWNjZXNzKERCX1BBVEgpXG4gIH0gY2F0Y2gge1xuICAgIGNvbnN0IGRlZmF1bHRQbGF5ZXJzOiBQbGF5ZXJbXSA9IFtcbiAgICAgIHsgaWQ6IFwiMVwiLCBuYW1lOiBcIk5hcG9sZW9uXCIsIHdpbnM6IDE1LCBjb2xvcjogXCIjZWY0NDQ0XCIgfSxcbiAgICAgIHsgaWQ6IFwiMlwiLCBuYW1lOiBcIkNhZXNhclwiLCB3aW5zOiAxMiwgY29sb3I6IFwiIzNiODJmNlwiIH0sXG4gICAgICB7IGlkOiBcIjNcIiwgbmFtZTogXCJBbGV4YW5kZXJcIiwgd2luczogMTAsIGNvbG9yOiBcIiMyMmM1NWVcIiB9LFxuICAgICAgeyBpZDogXCI0XCIsIG5hbWU6IFwiSGFubmliYWxcIiwgd2luczogOCwgY29sb3I6IFwiIzhiNWNmNlwiIH0sXG4gICAgXVxuICAgIGF3YWl0IGZzLndyaXRlRmlsZShEQl9QQVRILCBKU09OLnN0cmluZ2lmeShkZWZhdWx0UGxheWVycywgbnVsbCwgMikpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYXllcnMoKTogUHJvbWlzZTxQbGF5ZXJbXT4ge1xuICBhd2FpdCBpbml0aWFsaXplREIoKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKERCX1BBVEgsIFwidXRmLThcIilcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZWFkaW5nIHBsYXllcnM6XCIsIGVycm9yKVxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlUGxheWVycyhwbGF5ZXJzOiBQbGF5ZXJbXSk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBlbnN1cmVEYXRhRGlyKClcblxuICB0cnkge1xuICAgIGF3YWl0IGZzLndyaXRlRmlsZShEQl9QQVRILCBKU09OLnN0cmluZ2lmeShwbGF5ZXJzLCBudWxsLCAyKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIHBsYXllcnM6XCIsIGVycm9yKVxuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBzYXZlIHBsYXllcnNcIilcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByb21pc2VzIiwiZnMiLCJwYXRoIiwiREJfUEFUSCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZW5zdXJlRGF0YURpciIsImRhdGFEaXIiLCJkaXJuYW1lIiwiYWNjZXNzIiwibWtkaXIiLCJyZWN1cnNpdmUiLCJpbml0aWFsaXplREIiLCJkZWZhdWx0UGxheWVycyIsImlkIiwibmFtZSIsIndpbnMiLCJjb2xvciIsIndyaXRlRmlsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQbGF5ZXJzIiwiZGF0YSIsInJlYWRGaWxlIiwicGFyc2UiLCJlcnJvciIsImNvbnNvbGUiLCJzYXZlUGxheWVycyIsInBsYXllcnMiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_redenlongcop_Documents_risk_leaderboard_github_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/players/route.ts */ \"(rsc)/./app/api/players/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/players/route\",\n        pathname: \"/api/players\",\n        filename: \"route\",\n        bundlePath: \"app/api/players/route\"\n    },\n    resolvedPagePath: \"/Users/redenlongcop/Documents/risk-leaderboard-github/app/api/players/route.ts\",\n    nextConfigOutput,\n    userland: _Users_redenlongcop_Documents_risk_leaderboard_github_app_api_players_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwbGF5ZXJzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwbGF5ZXJzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcGxheWVycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJlZGVubG9uZ2NvcCUyRkRvY3VtZW50cyUyRnJpc2stbGVhZGVyYm9hcmQtZ2l0aHViJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnJlZGVubG9uZ2NvcCUyRkRvY3VtZW50cyUyRnJpc2stbGVhZGVyYm9hcmQtZ2l0aHViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JlZGVubG9uZ2NvcC9Eb2N1bWVudHMvcmlzay1sZWFkZXJib2FyZC1naXRodWIvYXBwL2FwaS9wbGF5ZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wbGF5ZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcGxheWVyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcGxheWVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yZWRlbmxvbmdjb3AvRG9jdW1lbnRzL3Jpc2stbGVhZGVyYm9hcmQtZ2l0aHViL2FwcC9hcGkvcGxheWVycy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplayers%2Froute&page=%2Fapi%2Fplayers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplayers%2Froute.ts&appDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fredenlongcop%2FDocuments%2Frisk-leaderboard-github&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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